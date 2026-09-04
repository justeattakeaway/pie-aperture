import Tooltip from './tooltip';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tooltip',
}

export default function TooltipComponent() {
    return <Tooltip />;
}
