import Skeleton from './skeleton';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Skeleton',
}

export default function SkeletonComponent() {
    return <Skeleton/>;
}
