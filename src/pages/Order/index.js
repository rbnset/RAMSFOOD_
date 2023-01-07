import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  EmptyOrder,
  Header,
  HomeTabSection,
  OrderTabSection,
} from '../../components';

const Order = () => {
  const [IsEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {IsEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title={'Yours Order'} subtitle={'Wait for the best meal'} />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabContainer: {flex: 1, marginTop: 24},
});
