import NavigationLayout from "@/layout/navigation";
import { PieAssistiveText } from '@justeattakeaway/pie-webc/react/assistive-text.js';

export default function AssistiveText() {
    return (
        <NavigationLayout title="Assistive Text">
        <PieAssistiveText>Assistive Text</PieAssistiveText>
        <PieAssistiveText variant="success">Assistive Text</PieAssistiveText>
        <PieAssistiveText variant="error">Assistive Text</PieAssistiveText>
        </NavigationLayout>
    );
}
