import React, {useState} from 'react';
//redux
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
//react native
import {StyleSheet} from 'react-native';
//expo
import {AppLoading} from 'expo';
//expo font
import {loadAsync} from 'expo-font';
//components
import {useScreens} from 'react-native-screens';
//navigator file
import MealsNavigator from "./navigation/MealsNavigator";

const store = configureStore();

const fetchFonts = () => {
    return loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};


useScreens();

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            onError={(err) => console.log(err)}
        />;
    }


    return (
        <Provider store={store}>
            <MealsNavigator/>
        </Provider>
    );
}

const styles = StyleSheet.create({});
