import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../DEFAULTS'
import { icons } from '../../../assets/icons';

interface InputProps {
    type: string;
} 

const SearchInput: React.FC<InputProps> = ({ type }) => {
    const [focus, setFocus] = useState(false);
    const [query, setQuery] = useState<string>('');

    if(type === 'home-search') {
        return (
            <View style={{ position: 'relative', width: '100%' }}>
                <TextInput 
                    style={{
                        width: '100%',
                        height: 62,
                        backgroundColor: !focus ? colors.offWhite : '#fff',
                        borderWidth: 1,
                        borderColor: !focus ? "#ffffff" : colors.primaryBg,
                        borderRadius: 10,
                        marginTop: 16,
                        paddingLeft: 45,
                    }}
                    placeholder='Search dishes, restaurants'
                    placeholderTextColor={'#676767'}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
        
                <Image 
                    source={icons.search}
                    style={{
                        width: 15,
                        height: 15,
                        position: 'absolute',
                        top: 40,
                        left: 20
                    }}
                />
            </View>
          )
    } else if(type === 'search-screen') {
        return (
            <View style={{ position: 'relative' }}>
                <TextInput 
                    style={{
                        width: '100%',
                        height: 62,
                        backgroundColor: !focus ? colors.offWhite : '#fff',
                        borderWidth: 1,
                        borderColor: !focus ? "#ffffff" : colors.primaryBg,
                        borderRadius: 10,
                        marginTop: 24,
                        paddingLeft: 45,
                    }}
                    placeholder='Search dishes, restaurants'
                    placeholderTextColor={'#676767'}
                    onChangeText={(text) => setQuery(text)}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    value={query}
                    returnKeyType='send'
                    blurOnSubmit
                />
        
                <Image 
                    source={icons.search}
                    style={{
                        width: 15,
                        height: 15,
                        position: 'absolute',
                        top: 47,
                        left: 20
                    }}
                />

                <TouchableOpacity 
                style={{ padding: 7, position: 'absolute', right: 20, top: 37, borderRadius: 100 }}
                onPress={() => setQuery('')}>
                    <Image 
                        source={icons.close}
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
            </View>
          )
    } else {
        return null;
    }
}

export default SearchInput

const styles = StyleSheet.create({});