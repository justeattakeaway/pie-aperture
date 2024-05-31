import  Card  from './card';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Card',
}

export default function CardComponent() {
    return <Card/>;
}
