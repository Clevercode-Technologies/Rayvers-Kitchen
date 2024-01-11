import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../../../assets/images'
import { icons } from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'

interface RestaurantCardProp {
    restaurant: {
        image: ImageSourcePropType;
        id: number;
        name: string;
        desc: string;
        rating: string;
    }
}

const RestaurantCard: React.FC<RestaurantCardProp> = ({ restaurant }) => {
    const navigation = useNavigation();

  return (
    <Pressable
    // @ts-ignore
    onPress={() => navigation.navigate('RestaurantDetails')}
    style={{
        marginTop: 20,
        margin: 15,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 12,
        elevation: 1,
        shadowColor: '#BABDCF',
        shadowOffset: {
        width: 0,
        height: 7,
        },
        shadowOpacity: 0.19,
        shadowRadius: 7.84,
    }}>
        <Image 
            source={restaurant.image}
            style={{
                width: '100%',
                height: 115,
                borderRadius: 10,
            }}
            resizeMode='cover'
        />

        <Text style={{
            fontSize: 20,
            fontFamily: 'Regular-Sen',
            fontStyle: 'normal',
            fontWeight: '400',
            color: '#181C2E',
            marginTop: 30,
            marginBottom: 5
        }}>{restaurant.name}</Text>
        <Text style={{
            fontSize: 14,
            fontFamily: 'Regular-Sen',
            fontStyle: 'normal',
            fontWeight: '400',
            color: '#A0A5BA',
            marginTop: 5,
            marginBottom: 5
        }}>{restaurant.desc}</Text>

        <View style={{ flexDirection: 'row', marginTop: 17 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 24 }}>
                <Image 
                    source={icons.star}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: 9,
                    }}
                    resizeMode='contain'
                />
                <Text>4.7</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 24 }}>
                <Image 
                    source={icons.delivery}
                    style={{
                        width: 23,
                        height: 16,
                        marginRight: 9,
                    }}
                    resizeMode='contain'
                />
                <Text>Free</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image 
                    source={icons.clock}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: 9
                    }}
                    resizeMode='contain'
                />
                <Text>20 min</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default RestaurantCard;

const styles = StyleSheet.create({});