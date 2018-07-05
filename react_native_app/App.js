/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const matches = [{
    key: 'ur_vs_fr',
    startTime: 'Jul 6 2018 - 21:00',
    lhs: {
      country: 'Uruguay',
      flag: require('./UR.png')
    },
    rhs: {
      country: 'France',
      flag: require('./FR.png')
    }
  },
  {
    key: 'bz_vs_bg',
    startTime: 'Jul 7 2018 - 01:00',
    lhs: {
      country: 'Brazil',
      flag: require('./BZ.png')
    },
    rhs: {
      country: 'Belgium',
      flag: require('./BG.png')
    },
  },
  {
    key: 'ru_vs_cr',
    startTime: 'Jul 8 2018 - 01:00',
    lhs: {
      country: 'Russia',
      flag: require('./RU.png')
    },
    rhs: {
      country: 'Croatia',
      flag: require('./CR.png')
    }
  }];

class App extends Component<Props> {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.titleView}>
          <Text style={[styles.allText, styles.titleText]}>Schedule</Text>
          <Image 
            style={{ marginTop:20, width:80, height:80 }}
            source={ require('./ball.png')}
          />
          <Text style={[styles.allText, {fontSize:20, marginTop:15}]}>FIFA WORLDCUP 2018</Text>
        </View>
        <View style={styles.view}>
          {matches.map((match) => 
            <View key={match.key} style={styles.viewMatch}>
              <Text style={[styles.allText]}>{match.startTime}</Text>
              <View style={[{flexDirection:'row', marginTop:15, justifyContent:'center'}]}>
                <Text style={[styles.allText]}>{match.lhs.country}</Text>
                <Image style={[styles.flagImg, {marginLeft:5, marginRight:10}]} source={match.lhs.flag}/>
                <Text style={styles.allText}> - </Text>
                <Image style={[styles.flagImg, {marginRight:5, marginLeft:10}]} source={match.rhs.flag}/>
                <Text style={[styles.allText]}>{match.rhs.country}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  allText: {
    color: 'white',
    textAlign:'center'
  },
  titleView: {
    marginTop:20,
    flex: 0.40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 45,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view: {
    flex: 1,
    backgroundColor: '#282f37',
    alignItems: 'center'
  },
  viewMatch: {
    marginTop: 50,
    borderRadius:10,
    height: 90,
    width: 275,
    backgroundColor: '#3e465a',
    justifyContent: 'center'
  },
  flagImg: {
    width:24, 
    height:18, 
    justifyContent:'center'
  }
});

export default App