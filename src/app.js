import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDKZESiDnmvfjjRj0jJ8yp0FJy6ZT6dxS0",
      authDomain: "auth-c0c75.firebaseapp.com",
      databaseURL: "https://auth-c0c75.firebaseio.com",
      projectId: "auth-c0c75",
      storageBucket: "auth-c0c75.appspot.com",
      messagingSenderId: "935754404808"
  });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication Demo" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
