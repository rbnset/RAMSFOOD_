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
import ItemListMenu from '../ItemListMenu';

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

const Account = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerInProgress}>
        <ItemListMenu text={'Edit Profile'} />
        <ItemListMenu text={'Edit Profile'} />
        <ItemListMenu text={'Edit Profile'} />
        <ItemListMenu text={'Edit Profile'} />
      </View>
    </ScrollView>
  );
};

const Ramsfood = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerPastOrders}>
        <ItemListMenu />
        <ItemListMenu />
        <ItemListMenu />
        <ItemListMenu />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: Ramsfood,
});

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Ramsfood '},
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

export default ProfileTabSection;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1, marginTop: 24},
  profileDetail: {backgroundColor: 'white', paddingBottom: 26},
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
});
