import CustomTag from './custom-tag';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Styled Tag',
}

export default function CustomTagComponent() {
    return <CustomTag/>;
}
