import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDKZESiDnmvfjjRj0jJ8yp0FJy6ZT6dxS0",
      authDomain: "auth-c0c75.firebaseapp.com",
      databaseURL: "https://auth-c0c75.firebaseio.com",
      projectId: "auth-c0c75",
      storageBucket: "auth-c0c75.appspot.com",
      messagingSenderId: "935754404808"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return (
            <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
            </CardSection>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
    }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
