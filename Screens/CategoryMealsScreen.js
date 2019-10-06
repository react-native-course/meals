import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const CategoryMealsScreen = ({navigation: {navigate}}) => {
    const goToMealDetail = () => {
        navigate('MealDetail')
    }
    return (
        <View style={styles.screen}>
            <Text>The category meal screen</Text>
            <Button title="Go to details!" onPress={goToMealDetail} />
        </View>
    );
};

export default CategoryMealsScreen;
