import  Textarea  from './textarea';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Textarea',
}

export default function TextareaComponent() {
    return <Textarea/>;
}
