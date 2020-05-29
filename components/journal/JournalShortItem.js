import React, {useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

const JournalShortItem = () => {
    const [pick, setPick] = useState(false);

    const pickHandler = () => {
        setPick(!pick);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.journalName}>Nature Cell Biology</Text>
            <Text style={styles.feedName}>Editorial Overview: Autophagy in Neurodegenerative Diseases</Text>
            <View style={styles.wrap}>
                <View>
                    <Text style={styles.authors}>Viktor I. Korolchuk, ... Manolis Fanto</Text>
                    <Text style={styles.pubDate}>20.01.2020</Text>
                </View>
                <FontAwesome.Button
                    onPress={pickHandler}
                    name={pick ? 'bookmark' : 'bookmark-o'}
                    size={24} color="#444444"
                    iconStyle={{marginRight: 0}}
                    backgroundColor='white'
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 40,
    },
    wrap: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
        paddingBottom: 23,
        borderBottomWidth: .5,
        borderBottomColor: '#D7CFCF'

    },
    journalName: {
        marginBottom: 13,
        marginTop: 11,
        fontSize: 15,
        lineHeight: 18,
        color: '#3D3737',
    },
    feedName: {
        marginBottom: 20,
        fontSize: 20,
        lineHeight: 23,
        fontWeight: 'bold',
        color: '#3D3737',
    },
    authors: {
        marginBottom: 10,
        fontSize: 14,
        lineHeight: 16,
        color: 'black'
    },
    pubDate: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '300',
        color: '#7C7777'

    }

});

export default JournalShortItem;
