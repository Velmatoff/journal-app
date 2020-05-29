import React, {useState} from "react";
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import {FontAwesome} from '@expo/vector-icons';
import {useDispatch} from "react-redux";
import {unmark} from "../../redux/reducers/auth-reduser";


const Item = ({title, subTitle, id}) => {

    const pickHandler = () => {
        dispatch(unmark(id))
    };

    const dispatch = useDispatch();

    return (
        <View style={styles.item}>
            <View style={styles.textBlock}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                    <TouchableHighlight>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.icon}>
                <FontAwesome.Button
                    onPress={pickHandler}
                    name="bookmark"
                    size={24} color="black"
                    iconStyle={{marginRight: 0}}
                    backgroundColor='white'
                />

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 110,
        borderBottomWidth: 0.5,
        borderBottomColor: '#D7CFCF',

    },
    title: {
        paddingBottom: "4%",
        fontSize: 15,
        lineHeight: 18,
        color: '#A19A9A'

    },
    textBlock: {

    },
    subTitle: {
        maxHeight:'100%',
        maxWidth: '90%',
        fontSize: 20,
        lineHeight: 23,
        color: '#9B9393',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    icon: {
        position: 'absolute',
        left: '100%',


    },
});

export default Item;
