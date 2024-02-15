import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  BASE_URL,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
} from "../../components/DEFAULTS";
import { OrderItem } from "../../components";
import { OngoingData } from "../../DATA";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { OrderOngoingPayload } from "../../../type";
import {
  GradientProps,
  SkeletonContainer,
} from "react-native-dynamic-skeletons";
import { LinearGradient } from "expo-linear-gradient";
import { generateRandomNumber } from "../../utils/idGenerator";

const Gradient = (props: GradientProps) => <LinearGradient {...props} />;

const Ongoing = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [ongoingOrders, setOngoingOrders] =
    useState<Array<OrderOngoingPayload> | null>(null);

  console.log("ongoingOrders: ", ongoingOrders);

  // Redux State
  const token = useSelector((state: RootState) => state.data.token);

  console.log("token: ", token);

  const fetchOngoingOrder = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/orderitems?options=ongoing`, {
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
        setOngoingOrders(result);

        
      } else {
        setLoading(false);
        setOngoingOrders(null);

        const res = await response.json();
        console.log(res);
      }
    } catch (error: any) {
      console.log(`Error from sendOrders: ${error.message}`);
      setOngoingOrders(null);
    }
  };

  const reFetch = async () => {
    // fetchOngoingOrder()
  };

  useEffect(() => {
    fetchOngoingOrder();
  }, []);

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
      {!loading &&
        OngoingData.map((item, index) => (
          <View style={{ marginTop: index !== 0 ? 24 : 0 }} key={index}>
            <OrderItem type={"ongoing"} data={item} />
          </View>
        ))}
    </ScrollView>
  );
};

export default Ongoing;

const styles = StyleSheet.create({});
