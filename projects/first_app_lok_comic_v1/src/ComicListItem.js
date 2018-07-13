import React, {Component} from 'react'
import {Dimensions, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const windowWidth = Dimensions.get('window').width

class ComicListItem extends Component {
    state = {  }
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image style={styles.image} source={{uri: this.props.comic.photos[0]}}/>
                <Text style={styles.text} numberOfLines={2}>{this.props.comic.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 220,
        width: windowWidth / 2 - 2,
        marginLeft: 2,
        marginRight: 2
    },
    image: {
        height: 180
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ComicListItem;