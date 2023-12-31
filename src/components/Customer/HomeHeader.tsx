import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '../../../assets/icons';
import { colors } from '../DEFAULTS';

const HomeHeader = () => {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    }}>
      <View style={{ flexDirection: 'row'}}>
        <Pressable onPress={() => alert('Activate the Menu Items')}>
            <Image
                source={icons.menu}
                style={{
                    width: 45,
                    height: 45
                }}
                resizeMode='contain'
            />
        </Pressable>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Pressable 
                onPress={() => {}} 
                style={{ marginLeft: 18 }}
            >
                <Text style={{
                    color: colors.primaryBg,
                    fontFamily: 'Bold-Sen',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: '700',
                    textTransform: 'capitalize'
                }}>Deliver To</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: "Regular-Sen",
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: '400',
                        color: colors.secondaryTxt,
                    }}>Add your address</Text>

                    <Image
                        source={icons.dropdown}
                        style={{
                            marginLeft: 8
                        }}
                        resizeMode='contain'
                    />
                </View>
            </Pressable>
        </View>
      </View>

      <Pressable onPress={() => alert('Activate Cart Items')}>
        <Image 
            source={icons.cart}
            style={{
                width: 45,
                height: 45
            }}
            resizeMode='contain'
        />
      </Pressable>
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({

});