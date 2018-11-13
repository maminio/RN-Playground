import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 34, color: 'black', textAlign: 'center' }}>
          Your First React Native App
        </Text>
        <Image
          source={{ uri: 'https://lorempixel.com/400/200/sports' }}
          style={{ width: 250, height: 180, borderRadius: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
