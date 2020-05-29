import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View,StyleSheet} from "react-native";


const JournalCover = ({number, name, image, navigation}) => {
    const [select, setSelect] = useState(false);
    return(
        <View>
            <TouchableOpacity onLongPress={() => setSelect(!select)} onPress={() => navigation.navigate('JournalFullScreen')}>
                <View style={!select ? styles.cover : [styles.cover, {opacity: 0.3}]}>
                    <View style={styles.coverNumber}>
                        <Text style={styles.coverNumberText}>
                            {number}
                        </Text>
                    </View>
                    <Image style={styles.image} source={image}/>
                    <View>
                        <Text style={styles.journalName}>{name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
};

const styles = StyleSheet.create({
    cover: {
        alignItems: 'center',
        width: 104,
        height: 165,
        backgroundColor: `#F7F7F7`,
        marginTop: 24,
        marginRight: 20,

    },

    coverNumber: {
        width: 14,
        height: 14,
        borderRadius: 2,
        backgroundColor: '#C4C4C4',
        opacity: 0.6,
        marginTop: 4,
    },
    coverNumberText: {
        fontSize: 10,
        lineHeight: 12,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    image: {
        marginTop: 4,
        width: 82,
        height: 105,
    },
    journalName: {
        marginTop: 15,
        fontSize: 10,
        lineHeight: 12,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'black'
    }
});


export const CoverSeparator =()=> <View style={{width: 24}}/>;

export default JournalCover;
