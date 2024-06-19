import NavigationLayout from "@/layout/navigation";
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone';
import { IconPhoneLarge } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhoneLarge';

export default function Icon() {
    return (
        <NavigationLayout title="Icon">
            <IconPhone />
            <IconPhoneLarge />
        </NavigationLayout>
    );
}
