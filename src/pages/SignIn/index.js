import axios from 'axios';
import Axios from 'axios';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSumbit = () => {
    console.log('form: ', form);
    axios
      .post('https://ramsfood.sisfor2020.com/api/login', form)
      .then(res => {
        console.log('success', res);
        navigation.navigate('MainApp');
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subtitle={'Bismillah'} />
      <View style={styles.container}>
        <TextInput
          label={'Email Address'}
          placeholder={'Type your email address'}
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label={'Password'}
          placeholder={'Type your email address'}
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text={'Sign In'} onPress={onSumbit} />
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
