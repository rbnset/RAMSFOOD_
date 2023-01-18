import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title={'Pembayaran'}
        subTitle={'Pastikan lagi pesananmu'}
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          image={FoodDummy1}
          items={14}
          type="order-summary"
          price={18000}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label={'Nasgor'} value={'Rp. 252.000,-'} />
        <ItemValue
          label={'Total Price'}
          value={'Rp. 252.000,-'}
          valueColor="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label={'Name'} value={'Robin Setiyawan'} />
        <ItemValue label={'Phone No.'} value={'0858 6987 7959'} />
        <ItemValue label={'Address'} value={'Wisma Garuda'} />
        <ItemValue label={'House No,'} value={'7'} />
        <ItemValue label={'City'} value={'Jogja'} />
      </View>
      <View style={styles.button}>
        <Button
          text="Checkout Now"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
