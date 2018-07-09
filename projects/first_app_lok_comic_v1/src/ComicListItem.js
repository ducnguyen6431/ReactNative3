import React, {Component} from 'react'
import {Dimensions, View, Text, StyleSheet, Image} from 'react-native'

const windowWidth = Dimensions.get('window').width/2

class ComicListItem extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: this.props.srcs}}/>
                <Text style={styles.text}>LOK Comic #7 - Chất béo (P.1)</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: windowWidth
    },
    image: {
        height: 150
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ComicListItem;