import Pagination from './pagination';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pagination',
}

export default function PaginationComponent() {
    return <Pagination/>;
}
