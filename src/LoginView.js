import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput, Image } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  getLogin = () => {
  // Validar que ambos campos no estén vacíos
  if (this.state.email.trim() === "" || this.state.password.trim() === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }


    // Validar correo electrónico y contraseña antes de realizar la acción de inicio de sesión
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%#*?&])[A-Za-z\d$@$!%#*?&]{8,}$/;


    if (emailRegex.test(this.state.email)) {
      // email válido
      if (passwordRegex.test(this.state.password)) {
        // password válido
        console.warn("Welcome!");
        Actions.home();
      } else {
        // password inválido
        alert("Password inválido");
      }
    } else {
      // email inválido
      alert("Email inválido");
    }
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          style={styles.image}
          source={require('./icon.png')}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10, borderRadius: 10 }}
          onChangeText={this.handleEmailChange}
          value={this.state.email}
          placeholder=" Correo electrónico"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10, borderRadius: 10 }}
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
          placeholder=" Contraseña"
          secureTextEntry={true}
        />

        <Button
          onPress={this.getLogin}
          title='Login'
          color='green'
          accessibilityLabel='Login button'
        />
      </View>
    );
  }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 10,
        },
        image: {
            width: 100,
            height: 100,
            resizeMode: 'contain', // Ajustar la imagen para que quepa dentro del componente
            marginBottom: 20, // Espacio entre la imagen y el primer TextInput
          },
    });