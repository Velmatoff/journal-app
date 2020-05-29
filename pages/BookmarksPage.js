import React from "react";
import {View, StyleSheet, Text, FlatList} from "react-native";
import BlueButton from "../components/buttons/BlueBotton";
import {EvilIcons} from '@expo/vector-icons';
import Item from "../components/bookmarks/Item";
import Header from "../components/headers/Header";
import {useDispatch, useSelector} from "react-redux";


/*
const DATA = [
    {
        _id: '123',
        title: 'Название категории',
        subTitle: 'Тут название какой-нибудь статьи и статьи ',
        initPick: true
    },
    {
        _id: '124',
        title: 'Название категории',
        subTitle: 'Тут название какой-нибудь статьи и статьи ',
        initPick: false
    },
];
*/


const BookmarksPage = () => {

    const bookmarks = useSelector(state => state.auth.bookmarks);

    return (
        <View>
            <Header
                centerContent={
                    <BlueButton
                        h={28}
                        w={150}
                        icon={<EvilIcons name="trash" size={24} color="white"/>}
                        text={<Text style={styles.buttonText}>Delete All</Text>}
                    />
                }
            />
            <FlatList
                data={bookmarks}
                renderItem={({item}) => <Item id={item.id} title={item.title} subTitle={item.subTitle}/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}
            />
        </View>
    )
};


const styles = StyleSheet.create({

    header: {
        height: 90,
        backgroundColor: '#F7F7F7',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        marginBottom: 12,
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 11,
        lineHeight: 16,
        textTransform: 'uppercase',
        color: 'white',
        letterSpacing: 0.75,
    },
});


export default BookmarksPage;
