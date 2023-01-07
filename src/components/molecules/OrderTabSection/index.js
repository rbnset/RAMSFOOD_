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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerInProgress}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type={'in-progress'}
          items={3}
          totalOrder={'20.0000'}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
          type={'in-progress'}
          items={3}
          totalOrder={'20.0000'}
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
          type={'in-progress'}
          items={3}
          totalOrder={'20.0000'}
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
          type={'in-progress'}
          items={3}
          totalOrder={'20.0000'}
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4}
          type={'in-progress'}
          items={3}
          totalOrder={'20.0000'}
        />
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerPastOrders}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type={'past-orders'}
          items={3}
          rating={4}
          price={'20.0000'}
          name={'Nasgor'}
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
  1: InProgress,
  2: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
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

export default OrderTabSection;

const styles = StyleSheet.create({
  containerInProgress: {paddingTop: 8, paddingHorizontal: 24},
  containerPastOrders: {paddingTop: 8, paddingHorizontal: 24},
});
