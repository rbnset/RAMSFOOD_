import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';

const SucessSignUp = () => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Complate</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-rewerds</Text>
      <Gap height={30} />
      <View style={styles.buttonCOntainer}>
        <Button text={'Find Foods'} />
      </View>
    </View>
  );
};

export default SucessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: 'grey',
  },
  buttonCOntainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
