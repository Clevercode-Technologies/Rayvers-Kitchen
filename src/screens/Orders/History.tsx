import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../components/DEFAULTS';
import { historyData } from '../../DATA';
import { OrderItem } from '../../components';

const History = () => {
  return (
    <ScrollView
      style={{ width: SCREEN_WIDTH }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {historyData.map((item, index) => (
        <View style={{ marginTop: index !== 0 ? 24 : 0 }} key={index}>
          <OrderItem type={'history'} data={item} />
        </View>
      ))}
    </ScrollView>
  )
}

export default History;

const styles = StyleSheet.create({});