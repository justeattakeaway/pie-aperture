import TypographyDemo from './typography-demo';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Typography Demo',
}

export default function TypographyPage() {
    return <TypographyDemo/>;
}
