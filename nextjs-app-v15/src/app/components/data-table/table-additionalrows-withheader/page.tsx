import TableAdditionalRowsWithHeader from './table-additionalrows-withheader';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DataTable - Additional Rows with Header',
}

export default function TableAdditionalRowsWithHeaderPage() {
    return <TableAdditionalRowsWithHeader />;
}
