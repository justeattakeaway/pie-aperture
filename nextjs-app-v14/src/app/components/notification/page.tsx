import  Notification  from './notification';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Notification',
}

export default function NotificationComponent() {
    return <Notification/>;
}
