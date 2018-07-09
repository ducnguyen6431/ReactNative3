import React, {Component} from 'react'
import {View, FlatList, Text} from 'react-native'

import {data} from './database.json'
import ComicListItem from './ComicListItem';

class ComicList extends Component {
    state = {  }

    renderItem = ({item}) => <ComicListItem srcs={item.photos[0]}/>
    keyExtractor = (item, index) => item.id

    render() {
        return (
            <FlatList data={data} renderItem={this.renderItem} numColumns='2' keyExtractor={this.keyExtractor}/>
        );
    }
}

export default ComicList;