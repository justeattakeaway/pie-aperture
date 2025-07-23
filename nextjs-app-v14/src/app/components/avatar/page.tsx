import Avatar from './avatar';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Avatar',
}

export default function AvatarComponent() {
    return <Avatar />;
}
