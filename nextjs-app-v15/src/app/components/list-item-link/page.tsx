import ListItemLink from './list-item-link';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'List Item Link',
}

export default function ListItemLinkPage() {
    return <ListItemLink />;
}
