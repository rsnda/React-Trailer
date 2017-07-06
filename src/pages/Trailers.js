import React, {Component} from 'react';
import {View, Button, FlatList, Text, Image, TouchableHighlight, AsyncStorage} from 'react-native';
import {sortBy} from 'lodash';

import {TRAILER_PAGE_NAME} from './Trailer'

export const TRAILERS_PAGE_NAME = 'TRAILERS_PAGE'

export default class TrailersPage extends Component{

    static navigationOptions = {
        title: 'Trailers',
    };

    constructor(props) {
        super(props)
        // ** NAVIGATION **
        this.navigate = this.props.navigation.navigate

        // ** Scope binding *
        this._renderItem = this._renderItem.bind(this)

        // Creating an empty movies state
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.getMovieFromApi()
    }

    getMovieFromApi() {
        // async call to the api :
        return fetch('http://10.1.0.101:8080/trailers')
            .then((response) => {
                setTimeout(() => {}, 0);
                return response.json()
            }) // Convert response to json
            .then((responseJson) => {
                myMovies = responseJson
                // Sort the movies by title :
                myMovies = sortBy(myMovies, (o) => o.title)

                // Change the state in the async func
                this.setState({
                    movies: myMovies
                })

                try {
                    AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(myMovies));
                } catch (error) {
                    console.error(error)
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // ** FLAT LIST FUNCTIONS **
    _renderItem = ({item}) => (

        <TouchableHighlight  onPress={() => this.navigate(TRAILER_PAGE_NAME, {item})}>
            <View  style={{flex: 1, flexDirection: 'row'}}>
                <Image source={{uri: item.poster}} style={{width: 50, height: 70}}/>
                <View style={{flexDirection: 'column'}}>
                    <Text>
                        {item.title}
                    </Text>
                    <Text>
                        {item.genre}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>

    );

    render() {
        console.log(this.state.movies)
        return (
            <FlatList
                data={this.state.movies}
                renderItem={this._renderItem}
                keyExtractor={item => item.title}/>
        )
    }

}
