import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import {getInformationArtist} from './api-client';

export default class ArtistDetailView extends Component <Props>{
    constructor(props){
        super(props);
        this.state = {
            artist: null
        };
    }
    handlePress(){
        Actions.pop()

    }
    componentDidMount() {
    
        getInformationArtist(this.props.artist.name)
            .then(data => this.setState({ artist: data }));
    }

    render(){
        const {streamable, playcount, id } = this.props.artist;

        return(
                <View style={styles.artistDetails}>
                    
                    <Image style={styles.image} source={{uri: this.props.artist.image}}/>
                    <Text style={styles.name}>{this.props.artist.name}</Text>
                    <Text style={styles.ids}>ID: {id}</Text>
                    <Text style={styles.streamable}>streamable: {streamable}</Text>
                    <Text style={styles.playcount}>playcount: {playcount}</Text>

                </View>

        );
    }
}

const styles = StyleSheet.create({
    artistDetails: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 70,
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: "center"
    },
    ids:{
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        color: '#333',
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        color: '#333',
    },
    streamable: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        color: '#333',
    },
    playcount: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        color: '#333',
    },
});