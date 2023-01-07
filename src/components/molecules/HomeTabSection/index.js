import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
} from '../../../assets/Dummy';
import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: 'black',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      Shadowopacity: 0,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? 'black' : 'grey',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerNewTaste}>
        <ItemListFood
          image={FoodDummy1}
          type={'product'}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
          name={'Nasgor'}
          price={'20.000'}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerPopular}>
        <ItemListFood
          image={FoodDummy1}
          type={'product'}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
          name={'Nasgor'}
          price={'20.000'}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerRecommended}>
        <ItemListFood
          image={FoodDummy1}
          type={'product'}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
          name={'Nasgor'}
          price={'20.000'}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
        />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Terbaru'},
    {key: '2', title: 'Pupuler'},
    {key: '3', title: 'Rekomendasi'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  containerNewTaste: {paddingTop: 8, paddingHorizontal: 24},
  containerPopular: {paddingTop: 8, paddingHorizontal: 24},
  containerRecommended: {paddingTop: 8, paddingHorizontal: 24},
});
