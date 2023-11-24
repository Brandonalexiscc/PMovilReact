import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import ArtistBox from './ArtistBox';
import { Actions } from 'react-native-router-flux';
import ArtistDetailView from './ArtistDetailView';
export default class ArtistList extends Component <Props>{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state ={
            dataSource: ds
        }
    }

    updateDataSource = (data) =>{
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }

    componentDidMount(){
        this.updateDataSource(this.props.artists)
    }

    componentWillUnmount(){
        if(this.props){
            const artist = this.props.artists;
            if(artist){
                this.updateDataSource(artist);
            }
        }
    }

    handlePress(artist){
        Actions.detail({artist: artist})
    }

    render (){
        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(artist) => {
                    return (
                        
                        <TouchableOpacity
                            onPress={() => this.handlePress(artist)}
                        >
                            <ArtistBox artist={artist} />
                        </TouchableOpacity>
                    )
                }}
            />
        );
    }

}
