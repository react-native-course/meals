import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {useScreens} from 'react-native-screens';
//navigator file
import MealsNavigator from "./navigation/MealsNavigator";

useScreens();

export default function App() {
  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
});
