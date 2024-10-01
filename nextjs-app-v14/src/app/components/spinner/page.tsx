import Spinner from './spinner';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Spinner',
}

export default function SpinnerComponent() {
    return <Spinner/>;
}
