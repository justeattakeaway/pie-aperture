import UncontrolledForm from './uncontrolled-form';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Uncontrolled Form',
}

export default function UncontrolledFormPage() {
    return <UncontrolledForm/>;
}
