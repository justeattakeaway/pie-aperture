import Form from './form';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Form',
}

export default function FormPage() {
    return <Form/>;
}
