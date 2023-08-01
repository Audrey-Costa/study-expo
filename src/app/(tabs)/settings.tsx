import { Text, View } from "react-native";
import { styles } from "./style";

export default function Settings() {
    return (
        <View style={styles.appContainer}>
            <Text style={styles.text}>
                Settings
            </Text>
        </View>
    )
}