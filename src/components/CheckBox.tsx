import { ColorKeys } from "@/assets/colors"
import BouncyCheckbox from "react-native-bouncy-checkbox"

export default function CheckBox({color}: {color?: ColorKeys}) {
    return (
        <BouncyCheckbox
            fillColor={color}
            innerIconStyle={{ borderRadius: 5 }}
            iconStyle={{ borderRadius: 5 }}
        />
    )
}