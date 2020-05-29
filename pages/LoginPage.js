import {Image, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import LoginButton from "../components/buttons/LoginBotton";
import React from "react";
import {useDispatch} from "react-redux";
import {getUserData, logIn} from "../redux/reducers/auth-reduser";

const LoginPage = () => {

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(255, 255, 255, 0)', '#DFDFDF']}
                locations={[0.2, 0.8]}
                style={styles.gradient}
            />

            <View style={styles.titleWrap}>
                <Text style={styles.title}>Find out</Text>
                <Text style={styles.subTitle}>what's happening in the world right now!</Text>
            </View>
            <View>
                <LoginButton onPress={()=> dispatch(getUserData())} nameText='google'/>
                <LoginButton nameText='facebook'/>
                <LoginButton nameText='twitter'/>
            </View>
            <View style={{marginTop: 40}}>
                <Image
                    style={{width: 285, height: 55}}
                    source={require('../assets/foot2.png')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },

    titleWrap: {
        flex: 0.4,
        width: 280,
    },

    title : {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 48,
        lineHeight: 56,
    },
    subTitle: {
        color: '#BBBBBB',
        fontSize: 28,
    },

});

export default LoginPage;
