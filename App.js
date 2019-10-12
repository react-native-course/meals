import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useScreens} from 'react-native-screens';
import {loadAsync} from 'expo-font';
import {AppLoading} from 'expo';
//navigator file
import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
    return loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};


useScreens();

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={(err) => console.log(err)}
        />;
    }


    return (
        <MealsNavigator/>
    );
}

const styles = StyleSheet.create({});
