import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * 
 * @returns 
 */
export default function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='white' />
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
    }
})