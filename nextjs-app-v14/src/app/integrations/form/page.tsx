import  Form  from './form';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Form',
}

export default function FormPage() {
    return <Form/>;
}
