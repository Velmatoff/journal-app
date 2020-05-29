import React from "react";
import {View, StyleSheet, Text, TouchableOpacity1 } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import BlueButton from "../components/buttons/BlueBotton";

const MainEmpty = ({navigation}) => {
    return (
        <View style={styles.container}>

            <BlueButton
                h={40}
                w={258}
                onPress={() => {
                    navigation.navigate('CategoryScreen')
                }}
                icon={<Ionicons name="md-add" size={20} color="white"/>}
                text={<Text style={styles.buttonText}>Add new journals</Text>}
            />

            <View>
                <Ionicons name="ios-arrow-round-back" size={100} color="black"/>
            </View>
            <View style={{
                paddingBottom: 30,
            }}>
                <Text style={styles.textNavigation}>Right swipe - Bookmarks</Text>
            </View>
            <View style={{
                width: 310,
                borderBottomColor: "#000000",
                borderBottomWidth: 0.3,
            }}></View>
            <View>
                <Ionicons name="ios-arrow-round-forward" size={100} color="black"/>
            </View>
            <View style={{marginBottom: 50}}>
                <Text style={styles.textNavigation}>Left swipe - Settings</Text>
            </View>

        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 257,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#56CCF2',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,

        letterSpacing: 0.75,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
    textNavigation: {
        fontSize: 24,
        lineHeight: 28,
        color: '#262F56',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
});


export default MainEmpty

/*box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);*/
