import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from '../components/DEFAULTS'
import { icons } from '../../assets/icons'
import { Image } from 'react-native'

const RouteSelection = () => {
  return (
    <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: SCREEN_WIDTH - 48,
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Image 
                        source={icons.person}
                        style={{
                            width: 228.41,
                            height: 228.41,
                            marginBottom: 43,
                            marginTop: 63
                        }}
                        resizeMode='contain'
                    />
                    <Text style={{
                        fontSize: 31.02,
                        fontFamily: 'Regular-Sen',
                        alignSelf: 'flex-start'
                    }}>I AM A?</Text>

                    <Pressable style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: "100%",
                        height: 67,
                        backgroundColor: colors.primaryBg,
                        borderRadius: 12,
                        justifyContent: 'center',
                        marginTop: 42.7
                        }}>
                        <Text style={{
                            textTransform: 'uppercase',
                            color: colors.white,
                            fontFamily: 'Bold-Sen',
                            fontSize: 16,
                            fontStyle: 'normal',
                        }}>CHEF</Text>
                    </Pressable>
                    
                    <Pressable style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: "100%",
                        height: 67,
                        backgroundColor: colors.primaryBg,
                        borderRadius: 12,
                        justifyContent: 'center',
                        marginTop: 16
                        }}>
                        <Text style={{
                            textTransform: 'uppercase',
                            color: colors.white,
                            fontFamily: 'Bold-Sen',
                            fontSize: 16,
                            fontStyle: 'normal',
                        }}>DRIVER</Text>
                    </Pressable>

                    <Pressable style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: "100%",
                        height: 67,
                        backgroundColor: colors.primaryBg,
                        borderRadius: 12,
                        justifyContent: 'center',
                        marginTop: 16
                        }}>
                        <Text style={{
                            textTransform: 'uppercase',
                            color: colors.white,
                            fontFamily: 'Bold-Sen',
                            fontSize: 16,
                            fontStyle: 'normal',
                        }}>CUSTOMER</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default RouteSelection

const styles = StyleSheet.create({

});