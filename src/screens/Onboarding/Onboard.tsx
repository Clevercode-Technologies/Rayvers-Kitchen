import { Animated, Button, FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { memo, useRef, useState } from 'react'
import { MARGIN, SCREEN_HEIGHT, SCREEN_WIDTH, colors } from '../../components/DEFAULTS'
import { images } from '../../../assets/images'
import { useNavigation } from '@react-navigation/native';
import { slideData } from '../../DATA';

const Onboard = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList | null>(null); // Define the flatListRef

    const navigation = useNavigation();
    
    const skipToNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < slideData.length) {
            setCurrentIndex(nextIndex);
            console.log(currentIndex);
            if (flatListRef.current) {
                flatListRef.current.scrollToIndex({ index: nextIndex });
            }
        }
    }

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX }}}],
        { useNativeDriver: false }
    );

    const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / (SCREEN_WIDTH - 48));
        setCurrentIndex(index);
    };

    const Indicator = () => {
        return (
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                {slideData.map((_, i) => {
                    const inputRange = [(i - 1) * SCREEN_WIDTH, i * SCREEN_WIDTH, (i + 1) * SCREEN_WIDTH];
    
                    const bg = scrollX.interpolate({
                        inputRange,
                        outputRange: [colors.inactiveSlide, colors.activeSlide, colors.inactiveSlide],
                        extrapolate: "clamp"
                    });
    
                    const width = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: "clamp"
                    })
    
    
                    return (
                        <Animated.View  
                        key={`indicator-{${i}}`}
                            style={{
                                width,
                                height: 10,
                                backgroundColor: bg,
                                marginHorizontal: i !== 0 || i !== slideData.length - 1 ? 5 : 0,
                                borderRadius: 10
                            }}
                        />
                    )
                })}
            </View>
        )
    }

  return (
      <SafeAreaView style={{ backgroundColor: colors.white, flex: 1, height: SCREEN_HEIGHT }}>
        <StatusBar backgroundColor={'white'} barStyle={'light-content'} />
        <View style={styles.container}>
           <Animated.FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                scrollEventThrottle={35}
                onScroll={handleScroll}
                onMomentumScrollEnd={handleMomentumScrollEnd}
                ref={flatListRef}
                style={{
                    // flex: 4,
                    width: SCREEN_WIDTH - 48,
                    backgroundColor: colors.white
                }}
                data={slideData}
                keyExtractor={(item,) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <View 
                    style={{
                        height: SCREEN_HEIGHT - 300,
                        width: SCREEN_WIDTH - 48,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <Image 
                            source={item.preview} 
                            style={{
                                width: 240,
                                height: 292
                            }}
                            resizeMode='contain'
                        />

                        <Text style={styles.titleTxt}>{item.title}</Text>
                        <Text style={styles.descTxt}>{item.desc}</Text>
                    </View>
                )}
           />

           <View style={{
                width: SCREEN_WIDTH - 48,
                justifyContent: 'flex-start',
                alignItems: 'center',
                flex: 20
           }}>
            <View style={{ marginTop: 32, marginBottom: 29 }}>
                <Indicator />
            </View>
            <Pressable
            onPress={skipToNext}
            style={styles.btn}>
                <Text style={{
                    color: colors.white,
                    fontSize: 14,
                    fontFamily: "SemiBold-Sen",
                    fontStyle: "normal",
                    fontWeight: "700",
                    textTransform: "uppercase"
                }}>Next</Text>
            </Pressable>
            <Pressable
            // @ts-ignore
            onPress={() => navigation.navigate('RouteSelection')}
            style={styles.skipBtn}>
                <Text style={{
                    color: colors.secondaryTxt,
                    fontSize: 16,
                    fontFamily: "Regular-Sen",
                    fontStyle: "normal",
                    fontWeight: "400",
                }}>Skip</Text>
            </Pressable>
           </View>

        </View>
      </SafeAreaView>
  )
}

export default memo(Onboard);

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        alignItems: 'center',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH
    },
    titleTxt: {
        color: colors.primaryTxt,
        fontFamily: 'ExtraBold-Sen',
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "800",
        marginTop: 63,
        marginBottom: 18,
    },
    descTxt: {
        textAlign: 'center',
        color: colors.secondaryTxt,
        fontFamily: 'Regular-Sen',
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: '400'
    },
    btn: {
        backgroundColor: colors.primaryBg,
        width: '100%',
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    skipBtn: {
        width: '100%',
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
    }
});