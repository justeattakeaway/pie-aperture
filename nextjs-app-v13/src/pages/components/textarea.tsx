import NavigationLayout from "@/layout/navigation";
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';

export default function Textarea() {

    return (
        <NavigationLayout title="Textarea">
            <PieTextarea value="foo"/>

            <PieDivider />

            <PieTextarea
                value="foo"
                resize="manual"
            />
        </NavigationLayout>
    );
}
