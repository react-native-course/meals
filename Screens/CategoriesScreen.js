import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const CategoriesScreen = ({navigation: {replace, navigate}}) => {
    const goToMeal = () => {
        // replace('CategoryMeals');
        navigate({routeName: 'CategoryMeals'});
    };

    return (
        <View style={styles.screen}>
            <Text>The categories screen</Text>
            <Button title="Go to meals!" onPress={goToMeal} />
        </View>
    );
};

export default CategoriesScreen;
