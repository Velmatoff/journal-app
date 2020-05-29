import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Header from "../components/headers/Header";
import JournalViewPage from "../pages/JournalViewPage";

const ChooseJournalScreen = ({navigation, route}) => {

    return(
        <View>
            <Header
                back
                remove
                navigation={navigation}
                centerContent={<Text style={styles.text}>{route.params.data.title}</Text>}
                />
                <JournalViewPage/>
        </View>

    )
};

const styles=StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: "200",
        fontSize: 15,
        lineHeight: 18,
        fontVariant: ['small-caps'],
        color: '#302F2F',
        textTransform: 'uppercase'
    }
});

export default ChooseJournalScreen;
