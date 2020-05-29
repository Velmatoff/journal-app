import {AntDesign} from "@expo/vector-icons";
import React from "react";
import {FontAwesome} from '@expo/vector-icons';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native";


const LoginButton = ({nameText, onPress}) => {
    let icon;
    switch (nameText) {
        case 'google':
            icon = <AntDesign name="googleplus" size={26} color="white"/>;
            break;
        case 'facebook':
            icon = <FontAwesome name="facebook-f" size={26} color="white"/>;
            break;
        case 'twitter':
            icon = <AntDesign name="twitter" size={26} color="white"/>;
            break;
    }
    return (
        <View style={styles.loginButtonWrap}>
            <View style={styles.loginButtonIcon}>
                {icon}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login with {nameText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create(
    {
        loginButtonWrap: {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 8
        },
        loginButtonIcon: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            backgroundColor: 'black',
            color: 'white',
        },
        loginButton: {
            width: 230,
            height: 50,
            backgroundColor: '#6A6A6A',

        },
        loginButtonText: {
            textTransform: 'uppercase',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 14,
            lineHeight: 16,
            textAlign: 'center',
            textAlignVertical: 'center',
            marginTop: 18

        }
    }
);

export default LoginButton;
