import Link from './link';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Link',
}

export default function LinkComponent() {
    return <Link/>;
}
