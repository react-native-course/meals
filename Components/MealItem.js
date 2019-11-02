import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import DefaultText from "./DefaultText";

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

const MealItem = ({onSelectMeal, title, image, duration, complexity, affordability}) => (
    <View style={styles.mealItem}>
        <TouchableOpacity onPress={onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground
                        source={{uri: image}}
                        style={styles.bgImage}
                    >
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>{title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <DefaultText>{duration}</DefaultText>
                    <DefaultText>{complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    </View>
);

export default MealItem;
