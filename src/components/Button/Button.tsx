import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./buttonStyle";
import { forwardRef } from "react";

type Props = TouchableOpacityProps & {
    title: string;
}

export const Button = forwardRef<TouchableOpacity, Props>(({ title, ...rest }, ref) => {
    return (
        <TouchableOpacity ref={ref} style={styles.buttonContainer} {...rest}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>        
    );
});