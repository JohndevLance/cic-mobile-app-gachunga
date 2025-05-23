import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useUserStore} from '../../store/useUserStore';
import {authorize} from 'react-native-app-auth';

// {"installed":{"client_id":"170977442938-m5dslieteufjk6jacqds39ntqu3gp8v6.apps.googleusercontent.com","project_id":"seventh-acronym-460710-r8","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs"}}

export default function Login() {
  const login = useUserStore(state => state.login);

  const config = {
    issuer: 'https://accounts.google.com',
    clientId:
      '170977442938-m5dslieteufjk6jacqds39ntqu3gp8v6.apps.googleusercontent.com',
    redirectUrl: 'com.cic_mobile_app:/oauthredirect',
    scopes: ['openid', 'profile', 'email'],
  };

  async function handleSSOLogin() {
    try {
      const result = await authorize(config);
      console.log('Logged in', result);
      login(result);
      // You can now use accessToken or idToken
    } catch (error) {
      console.error('Failed to log in', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome! Please log in.</Text>
      <Button title="Login" onPress={handleSSOLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 18, marginBottom: 20},
});
