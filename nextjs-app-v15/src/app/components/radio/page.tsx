import Radio from './radio';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Radio',
}

export default function RadioComponent() {
    return <Radio/>;
}
