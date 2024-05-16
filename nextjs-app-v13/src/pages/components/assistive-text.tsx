import NavigationLayout from "@/layout/navigation";
import { PieAssistiveText } from "@justeattakeaway/pie-assistive-text/dist/react";

export default function AssistiveText() {
    return (
        <NavigationLayout title="Assistive Text">
        <PieAssistiveText>Assistive Text</PieAssistiveText>
        <PieAssistiveText variant="success">Assistive Text</PieAssistiveText>
        <PieAssistiveText variant="error">Assistive Text</PieAssistiveText>
        </NavigationLayout>
    );
}
