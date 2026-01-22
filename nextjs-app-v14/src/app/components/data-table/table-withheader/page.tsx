import TableWithHeader from './table-withheader';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DataTable - With Header',
}

export default function TableWithHeaderPage() {
    return <TableWithHeader />;
}
