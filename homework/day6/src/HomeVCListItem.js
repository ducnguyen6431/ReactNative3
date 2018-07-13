import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const paddingImage = 12

class HomeVCListItem extends Component {
    state = {  }
    holder = 3
    render() {
        return (
            <View style={[styles.allView, {height:windowHeight / 6, width: windowWidth, borderBottomColor:'gray', borderBottomWidth:0.3}]}>
                <View key='mainInfo' style={[styles.allView, { flexDirection:'row', flex:3 }]}>
                    <View style={[styles.allView, {width:windowHeight / 6 - 20, height:windowHeight / 6 - 20}]}>
                        <Image source={this.props.data.icon} style={[{borderRadius:(windowHeight / 6 - 20 - paddingImage * 2) / 2, width:windowHeight / 6 - 20 - paddingImage * 2, height:windowHeight / 6 - 20 - paddingImage * 2}]}/>
                    </View>
                    <View style={[styles.allView, {width:windowWidth - windowHeight / 6 + 20, alignItems:'flex-start'}]}>
                        <Text style={[{fontWeight: 'bold', textAlign:'left', paddingBottom:5}]}>{this.props.data.name}</Text>
                        <Text style={[{textAlign: 'left'}]}>{this.props.data.addr}</Text>
                    </View>
                </View>
                <View key='ratingAndLoc' style={[styles.allView, styles.bottomView, {flex:1}]}>
                    <View style={styles.star}>
                        {Array.from(new Array(this.props.data.star)).map(item =>
                            <View style={{ flex: 0.15, height: 5, backgroundColor: 'green', margin: 1 }}></View>
                        )}
                    </View>
                    <Text style={[{flex:0.565}]}>{this.props.data.type}</Text>
                    <Text style={[{flex:0.2}]}>{this.props.data.distance}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    allView: {
        alignItems:'center', 
        justifyContent:'center'
    },
    star: {
        flex: 0.235,
        marginLeft: 4,
        flexDirection: 'row'
    }
})

export default HomeVCListItem;