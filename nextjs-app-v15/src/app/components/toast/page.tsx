import Toast from './toast';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Toast',
}

export default function ToastComponent() {
    return <Toast/>;
}
