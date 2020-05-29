import JournalViewPage from "../pages/JournalViewPage";
import {View} from "react-native";
import React from "react";
import EmptyHeader from "../components/headers/EmptyHeader";

const JournalViewScreen = ({navigation}) => {
    return(
        <View>
            <EmptyHeader/>
            <JournalViewPage navigation={navigation}/>
        </View>

    )
};

export default JournalViewScreen;
