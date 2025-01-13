import Thumbnail from './thumbnail';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thumbnail',
}

export default function ThumbnailComponent() {
    return <Thumbnail />;
}
