import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import EmptyHeader from "../components/headers/EmptyHeader";
import JournalShortItem from "../components/journal/JournalShortItem";

const JournalShortScreen = () => {
    return (
        <View>
            <EmptyHeader/>
            <JournalShortItem/>
        </View>

    )
};

export default JournalShortScreen;
