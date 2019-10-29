import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {loadAsync} from 'expo-font';
import {AppLoading} from 'expo';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../Components/HeaderButton';

const fetchFonts = () => loadAsync({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
});

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const FiltersScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
    }

    return (
        <View style={styles.screen}>
            <Text>The filters screen</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = ({navigation: {toggleDrawer}}) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} title="categories-screen">
                <Item
                    title="Menu"
                    label="Menu"
                    iconName="ios-menu"
                    onPress={() => toggleDrawer()}/>
            </HeaderButtons>
        )
    }
};

export default FiltersScreen;
