import { Text, View } from "react-native";
import { styles } from "./style";
import { Link } from "expo-router";
import { Button } from "@/components/Button/Button";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <Text style={styles.text}>
                Home
            </Text>
            <Link href="/products/1" asChild>
                <Button title="Settings"/>
            </Link>
        </View>
    )
}