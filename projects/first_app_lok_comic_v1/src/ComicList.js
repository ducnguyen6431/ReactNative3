import React, {Component} from 'react'
import {View, FlatList, Text} from 'react-native'
import Orientation from 'react-native-orientation'

import {data} from './database.json'
import ComicListItem from './ComicListItem';

class ComicList extends Component {
    state = {  }

    renderItem = ({item}) => <ComicListItem comic={item}/>
    keyExtractor = (item, index) => item.id

    render() {
        return (
            <FlatList data={data} renderItem={this.renderItem} numColumns='2' keyExtractor={this.keyExtractor}/>
        );
    }
}

export default ComicList;