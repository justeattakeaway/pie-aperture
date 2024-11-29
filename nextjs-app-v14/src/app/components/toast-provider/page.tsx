import ToastProvider from './toast-provider';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Toast Provider',
}

export default function ToastProviderComponent() {
    return <ToastProvider/>;
}
