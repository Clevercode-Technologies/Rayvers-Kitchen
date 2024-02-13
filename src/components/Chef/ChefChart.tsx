import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LineChart } from "react-native-chart-kit";
import { chartData } from "../../DATA";
import { Button, CheckIcon, Menu, Select, VStack } from "native-base";
import { SCREEN_WIDTH, colors } from '../DEFAULTS';
import { icons } from '../../../assets/icons';
import { images } from '../../../assets/images';

const ChefChart = () => {
  const [position, setPosition] = React.useState<string>("auto");
  const [value, setValue] = React.useState<string>("Daily");
  return (
    <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 16,
            backgroundColor: colors.white,
            marginHorizontal: 24,
            padding: 16,
            borderRadius: 20,
            overflow: 'hidden'
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.primaryTxt,
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                }}
              >
                Total Revenue
              </Text>
              <Text
                style={{
                  color: colors.primaryTxt,
                  fontFamily: "SemiBold-Sen",
                  fontSize: 22,
                }}
              >
                $2,241
              </Text>
            </View>

            {/* DropDown Picker */}
            <View>
              <VStack space={6} alignSelf="flex-start" w="100%">
                <Menu
                  w="160"
                  shouldOverlapWithTrigger={false} // @ts-ignore
                  placement={position == "auto" ? undefined : position}
                  trigger={(triggerProps) => {
                    return (
                      <Pressable
                        {...triggerProps}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          borderWidth: 2.5,
                          borderColor: "#E8EAED",
                          padding: 8,
                          borderRadius: 7,
                        }}
                      >
                        <Text
                          style={{
                            color: "#9C9BA6",
                            fontFamily: "Regular-Sen",
                          }}
                        >
                          {value}
                        </Text>
                        <Image
                          source={icons.dropDownChart}
                          style={{
                            width: 13.95,
                            height: 13.95,
                          }}
                        />
                      </Pressable>
                    );
                  }}
                >
                  <Menu.Item onPress={() => setValue("Monthly")}>
                    Monthly
                  </Menu.Item>
                  <Menu.Item onPress={() => setValue("Weekly")}>
                    Weekly
                  </Menu.Item>
                  <Menu.Item onPress={() => setValue("Daily")}>Daily</Menu.Item>
                </Menu>
              </VStack>
            </View>

            <Pressable
              onPress={() => alert("Implement details page for this shit.")}
            >
              <Text
                style={{
                  color: colors.primaryBg,
                  fontSize: 14,
                  fontFamily: "Regular-Sen",
                  textDecorationLine: "underline",
                }}
              >
                See Details
              </Text>
            </Pressable>
          </View>
          <View style={{ marginLeft: - 40 }}>
            <LineChart
              data={{
                labels: [
                  "10AM",
                  "11AM",
                  "12PM",
                  "01PM",
                  "02PM",
                  "03PM",
                  "04PM",
                ],
                datasets: [
                  {
                    data: chartData,
                    //   color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                    color: () => colors.primaryBg,
                  },
                ],
              }}
              width={SCREEN_WIDTH} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              // withDots={false}
              // yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => colors.primaryBg,
                labelColor: (opacity = 1) => `rgba(156, 155, 166, ${opacity})`,
                style: {
                  borderRadius: 20,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: colors.primaryBg,
                  fill: colors.white,
                },
                verticalLabelRotation: 0,
                propsForBackgroundLines: {
                  stroke: "#ffffff",
                },
              }}
              withHorizontalLabels={false}
              renderDotContent={({ x, y, index, indexData }) => (
                <>
                  {index === chartData.length - 1 ? (
                    <ImageBackground
                      source={images.markerBg}
                      key={index}
                      style={{
                        position: "absolute",
                        left: x - 34,
                        top: y - 45,
                        height: 33.9,
                        width: 67,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: colors.white,
                          fontFamily: "SemiBold-Sen",
                          fontSize: 14,
                        }}
                      >
                        {`₦${indexData.toFixed(2)}`}
                      </Text>
                    </ImageBackground>
                  ) : null}
                </>
              )}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              // hidePointsAtIndex={chartData.map((item, index) => (index !== chartData.length - 1 ? index : undefined))}
            />
          </View>
        </View>
      </View>
  )
}

export default ChefChart;

const styles = StyleSheet.create({});