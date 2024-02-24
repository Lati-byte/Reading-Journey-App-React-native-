import * as React from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet, } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const predefinedGenres = [
  "Science Fiction",
  "Fantasy",
  "Mystery",
  "Romance",
  "Non-Fiction",
  "Comedy",
]; //this is an array carrying the list of genres

export default function AddScreen({ navigation }) {
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [selectedGenre, setSelectedGenre] = React.useState('');
  const [pages, setPages] = React.useState('');
  const [bookHistory, setBookHistory] = React.useState([]); // Initialize book
  const handleSubmit = () => {
    
    // Create an object with the book details
    const bookDetails = {
      title,
      author,
      genre: selectedGenre,
      pages,
    };

    // Update the book history with the new book
    const updatedHistory = [bookDetails, ...bookHistory.slice(0, 2)]; // Keep only the last three books
    setBookHistory(updatedHistory);

    // Pass the book history data to the HistoryScreen
    navigation.navigate('History', { bookHistory: updatedHistory });

    // Pass the bookDetails object to the GenreScreen
    navigation.navigate('Genre', { bookDetails });

    // Pass the bookDetails object to the HomeScreen
    navigation.navigate('Home', { bookDetails });
  };

  const handleClear = () => {
    // Clear the text inputs by setting their state to an empty string
    setTitle('');
    setAuthor('');
    setSelectedGenre('');
    setPages('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./logo.png')} style={styles.image} />
        <Text style={styles.appName}>Reading Journey</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Add a Book</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={text => setAuthor(text)}
        />
       <Text style={styles.label}>Select Genre:</Text>
        <Picker
          selectedValue={selectedGenre}
          onValueChange={(itemValue) => setSelectedGenre(itemValue)}
        >
          <Picker.Item label="Select a genre" value="" />
          {predefinedGenres.map((genre) => (
            <Picker.Item 
            key={genre} 
            label={genre} 
            value={genre} 
            style={styles.pickerItem} // Apply custom style here  
            />
          ))}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Number of Pages"
          value={pages}
          onChangeText={text => setPages(text)}
          keyboardType="numeric"
        />
         <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            onPress={handleSubmit}
            style={styles.button} // Apply custom style to the button
          />
          <Button
            title="Clear"
            onPress={handleClear}
            style={styles.button} // Apply custom style to the button
          />
        </View>
        <Image
        source={require('./bro.png')}
        style={styles.image1}
      />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 0,
    backgroundColor: '#C0C0C0',
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 50,
  },
  image1: {
    width: 450,
    height: 450,
    marginLeft:70,
  },
  header: {
    backgroundColor: '#FFBF00',
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 0,
    width: '100%',
  },
  
  appName: {
    marginBottom: 45,
    marginTop: 40,
    fontSize: 35,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    fontSize: 18,
    marginBottom: 18,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    height:70,
  },
  pickerItem: {
    fontWeight: 'bold', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight:15,
  },
});
