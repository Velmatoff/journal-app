import React from 'react'
import {View, StyleSheet, TouchableOpacity,TouchableWithoutFeedback } from "react-native";


const BlueButton = (props) => {
    const {children, h, w} = props;
    return (
        <TouchableWithoutFeedback  onPress={props.onPress}>
            <View>
                    <View style={[styles.button, {width: w, height: h}]}>
                        <View style={{flexBasis: "20%", paddingLeft: "8%"}}>{props.icon}</View>
                        <View style={{paddingRight: '10%',flexBasis: "80%", alignItems: 'center'}}>{props.text}</View>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#56CCF2',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
});
export default BlueButton;
