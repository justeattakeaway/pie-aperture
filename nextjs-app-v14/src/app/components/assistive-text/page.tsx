import  AssistiveText  from './assistive-text';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Assistive Text',
}

export default function AssistiveTextComponent() {
    return <AssistiveText/>;
}
