import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RootStackParamList } from "../types/types";

export default function NotFound({
    navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
    return (
        <View>
            {styles.container}
            <Text style={styles.title}>This screen does not exist.</Text>
            <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
                <Text style={styles.linkText}> Go to main screen!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontsize: 12,
        color: '#502196',
    },
});