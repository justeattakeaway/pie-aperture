import  Chip  from './chip';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chip',
}

export default function ChipComponent() {
    return <Chip/>;
}
