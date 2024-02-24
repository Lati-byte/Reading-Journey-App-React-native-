import React , { useState, useEffect } from 'react';
import { View, Text,  StyleSheet,Image } from 'react-native';

export default function HomeScreen({ route }) {
  const { bookDetails = {} } = route.params || {};

  const [totalPagesRead, setTotalPagesRead] = React.useState(0); // Initialize total pages read state

  const { title, author, genre, pages } = bookDetails;

  const [bookCount, setBookCount] = useState(0); // Initialize book count state

   // Function to update total pages read and book count when a new book is added
   const updateTotalPagesRead = (pages) => {
    setTotalPagesRead(totalPagesRead + parseInt(pages, 10));
    setBookCount(bookCount + 1);
  };

   // Use useEffect to listen for changes in bookDetails and update total pages read and book count
  useEffect(() => {
    if (bookDetails && bookDetails.pages) {
      updateTotalPagesRead(bookDetails.pages);
    }
  }, [bookDetails]);

  // Calculate the average number of pages
  const averagePages = bookCount === 0 ? 0 : totalPagesRead / bookCount;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
        source={require('./logo.png')}
        style={styles.image}
      />
        <Text style={styles.appName}>Reading Journey</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.new}>New Entry:</Text>
      </View>
      <View style={styles.card}>
      <Text style={styles.title}>Title: {bookDetails.title}</Text>
        <Text style={styles.author}>Author: {bookDetails.author}</Text>
        <Text style={styles.genre}>Genre: {bookDetails.genre}</Text>
        <Text style={styles.pages}>Number of Pages: {bookDetails.pages}</Text>
      </View>
      <Text style={styles.no1}>
        - Total number of pages read: {totalPagesRead}
        </Text>
        <Text style={styles.no}>
        - Average number of pages in the book: {averagePages}
      </Text>
      <Image
        source={require('./lover.png')}
        style={styles.image1}
      />
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
    marginRight:50,
  },
  image1: {
    width: 350,
    height: 350,
    marginLeft:120,
  },
  header: {
    backgroundColor: '#FFBF00',
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 0,
    width: '100%',
    fontFamily:'sans-serif',
  },
  no: {
    padding: 10,
    margin: 0,
    fontSize:28,
  },
  no1: {
    padding: 10,
    margin: 0,
    fontSize:28,
  },
  new: {
    fontSize:25,
    fontWeight:'bold',
  },
  card: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 50,
    margin: 10,
    
    
  },
  appName: {
    marginBottom: 45,
    marginTop:40,
    fontSize: 35,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 39,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop:20,
  },
  author: {
    fontSize: 30,
    marginBottom: 20,
  },
  genre: {
    fontSize: 30,
    marginBottom: 20,
  },
  pages: {
    fontSize: 30,
    marginBottom: 20,
  },
  
});
