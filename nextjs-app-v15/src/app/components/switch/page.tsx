import Switch from './switch';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Switch',
}

export default function SwitchComponent() {
    return <Switch/>;
}
