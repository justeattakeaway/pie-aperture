'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieAssistiveText } from '@justeattakeaway/pie-webc/react/assistive-text.js';

export default function AssistiveText() {
    return (
        <NavigationLayout title="Assistive Text">
        <PieAssistiveText message="Assistive Text"></PieAssistiveText>
        <PieAssistiveText variant="success" message="Assistive Text"></PieAssistiveText>
        <PieAssistiveText variant="error" message="Assistive Text"></PieAssistiveText>
        </NavigationLayout>
    );
}
