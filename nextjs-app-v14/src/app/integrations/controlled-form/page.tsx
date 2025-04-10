import ControlledForm from './controlled-form';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Controlled Form',
}

export default function ControlledFormPage() {
    return <ControlledForm/>;
}
