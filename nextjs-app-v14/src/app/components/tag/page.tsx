import  Tag  from './tag';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tag',
}

export default function TagComponent() {
    return <Tag/>;
}
