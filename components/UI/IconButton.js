import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, size, color, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        margin: 8,
    },
    pressed: {
        opacity: 0.75
    }
});