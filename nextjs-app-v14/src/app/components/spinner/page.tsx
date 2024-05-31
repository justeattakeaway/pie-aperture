import  Spinner  from './spinner';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Spinner',
}

export default function SpinnerComponent() {
    return <Spinner/>;
}
