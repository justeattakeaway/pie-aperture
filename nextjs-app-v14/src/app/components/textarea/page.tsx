import Textarea from './textarea';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Textarea',
}

export default function TextareaComponent() {
    return <Textarea/>;
}
