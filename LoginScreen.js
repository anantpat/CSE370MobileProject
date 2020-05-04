import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)

    // Initialize our login state
    this.state = {
      email: '',
      password: ''
    }

    console.log(props)
  }
  // On our button press, attempt to login
  // this could use some error handling!
  onSubmit = () => {
    const { email, password } = this.state
 
    fetch("http://stark.cse.buffalo.edu/hci/SocialAuth.php", {
      method: "POST",
      body: JSON.stringify({
        action: "login",
        username: email,
        password
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(`Logging in with session token: ${json.user.session_token}`)

      // enter login logic here
      // SecureStore.setItemAsync('session', json.user.session_token).then(() => {
      //   this.props.route.params.onLoggedIn();
      // })
    })
  }
  render() {
    const { email, password } = this.state

    // this could use some error handling!
    // the user will never know if the login failed.
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ email: text })}
          value={email}
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ password: text })}
          value={password}
          textContentType="password"
          secureTextEntry={true}
        />
        <Button color='#ffffff' title="Forgot Password?" />
        
        <Button color='#000000' title="Submit" onPress={() => this.onSubmit} />
      </View>
    );
    }
  }

// Our stylesheet, referenced by using styles.container or styles.loginText (style.property)
const styles = StyleSheet.create({
  container: {
    // flex: 1
    flex: 1,
    backgroundColor: '#8400ff',
    padding: 30
  },
  loginText: {
    marginTop: 200,
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30, 
    color: '#FFFFFF'
  },
  input: {
    height: 70,
    borderColor: '#000000',
    borderWidth: 5,
    marginBottom: 20, 
    backgroundColor: '#ffffff',
    borderRadius: 40,
    color: '#000000'
  },
});