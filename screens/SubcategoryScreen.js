import Header from "../components/headers/Header";
import {View, Text, StyleSheet} from "react-native";
import React from "react";
import CategoryList from "../components/category/CategoryList";


const SubcategoryScreen = ({navigation,route}) => {
    const data = route.params.data.subcategories;
    return (
        <View>
            <Header
                navigation={navigation}
                back
                centerContent={<Text style={styles.text}>{route.params.data.title}</Text>}
            />
            <CategoryList goto='ChooseJournalScreen' data={data} navigation={navigation} />
        </View>
    )
};


const styles=StyleSheet.create({
    text: {
        fontWeight: "300",
        fontSize: 15,
        lineHeight: 18,
        fontVariant: ['small-caps'],
        color: '#302F2F',
        textTransform: 'uppercase'
    }
});

export default SubcategoryScreen;
