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
import { Spinner } from "native-base";

enum STATUS {
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  PENDING = "pending",
}

const Gradient = (props: GradientProps) => <LinearGradient {...props} />;

const Ongoing = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [CancelledLoading, setCancelledLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const [ongoingOrders, setOngoingOrders] =
    useState<Array<OrderOngoingPayload> | null>(null);
  const [unfilteredOrders, setUnfilteredOrders] =
    useState<Array<OrderOngoingPayload> | null>(null);

  // console.log("ongoingOrders: ", ongoingOrders);

  // Redux State
  const token = useSelector((state: RootState) => state.data.token);

  useEffect(() => {
    if (unfilteredOrders) {
      const filteredOrders = unfilteredOrders.filter(
        (order) => order.status === STATUS.PENDING
      );
      setOngoingOrders(filteredOrders);
    }
  }, [unfilteredOrders]);

  console.log("token: ", token);

  const fetchOngoingOrder = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/orderitems/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (response.ok) {
        setLoading(false);
        const result = await response.json();
        // console.log("result: ", result);
        setUnfilteredOrders(result);
        setError(null);
      } else {
        const res = await response.json();
        setLoading(false);
        setOngoingOrders(null);
        console.log(res);
      }
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const reFetch = async () => {
    await fetchOngoingOrder();
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
        ongoingOrders?.map((item, index) => (
          <View style={{ marginTop: index !== 0 ? 24 : 0 }} key={index}>
            <OrderItem
              setCancelledLoading={setCancelledLoading}
              type={"ongoing"}
              data={item}
            />
          </View>
        ))}
      {!loading && (ongoingOrders?.length === 0 || ongoingOrders === null) && (
        <View
          style={{
            borderRadius: 12,
            borderWidth: 2,
            borderStyle: "dashed",
            padding: 12,
            paddingVertical: 24,
            width: SCREEN_WIDTH - 48,
          }}
        >
          <Text
            style={{
              fontFamily: "Regular-Sen",
              fontSize: 18,
              color: colors.primaryTxt,
              textAlign: "center",
            }}
          >
            You have no ongoing orders
          </Text>
        </View>
      )}
      {error && (
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Regular-Sen",
            color: "red",
            marginTop: 5,
          }}
        >
          {error}
        </Text>
      )}
      {CancelledLoading && (
        <View
          style={{
            position: "absolute",
            top: "35%",
            bottom: "65%",
            left: "40%",
            right: "70%",
            width: 150,
            height: 100,
            backgroundColor: "#121223",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Spinner color={colors.white} size="lg" />
          <Text
            style={{
              color: colors.white,
              fontSize: 16,
              fontFamily: "Regular-Sen",
              marginTop: 15,
            }}
          >
            Cancelling Order
          </Text>
        </View>
      )}
      <View style={{ height: 100, width: SCREEN_WIDTH - 13 }} />
    </ScrollView>
  );
};

export default Ongoing;

const styles = StyleSheet.create({});
