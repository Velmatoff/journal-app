import React from "react";
import {StyleSheet, Text, View, TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import {Ionicons} from "@expo/vector-icons";


const Header = ({back, remove, centerContent, navigation}) => {
    return (
        <View>
            <View style={styles.header}>
                <View style={{flexBasis: "20%", paddingLeft: 26}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        {back && <Ionicons name="ios-arrow-round-back" size={32} color="black"/>}
                    </TouchableOpacity>
                </View>
                <View style={{flexBasis: "60%", alignItems: 'center'}}>
                   {centerContent}
                </View>
                <View style={{flexBasis: "20%", alignItems: 'flex-end',  paddingRight: 25}}>
                    <TouchableOpacity>
                        {remove && <Text style={styles.textRemove}>Remove</Text>}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        width: '100%',
        height: 82,
        paddingTop: 32,

    },
    textButton: {
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.75,
        textTransform: 'uppercase',
        fontWeight: '500',
        color: 'white'
    },
    textRemove: {
        fontSize: 14,
        lineHeight: 16,
        textTransform: 'capitalize',
        color: '#F80808'
    }
});

export default Header;
