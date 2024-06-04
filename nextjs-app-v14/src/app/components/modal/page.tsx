import  Modal  from './modal';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Modal',
}

export default function ModalComponent() {
    return <Modal/>;
}
