import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";
import Header from "../components/headers/Header";
import CategoryList from "../components/category/CategoryList";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../redux/reducers/journal-reduser";




const CategoryScreen = ({navigation}) => {

    const categories = useSelector(state => state.journal);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getCategories())
    }, []);

    return (
        <View>
            <Header
                navigation={navigation}
                back
                centerContent={<Text style={styles.headerText}>Add journals</Text>}
            />
            <CategoryList data={categories} navigation={navigation} goto='SubcategoryScreen'/>
        </View>
    )
};

const styles = StyleSheet.create({
        header: {
            height: 90,
            backgroundColor: '#F7F7F7',
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderBottomColor: '#626262',
            borderBottomWidth: 0.3,

        },
        headerText: {
            fontSize: 15,
            lineHeight: 18,
            fontWeight: 'bold',
            color: '#302F2F',
            textTransform: 'uppercase',
        },
        back: {
            position: 'absolute',
            top: 40,
            left: 30,
        },
    }
);

export default CategoryScreen;
