import TypographyMixins from './typography-mixins';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Typography Demo (Mixins)',
}

export default function TypographyPage() {
    return <TypographyMixins/>;
}
