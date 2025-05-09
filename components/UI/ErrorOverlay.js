import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function ErrorOverlay({ message }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occured!</Text>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        textAlign: 'center',
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})