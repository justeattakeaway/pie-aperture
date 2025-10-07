import Select from './select';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Select',
}

export default function SelectComponent() {
    return <Select/>;
}
