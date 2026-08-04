import ListItemButton from './list-item-button';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'List Item Button',
}

export default function ListItemButtonPage() {
    return <ListItemButton />;
}
