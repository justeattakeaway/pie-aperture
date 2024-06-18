import  TextInput  from './text-input';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Text Input',
}

export default function TextInputComponent() {
    return <TextInput/>;
}
