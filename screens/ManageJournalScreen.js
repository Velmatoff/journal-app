import React, {useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import BlueButton from "../components/buttons/BlueBotton";
import {Ionicons} from "@expo/vector-icons";
import Header from "../components/headers/Header";
import JournalViewPage from "../pages/JournalViewPage";

const ManageJournalScreen = ({navigation}) => {

    return (
        <View>

            <Header
                navigation={navigation}
                remove
                back
                centerContent={
                    <BlueButton
                        h={28}
                        w={180}
                        onPress={()=> navigation.navigate('CategoryScreen')}
                        icon={<Ionicons name="ios-add" size={22} color="white"/>}
                        text={<Text style={styles.textButton}>ADD NEW JOURNALS</Text>}
                    />

                }/>
            <JournalViewPage/>
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
    }
});
/*
*  <View>
            <View style={styles.header}>
                <View style={{flexBasis: "20%", paddingLeft: 26}}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="black"/>
                </View>
                <View style={{flexBasis: "60%", alignItems: 'center'}}>
                    <BlueButton
                        h={28}
                        w={180}
                        icon={
                            <Ionicons name="ios-add" size={22} color="white"/>
                        }
                        text={
                            <Text style={styles.textButton}>ADD NEW JOURNALS</Text>
                        }
                    />
                </View>
                <View style={{flexBasis: "20%", alignItems: 'flex-end',  paddingRight: 25}}>
                        <Text>Remove</Text>
                </View>
            </View>
        </View>*/
export default ManageJournalScreen;
