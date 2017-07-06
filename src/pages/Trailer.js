import React, {Component} from 'react';
import {View, Button, Text, Image} from 'react-native';

import {TRAILERS_PAGE_NAME} from './Trailers'

export const TRAILER_PAGE_NAME = 'TRAILER_PAGE'

export default class TrailerPage extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.item.title
    });

    constructor(props) {
        super(props)
        this.navigate = this.props.navigation.navigate
        this.navigateToTrailers = this.navigateToTrailers.bind(this)

    }

    navigateToTrailers() {
        this.navigate(TRAILERS_PAGE_NAME)
    }

    render() {
        const {params} = this.props.navigation.state
        console.log(params)
        return (
            <View style={{flex: 1}}>
                <Image source={{uri: params.item.poster}} style={{flex: 1}}/>
                <Text>
                    {params.item.genre}
                </Text>
                <Text>
                    {params.item.actors}
                </Text>
            </View>
        )
    }

}
