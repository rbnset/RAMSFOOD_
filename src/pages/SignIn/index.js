import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subtitle={'Hadehh Bangke Bangke Asem'} />
      <View style={styles.container}>
        <TextInput
          label={'Email Adres'}
          placeholder={'Type your email address'}
        />
        <Gap height={16} />
        <TextInput label={'Password'} placeholder={'Type your email address'} />
        <Gap height={24} />
        <Button text={'Sign In'} />
        <Gap height={12} />
        <Button
          text={'Create New Account'}
          color="grey"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
  <TextInput />;
};

export default SignIn;

<TextInput />;
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
