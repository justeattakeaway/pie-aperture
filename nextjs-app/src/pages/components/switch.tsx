import NavigationLayout from "@/layout/navigation";
import { PieSwitch } from "@justeattakeaway/pie-switch/dist/react";
import { useState } from "react";

export default function Switch() {
    const [isSwitchChecked, setIsSwitchCheck] = useState(false)

    const handleSwitchChange = () => {
      setIsSwitchCheck(current => !current);
      console.log(isSwitchChecked);
    };

    return (
        <NavigationLayout title="Switch">
        <PieSwitch
            label={`checked: ${isSwitchChecked}`}
            checked={isSwitchChecked}
            onChange={handleSwitchChange}>
        </PieSwitch>
        </NavigationLayout>
    );
}
