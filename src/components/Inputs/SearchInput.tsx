import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../DEFAULTS'
import { icons } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addRecent, setSearchQuery } from '../../Redux/Splice/AppSplice';
import { RootState } from '../../Redux/store';
import { G } from 'react-native-svg';

interface InputProps {
    type: string;
} 

const SearchInput: React.FC<InputProps> = ({ type }) => {
    const [focus, setFocus] = useState(false);
    const searchQuery = useSelector((state: RootState) => state.data.searchQuery);
    const recent = useSelector((state: RootState) => state.data.keywords);

    console.log(recent);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleSearchSubmit = () => {
        dispatch(setSearchQuery(searchQuery));
        if(searchQuery?.length > 4) dispatch(addRecent({ prevSearch: searchQuery, id: recent.length !== 0 ? recent[recent.length - 1].id + 1 : 1 }));
    }


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
                    value={searchQuery}
                    onChangeText={(text) => dispatch(setSearchQuery(text))}
                    onSubmitEditing={() => {
                        handleSearchSubmit();
                        // @ts-ignore
                        navigation.navigate('Search');
                    }}
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

                <View>
                    <Pressable 
                    // @ts-ignore
                        onPress={() => navigation.navigate('Search')}
                    style={{ backgroundColor: colors.white, position: 'absolute', right: 20, bottom: 10, padding: 10, borderRadius: 100 }}>
                        <Image 
                            source={icons.send}
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    </Pressable>
                </View>
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
                    onChangeText={(text) => dispatch(setSearchQuery(text))}
                    onSubmitEditing={() => handleSearchSubmit()}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    value={searchQuery}
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
                onPress={() => dispatch(setSearchQuery(''))}>
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