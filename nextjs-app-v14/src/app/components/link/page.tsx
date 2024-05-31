import  Link  from './link';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Link',
}

export default function LinkComponent() {
    return <Link/>;
}
