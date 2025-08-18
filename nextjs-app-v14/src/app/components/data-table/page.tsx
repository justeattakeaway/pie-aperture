import DataTable from './data-table';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DataTable',
}

export default function DataTableComponent() {
    return <DataTable />;
}
