import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { BASE_URL, SCREEN_WIDTH, colors } from "../../components/DEFAULTS";
import { historyData } from "../../DATA";
import { OrderItem } from "../../components";
import {
  GradientProps,
  SkeletonContainer,
} from "react-native-dynamic-skeletons";
import { generateRandomNumber } from "../../utils/idGenerator";
import { LinearGradient } from "react-native-svg";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const Gradient = (props: GradientProps) => <LinearGradient {...props} />;

const History = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [history, setHistory] = useState<any | null>(null);
  const token = useSelector((state: RootState) => state.data.token);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/orderitems?options=history`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        }
      });

      if (response.ok) {
        setLoading(false);

        const result = await response.json();
        console.log('result: from ongoing orders', result);
        setHistory(result);

        
      } else {
        setLoading(false);
        setHistory(null);

        const res = await response.json();
        console.log(res);
      }
    } catch (error: any) {
      console.log(`Error from sendOrders: ${error.message}`);
      setHistory(null);
    }
  };

  const reFetch = () => {};

  return (
    <ScrollView
      style={{ width: SCREEN_WIDTH }}
      contentContainerStyle={{ alignItems: "center" }}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={reFetch}
          tintColor={colors.primaryBg}
          enabled={true}
          style={{}}
        />
      }
    >
      {loading &&
        new Array(4).fill(0).map((_) => (
          <SkeletonContainer
            animationType="leftRight"
            Gradient={Gradient}
            isLoading={loading}
            duration={2000}
            style={{}}
            key={generateRandomNumber(4)}
          >
            <View
              style={{
                height: 145,
                width: SCREEN_WIDTH - 48,
                marginBottom: 24,
                borderRadius: 8,
                marginHorizontal: 13,
              }}
            />
          </SkeletonContainer>
        ))}
      {loading &&
        historyData.map((item, index) => (
          <View style={{ marginTop: index !== 0 ? 24 : 0 }} key={index}>
            <OrderItem type={"history"} data={item} />
          </View>
        ))}
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({});
