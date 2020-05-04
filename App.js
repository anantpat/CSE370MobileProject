/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Login from "./LoginScreen";
import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (

        <Login />

      // <NativeRouter>
      //   <View style={styles.container}>
      //   <Switch>
      //     <Route exact path="/" component={Login} />
      //     <Route exact path="/home" component={Home} />
      //   </Switch>
      //   </View>
      // </NativeRouter>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
