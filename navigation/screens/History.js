import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HistoryScreen({ route }) {
  const { bookHistory = [] } = route.params || {};

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Image source={require('./logo.png')} style={styles.image} />
        <Text style={styles.appName}>Reading Journey</Text>
      </View>
      <Text style={styles.title}>Last Three Books Read:</Text>
      {bookHistory.map((book, index) => (
        <View key={index} style={styles.bookCard}>
          <Text style={styles.bookTitle}>Title: {book.title}</Text>
          <Text style={styles.bookAuthor}>Author: {book.author}</Text>
          <Text style={styles.bookGenre}>Genre: {book.genre}</Text>
          <Text style={styles.bookPages}>Number of Pages: {book.pages}</Text>
        </View>
      ))}
      <Image
        source={require('./read.png')}
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
      image1: {
        width: 450,
        height: 450,
        marginLeft:70,
      },
  image: {
    width: 150,
    height: 150,
    marginRight: 50,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookCard: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
  },
  bookGenre: {
    fontSize: 16,
  },
  bookPages: {
    fontSize: 16,
  },
});
