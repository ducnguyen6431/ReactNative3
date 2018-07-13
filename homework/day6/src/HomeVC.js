import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import HomeVCListItem from './HomeVCListItem'

const restaurants = [
    {
        name: 'MC Donals',
        addr: '691 Romaguera Ville Apt. 094',
        star: 3,
        type: 'Restaurant',
        distance: '0,2 mile',
        icon: require("./ball.png")
    },
    {
        name: 'Dunkin Donuts',
        addr: '999 Berge Parkway Suite 599',
        star: 2,
        type: 'Patisserie',
        distance: '0,5 mile',
        icon: require("./RU.png")
    },
    {
        name: 'Pizza Hut',
        addr: '190 Jessyca Ranch Apt. 617',
        star: 4,
        type: 'Fast food',
        distance: '1 mile',
        icon: require("./FR.png")
    },
    {
        name: 'Taco Bell',
        addr: '49 Ramon Garden Apt. 143',
        star: 5,
        type: 'Restaurant',
        distance: '2 mile',
        icon: require("./BZ.png")
    },
    {
        name: 'Kentucky Fried Chicken',
        addr: '5617 GiuseppeInlet',
        star: 4,
        type: 'Fast food',
        distance: '2,2 mile',
        icon: require("./CR.png")
    }
]

class HomeVC extends Component {
    state = {  }

    renderItem = ({item}) => <HomeVCListItem data={item}/>
    keyExtractor = (item, index) => item.name

    render() {
        return (
            <View>
                <View style={[{marginTop:20, height:50, alignItems:'center', justifyContent:'center', borderBottomColor:'black', borderBottomWidth:1}]}>
                    <Text style={{fontSize:20}}>Holder</Text>
                </View>
                <FlatList data={restaurants} keyExtractor={this.keyExtractor} renderItem={this.renderItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    navBar: {

    },
    itemList: {

    },
    screenTitle: {

    }
});

export default HomeVC;