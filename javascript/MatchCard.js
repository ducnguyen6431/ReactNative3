import React, {Component} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class MatchCard extends Component {
    state = {  }
    render() {
        return (
            <View key={this.props.mkey} style={styles.viewMatch}>
              <Text style={[styles.allText]}>{this.props.startTime}</Text>
              <View style={[{flexDirection:'row', marginTop:15, justifyContent:'center'}]}>
                <Text style={[styles.allText]}>{this.props.lhs_country}</Text>
                <Image style={[styles.flagImg, {marginLeft:5, marginRight:10}]} source={this.props.lhs_flag}/>
                <Text style={styles.allText}> - </Text>
                <Image style={[styles.flagImg, {marginRight:5, marginLeft:10}]} source={this.props.rhs_flag}/>
                <Text style={[styles.allText]}>{this.props.rhs_country}</Text>
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

export default MatchCard;