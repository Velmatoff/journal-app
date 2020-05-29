import React, {useState} from "react";
import EmptyHeader from "../components/headers/EmptyHeader";
import {View, StyleSheet, Text, Image} from "react-native";
import {ScrollView} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

const JournalFullScreen = ({feedName,image,abstract,fullText, DOI}) => {
    const [pick, setPick] = useState(false);

    const pickHandler = () => {
        setPick(!pick);
    };
    return (
        <>
        <ScrollView style={styles.container}>
            <EmptyHeader/>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',paddingRight: 20, paddingLeft:20}}>
                <Text style={styles.feedName}>
                    Editorial Overview: Autophagy in Neurodegenerative Diseases
                </Text>
                <View>
                    <FontAwesome.Button
                        onPress={pickHandler}
                        name={pick ? 'bookmark' : 'bookmark-o'}
                        size={24} color="#444444"
                        iconStyle={{marginRight: 0}}
                        backgroundColor='white'
                    />
                </View>
            </View>
            <Image style={styles.image} source={require('../assets/image.png')}/>
            <Text style={styles.abstract}>
                Formation of self-associating loop domains is a fundamental organizational feature of metazoan genomes.
                Here, we employed quantitative live-imaging methods to visualize impacts of higher-order chromosome
                topology on enhancer-promoter communication in developing Drosophila embryos. Evidence is provided that
                distal enhancers effectively produce transcriptional bursting from target promoters over distances when
                they are flanked with boundary elements. Importantly, neither inversion nor deletion of a boundary
                element abrogates this “enhancer-assisting activity,” suggesting that they can facilitate intra-domain
                enhancer-promoter interaction and production of transcriptional bursting independently of topologically
                associating domain (TAD) formation. In contrast, domain-skipping activity of distal enhancers was lost
                after disruption of topological domains. This observation raises a possibility that intra-domain and
                inter-domain enhancer-promoter interactions are differentially regulated by chromosome topology
            </Text>
        </ScrollView>
            <View style={styles.wrap}>
                <View style={{flexBasis: '50%'}}>
                    <Text style={styles.button}>copy doi</Text>
                </View>
                <View style={{borderRightWidth: 0.3, borderRightColor: '#D7CFCF', height: 43}}/>
                <View style={{flexBasis: '50%'}}>
                    <Text style={styles.button}>full text</Text>
                </View>
            </View>
            </>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: 'white',
        marginTop: 21,
        paddingLeft: 16,
        paddingRight: 16,
    },
    wrap: {
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.3,
        borderTopColor: '#D7CFCF',
        height: 55,

    },
    feedName: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        color: '#3D3737',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D7CFCF',
        paddingBottom: 10,
    },
    image: {
        marginTop: 14,
        width: 375,
        height: 375,
        marginBottom: 14
    },
    abstract: {
        borderTopWidth: 0.5,
        borderTopColor: '#D7CFCF',
        fontSize: 16,
        lineHeight: 19,
        paddingTop: 14,
        paddingBottom: 10

    },
    button: {
        alignSelf: 'center',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '300',
        textTransform: 'uppercase',
        color: '#9B9393',
    },
});


export default JournalFullScreen;
