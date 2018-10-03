import React, {Component} from "react";
import {View, Text, Button} from "react-native";

export default class Home extends Component {
    render() {
        return (
            <View style = {{flex: 1, backgroundColor: "pink"}}>
                <Text>This is Home</Text>
                <Button
                    title = "Go authentication"
                    onPress = {() => this.props.navigation.navigate("Authentication")}>    
                </Button>
            </View>
        );
    }
}