import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../DEFAULTS';
import { foodListData } from '../../../DATA';
import FoodItem from './FoodItem';

const Dinner = () => {
  const dinnerItems = foodListData.filter((item) => item.category === 'Dinner');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ padding: 24 }}>
        <Text style={{
          color: '#9C9BA6',
          fontSize: 14,
          fontFamily: 'Regular-Sen',
          marginBottom: 20
        }}>Total {dinnerItems.length} items</Text>


        {dinnerItems.map((item, index) => (
          <View key={index}>
            <FoodItem data={item} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Dinner;

const styles = StyleSheet.create({});