/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native'

import ColorBtn from './ColorBtn'

const buttonTypes = [
  {backgroundColor: "yellow"},
  {backgroundColor: "red"},
  {backgroundColor: "green"},
  {backgroundColor: "blue"}
]

class App extends Component<Props> {
  state={backgroundColor: 'red'}
  changeBackground = color => this.setState({backgroundColor: color})
  render() {
    return (
      <View style={[styles.view, {backgroundColor: this.state.backgroundColor}]}>
        {buttonTypes.map((buttonType) => 
          <ColorBtn color={buttonType.backgroundColor} onPress={this.changeBackground}/>
        )}
      </View>
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
    flex: 0.704,
    backgroundColor: 'white'
  }
});

export default App