import TableNoHeader from './table-noheader';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DataTable - No Header',
}

export default function TableNoHeaderPage() {
    return <TableNoHeader />;
}
