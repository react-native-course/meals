import React, {useState, useEffect, useCallback} from 'react';
import {connect} from "react-redux";
//react native
import {StyleSheet, Text, View, Switch, Platform} from "react-native";
//react navigation
import {HeaderButtons, Item} from "react-navigation-header-buttons";
//constants
import Colors from "../constants/Colors";
//components
import HeaderButton from '../Components/HeaderButton';
import {setFilters} from "../store/actions/mealsActions";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

const FilterSwitch = ({label, value, onChange}) => (
    <View style={styles.filterContainer}>
        <Text>{label}</Text>
        <Switch
            trackColor={{true: Colors.primaryColor}}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            value={value}
            onValueChange={onChange}/>
    </View>
);

const FiltersScreen = ({navigation: {setParams}, dispatch}) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false),
        [isLactoseFree, setIsLactoseFree] = useState(false),
        [isVegan, setIsVeganFree] = useState(false),
        [isVegetarian, setIsVegetarianFree] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        setParams({saveFilters: saveFilters});
    }, [saveFilters]);

    const isGlutenFreeHandler = (newValue) => {
        setIsGlutenFree(newValue)
    };

    const isLactoseFreeHandler = (newValue) => {
        setIsLactoseFree(newValue);
    };

    const isVeganHandler = (newValue) => {
        setIsVeganFree(newValue);
    };

    const isVegetarianHandler = (newValue) => {
        setIsVegetarianFree(newValue);
    };


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="Gluten-Free"
                value={isGlutenFree}
                onChange={isGlutenFreeHandler}/>
            <FilterSwitch
                label="Lactose-Free"
                value={isLactoseFree}
                onChange={isLactoseFreeHandler}/>
            <FilterSwitch
                label="Vegan"
                value={isVegan}
                onChange={isVeganHandler}/>
            <FilterSwitch
                label="Vegetarian"
                value={isVegetarian}
                onChange={isVegetarianHandler}/>
        </View>
    );
};

FiltersScreen.navigationOptions = ({navigation: {toggleDrawer, getParam}}) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} title="filter-screen-left">
                <Item
                    title="Menu"
                    label="Menu"
                    iconName="ios-menu"
                    onPress={() => toggleDrawer()}/>
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} title="filter-screen-right">
                <Item
                    title="Save"
                    label="Save"
                    iconName="ios-save"
                    onPress={getParam('saveFilters')}/>
            </HeaderButtons>
        ),
    }
};

export default connect()(FiltersScreen);
