import React, {useState,useEffect} from "react"
import {View, StyleSheet, Text} from "react-native";
import {TouchableOpacity} from "react-native";
import {Switch} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/reducers/auth-reduser";
import {setViewMode} from "../redux/reducers/interfaceApp-reduser";


const SettingsPage = ({navigation}) => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.userBlock}>
                <View style={{paddingLeft: 30, paddingBottom: 25}}>
                    <View style={styles.avatar}></View>
                    <View style={styles.name}>
                        <Text style={styles.nameText}>{auth.fullName}</Text>
                    </View>
                </View>
                <View style={styles.userInfo}>
                    <View>
                        <Text style={styles.userInfoText}>you read</Text>
                        <Text/>
                        <Text style={styles.userInfoText}>bookmarks</Text>
                    </View>
                    <View style={{marginLeft: 20}}>
                        <Text style={styles.userInfoTextBold}>{auth.journals.length}</Text>
                        <Text/>
                        <Text style={styles.userInfoTextBold}>{auth.bookmarks.length}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.settingBlock}>
                <View style={styles.manageButtons}>
                    <View>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ManageJournalScreen');
                            navigation.closeDrawer();
                        }}>
                            <Text style={styles.manageJournalText}>Manage journal</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.darkModeText}>dark mode</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.subscription}>
                    <TouchableOpacity>
                        <Text style={styles.subscriptionButtonText}>
                            Buy full subscription
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <View style={styles.viewButton}>
                        <View>
                            <Text style={styles.darkModeText}>Random journals/papers</Text>
                        </View>
                        <View style={{paddingRight: 50}}>
                            <Switch
                                trackColor={{false: "rgba(0,0,0,0.2)", true: "rgba(0,0,0,0.2)"}}
                                thumbColor={isEnabled ? "black" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <View style={styles.viewScreens}>
                        <TouchableOpacity onPress={() => dispatch(setViewMode('cover'))}>
                            <View style={{alignItems: 'center'}}>
                                <View style={styles.rectangleView}></View>
                                <Text style={styles.darkModeText}>journal view</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(setViewMode('short'))}>
                            <View style={{alignItems: 'center'}}>
                                <View style={styles.rectangleView}></View>
                                <Text style={styles.darkModeText}>short feed view</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(setViewMode('full'))}>
                            <View style={{alignItems: 'center'}}>
                                <View style={styles.rectangleView}></View>
                                <Text style={styles.darkModeText}>full feed view</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
                <TouchableOpacity onPress={() => {
                    dispatch(logout())}}>
                    <Text style={styles.subscriptionButtonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#F7F7F7'
    },
    userBlock: {
        height: '25%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',


    },
    avatar: {
        height: 80,
        width: 80,
        backgroundColor: '#C4C4C4',
        borderRadius: 50,
        marginBottom: 16,
    },
    nameText: {
        fontSize: 16,
        lineHeight: 19,
    },
    userInfo: {
        display: 'flex',
        borderLeftWidth: 1,
        borderLeftColor: '#C4C4C4',
        marginBottom: 70,
        marginRight: 30,
        paddingLeft: 12.5,
        paddingBottom: 5,
        paddingTop: 5,
        flexDirection: 'row',


    },
    userInfoText: {
        fontSize: 10,
        lineHeight: 12,
        textTransform: 'lowercase',

    },
    userInfoTextBold: {
        fontWeight: 'bold',
        fontSize: 10,
        lineHeight: 12,
        textTransform: 'lowercase'
    },
    settingBlock: {},
    manageButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,

        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#CAC7C7',

    },
    manageJournalText: {
        color: '#6C6969',
        fontSize: 15,
        lineHeight: 18,
        textTransform: 'uppercase',
        fontVariant: ['small-caps']
    },
    darkModeText: {
        color: '#6C6969',
        fontSize: 14,
        lineHeight: 16,
        textTransform: 'lowercase'
    },
    subscription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,

        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#CAC7C7',

    },
    subscriptionButtonText: {
        fontSize: 15,
        lineHeight: 18,
        color: '#302F2F',
        textTransform: 'uppercase',
        fontWeight: '600',
    },
    view: {
        marginTop: 40,
        marginLeft: 16,
        marginRight: 16,
        paddingBottom: 40,
    },
    viewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 36,
        marginLeft: 14
    },
    viewScreens: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rectangleView: {
        width: 90,
        height: 120,
        backgroundColor: '#C4C4C4',
        marginBottom: 12,
    }

});


export default SettingsPage;
