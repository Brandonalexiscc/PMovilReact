import React, {Component} from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import ArtistDetailView from './src/ArtistDetailView';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar/>
    <Scene key="home" component={HomeView} back/>
    <Scene key='detail' component={ArtistDetailView} back title={"Información del artista"}/>
  </Scene>
)

export default class App extends Component <Props>{
  render(){
    return <Router scenes={scenes}/>
  }
}