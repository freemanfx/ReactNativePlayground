import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Navigator} from "react-native";

export default class MainScreen extends Component {

    renderScene(route, navigator) {
        return (
            <Text style={styles.text}>{route.title}</Text>
        );
    }

    render() {
        const routes = [
            {title: 'First', index: 0},
            {title: 'Second', index: 1},
            {title: 'Third', index: 2},
        ];

        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={(route,navigator) => this.renderScene(route,navigator)}
                navigationBar={
                           <Navigator.NavigationBar
                            routeMapper={{
                                    LeftButton: (route,navigator, index, navState) => {
                                        if(index == 0){
                                            return null;
                                        } else {
                                            return (<Text style={styles.navButton} onPress={() => navigator.pop()}>Back</Text>);
                                        }
                                    },
                                    RightButton: (route, navigator, index, navState) => {
                                        if(index == routes.length -1) {
                                            return null;
                                        }
                                        return (<Text onPress={() => navigator.push(routes[index])}
                                                    style={styles.navButton}>
                                                    Next
                                                </Text>);
                                    },
                                    Title: (route, navigator, index, navState) =>{
                                        return (<Text style={styles.navTitle}>{route.title}</Text>);
                                    },
                                 }}
                            />
                       }
            >

            </Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        marginTop: 100
    },
    navButton: {
        padding: 10,
        fontWeight: 'bold'
    },
    navTitle: {
        padding: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
