import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FoodDummy1, IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy1} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Nasgor</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Descriptionnnnn lorem Culpa sunt aute incididunt commodo irure ut
            ex. Velit dolore reprehenderit enim in proident ut dolor do quis non
            ad nisi. Mollit nulla commodo eiusmod exercitation fugiat proident
            nostrud laboris. Esse proident eu anim Lorem. Fugiat occaecat
            ullamco consectetur qui.
          </Text>
          <Text style={styles.label}>Bahan: </Text>
          <Text style={styles.desc}>Des Bahan</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Peice</Text>
            <Text style={styles.priceTotal}>IDR. 20.0000</Text>
          </View>
          <View style={styles.button}>
            <Button
              text={'Order Now'}
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  priceContainer: {flex: 1},
  button: {width: 163},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  priceTotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
});
