import axios, {Axios} from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useForm, showMessage} from '../../utils/useForm';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Klaten',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSumbit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data Register: ', data);
    dispatch({type: 'SET_LOADING', value: true});
    axioss
      .post('https://ramsfood.sisfor2020.com/api/register', data)

      .then(res => {
        console.log('success', res.data);
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);

          axios
            .post(
              'https://ramsfood.sisfor2020.com/api/user/photo',
              photoForUpload,
              {
                headers: {
                  Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                  'Content-Type': 'multipart/from-data',
                },
              },
            )
            .then(resUpload => {
              console.log('Success upload: ', resUpload);
            })
            .catch(err => {
              showMessage('Upload photo tidak berhasil');
            });
        }

        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showMessage(err?.response?.data?.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title={'Sign Up Address'}
          subtitle={'Make sute its valid'}
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label={'Nomor Telephone'}
            placeholder={'Masukkan nomor telephon'}
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Alamat'}
            placeholder={'Masukkan ALamat'}
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Nomor Rumah'}
            placeholder={'Masukkan Nomor Rumah Anda'}
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="Kota"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text={'Sign Up Now'} onPress={onSumbit} />
          <Gap height={12} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
