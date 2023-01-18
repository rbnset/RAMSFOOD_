import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import Gap from '../../components/atoms/Gap';
import {HomeProfile} from '../../components/molecules';
import FoodCard from '../../components/molecules/FoodCard';
import HomeTabSection from '../../components/molecules/HomeTabSection';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            <FoodCard image={FoodDummy1} name={'Nasi Goreng Kulit'} />
            <FoodCard image={FoodDummy2} name={'Nasi Goreng Ayam'} />
            <FoodCard image={FoodDummy3} name={'Lemon Tea'} />
            <FoodCard image={FoodDummy4} name={'Ifumie'} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {
    flex: 1,
  },
});
