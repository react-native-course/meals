import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans'
    }
});

const DefaultText = ({children}) => {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
};

export default DefaultText;
