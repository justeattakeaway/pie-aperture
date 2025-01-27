import Modal from './modal';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Modal',
}

export default function ModalComponent() {
    return <Modal/>;
}
