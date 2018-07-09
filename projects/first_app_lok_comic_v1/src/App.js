/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import ComicListItem from './ComicListItem'
import ComicList from './ComicList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ComicListItem/> */}
        <ComicList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
  
});
