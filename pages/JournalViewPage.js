import {View, StyleSheet, Text, Image, TouchableOpacity, FlatList} from "react-native";
import React from "react";
import Category, {CategorySeparator} from "../components/category/Category";
import JournalCover, {CoverSeparator} from "../components/journal/JournalCover";

const DATA =[
    {
        _id: 123,
        journalName: 'Molecullar cell',
        journalNumber: '56',
        image: require('../assets/journal-view.png')
    },
    {
        _id: 124,
        journalName: 'Plos Bioinformatics',
        journalNumber: '57',
        image: require('../assets/journal-view.png')
    },
    {
        _id: 125,
        journalName: 'Molecullar cell',
        journalNumber: '58',
        image: require('../assets/journal-view.png')
    },
    {
        _id: 126,
        journalName: 'Molecullar cell',
        journalNumber: '58',
        image: require('../assets/journal-view.png')
    },
    {
        _id: 127,
        journalName: 'Molecullar cell',
        journalNumber: '58',
        image: require('../assets/journal-view.png')
    },
    {
        _id: 128,
        journalName: 'Molecullar cell',
        journalNumber: '58',
        image: require('../assets/journal-view.png')
    },

];

const JournalViewPage = ({navigation}) => {
    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'white',}}>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    numColumns={3}
                    renderItem={({ item }) => <JournalCover
                        navigation={navigation}
                        number={item.journalNumber}
                        name={item.journalName}
                        image={item.image}
                    />}
                    keyExtractor={item => item._id}
                    ItemSeparatorComponent={props => <CoverSeparator/>}
                    contentContainerStyle={{ paddingBottom: 60}}
                    showsVerticalScrollIndicator = {false}
                />
            </View>
        </View>


    )
};

const styles = StyleSheet.create({
        container: {
            width: "90%",
            height: '100%',
            backgroundColor:'white',
        },
    }
);

export default JournalViewPage
