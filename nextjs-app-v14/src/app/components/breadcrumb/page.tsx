import Breadcrumb from './breadcrumb';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Breadcrumb',
}       

export default function BreadcrumbComponent() {
    return <Breadcrumb/>;
}
