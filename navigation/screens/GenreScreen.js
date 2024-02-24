import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

export default function GenreScreen({ route }) {
  const { bookDetails = {} } = route.params || {};

  const [genreCounts, setGenreCounts] = useState({
    "Science Fiction": 0,
    "Fantasy": 0,
    "Mystery": 0,
    "Romance": 0,
    "Non-Fiction": 0,
    "Comedy": 0,
  });

  useEffect(() => {
    if (bookDetails.genre) {
      // Update the count for the genre when a new book is added
      setGenreCounts((prevCounts) => ({
        ...prevCounts,
        [bookDetails.genre]: prevCounts[bookDetails.genre] + 1,
      }));
    }
  }, [bookDetails]);

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Image source={require('./logo.png')} style={styles.image} />
        <Text style={styles.appName}>Reading Journey</Text>
      </View>
      <View style={styles.words}>
      <Text style={styles.title}>Genre Screen</Text>
      {Object.entries(genreCounts).map(([genre, count]) => (
        <Text key={genre} style={styles.genreCount}>
          {genre}: {count} books
        </Text>
      ))}
      </View>
      <Image
        source={require('./pana.png')}
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
      words: {
        padding:20,
      },
      image1: {
        width: 450,
        height: 450,
        marginLeft:70,
      },
      
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    
  },
  genreCount: {
    padding:10,
    fontSize: 25,
    //marginBottom: 8,
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
  image: {
    width: 150,
    height: 150,
    marginRight: 50,
  },
  appName: {
    marginBottom: 45,
    marginTop: 40,
    fontSize: 35,
    fontWeight: 'bold',
  },
});
