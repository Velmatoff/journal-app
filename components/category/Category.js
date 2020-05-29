import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";

const Category = ({navigation, data,goto}) => {
    return (
        <View>
            <TouchableOpacity onPress={navigation.navigate.bind(null,`${goto}`, {data})}>
                <View style={styles.category}>
                    <View>
                        <Text style={styles.categoryName}>{data.title}</Text>
                    </View>
                    <View style={styles.next}>
                        <Ionicons
                            name="ios-arrow-round-forward"
                            size={32}
                            color="black"/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export const CategorySeparator = () => {
    return (
        <View style={{
            height: 1,
            borderBottomColor: '#626262',
            borderBottomWidth: 0.7,
            width: '100%',
        }}
        />
    )
};


const styles = StyleSheet.create({
    categoryName: {
        fontWeight: '300',
        fontSize: 20,
        lineHeight: 23,
        fontVariant: ['small-caps'],
        textTransform: 'uppercase',

    },
    category: {
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        /* borderBottomColor: '#626262',
         borderBottomWidth: 0.5,*/
    },
    next: {
        position: 'absolute',
        right: 25,
    }
});

export default Category;

