import React from 'react';
//react native
import {Platform} from 'react-native';
//react navigation
import {HeaderButton} from 'react-navigation-header-buttons';
//icons
import {Ionicons} from '@expo/vector-icons';
//constants
import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
    return (<HeaderButton {...props}
                          IconComponent={Ionicons}
                          iconSize={23}
                          color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}/>);
};

export default CustomHeaderButton;
