import React from 'react';
import {StyleSheet, Text, View, Button} from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const MealDetailScreen = ({navigation: {popToTop}}) => {
    const goBackToCategories= () => {
        popToTop();
    };

    return (
        <View style={styles.screen}>
            <Text>The meal detail screen</Text>
            <Button title="Go back to categories" onPress={goBackToCategories}/>
        </View>
    );
};

export default MealDetailScreen;
