/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";
import MainScreen from "./app/mainscreen";

export default class ReactNativePlayground extends Component {
    render() {
        return (
            <MainScreen name='from iOS'/>
        );
    }
}


AppRegistry.registerComponent('ReactNativePlayground', () => ReactNativePlayground);