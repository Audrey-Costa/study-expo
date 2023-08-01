import { View, Text } from "react-native";
import { styles } from "./style";
import { useGlobalSearchParams } from "expo-router";

export default function Porduct() {
    const { id } = useGlobalSearchParams();
    return (
        <View style={styles.appContainer}>
            <Text style={styles.text}>
                Produto: {id}
            </Text>
        </View>
    )
}