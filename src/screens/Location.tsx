import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from '../components/DEFAULTS'
import { Image } from 'react-native'
import { images } from '../../assets/images'
import { icons } from '../../assets/icons'

const Location = () => {
  return (
    <SafeAreaView>
      <View style={{ 
            height: SCREEN_HEIGHT, 
            width: SCREEN_WIDTH, 
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <View style={{
            alignItems: 'center',
            width: SCREEN_WIDTH - 80
        }}>
            <Image 
                source={images.globe}
                style={{
                    width: 206,
                    height: 250
                }}
                resizeMode='contain'
            />
            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 327,
                height: 67,
                backgroundColor: colors.primaryBg,
                borderRadius: 12,
                justifyContent: 'center',
                marginTop: 94
            }}>
                <Text style={{
                    textTransform: 'uppercase',
                    color: colors.white,
                    fontFamily: 'Bold-Sen',
                    fontSize: 16,
                    fontStyle: 'normal',
                    marginRight: 24
                }}>Access Location</Text>
                <Image 
                    source={icons.mapPin}
                    style={{
                        width: 32,
                        height: 32
                    }}
                    resizeMode='contain'
                />
            </Pressable>

            <Text style={{
                textAlign: 'center',
                marginTop: 37,
                color: colors.secondaryTxt,
                fontWeight: '400',
                fontSize: 16,
                fontFamily: 'Regular-Sen'
            }}>YOUR LOCATION WOULD BE ACCESSED ONLY WHEN USING THE APP</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default memo(Location)

const styles = StyleSheet.create({

});