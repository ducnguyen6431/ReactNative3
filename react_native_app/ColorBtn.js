/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

class ColorBtn extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.buttonView, {backgroundColor:this.props.color}]} onPress={() => this.props.onPress(this.props.color)} >
        <Text>{toTitleCase(this.props.color)}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  allText: {
    color: 'black'
  },
  buttonView: {
    width:100,
    height:100,
    justifyContent:'center',
    alignItems: 'center'
  },
  view: {
    flex: 0.25,
    backgroundColor: 'white'
  }
});

export default ColorBtn