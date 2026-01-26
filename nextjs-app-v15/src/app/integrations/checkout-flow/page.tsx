import CheckoutFlow from './checkout-flow';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Checkout',
    description: 'Complete your food order with PIE Design System components',
}

export default function CheckoutFlowPage() {
    return <CheckoutFlow />;
}
