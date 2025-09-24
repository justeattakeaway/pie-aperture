import Tag from './tag';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tag',
}

export default function TagComponent() {
    return <Tag/>;
}
