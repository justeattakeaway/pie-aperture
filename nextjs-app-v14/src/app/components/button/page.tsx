import  Button  from './button';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Button',
}

export default function ButtonComponent() {
    return <Button/>;
}
