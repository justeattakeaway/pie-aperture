import List from './list';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'List',
}

export default function ListComponent() {
    return <List/>;
}
