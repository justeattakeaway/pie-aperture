import CssOnlyButton from './css-only-button';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CSS Only Button',
}

export default function CssOnlyButtonPage() {
    return <CssOnlyButton/>;
}
