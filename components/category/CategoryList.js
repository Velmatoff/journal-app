import React from 'react'
import {FlatList, View} from "react-native";
import Category, {CategorySeparator} from "./Category";

const CategoryList = ({data, navigation, goto}) => {

    return(
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Category
                    goto={goto}
                    navigation={navigation}
                    data={item}
                />}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator = {false}
                ItemSeparatorComponent={() => <CategorySeparator/>}
                getItemLayout={(data, index) => (
                    {length: 67, offset: 67 * index, index})}
            />
        </View>
    )
};

export default CategoryList;
