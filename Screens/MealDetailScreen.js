import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const MealDetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The meal detail screen</Text>
        </View>
    );
};

export default MealDetailScreen;
