import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginStack } from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB5da5iFzdTcAo6xJPvxoBoZDv1Stk8E7s",
    authDomain: "myfirst-27e45.firebaseapp.com",
    databaseURL: "https://myfirst-27e45.firebaseio.com",
    projectId: "myfirst-27e45",
    storageBucket: "myfirst-27e45.appspot.com",
    messagingSenderId: "292259440070"
    });
  }

  render() {
    return (
      <LoginStack />
    );
  }
}


export default App;
