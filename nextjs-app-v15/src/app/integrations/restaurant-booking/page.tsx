import RestaurantBooking from './restaurant-booking';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book a Table',
    description: 'Make a restaurant reservation using PIE Design System components',
}

export default function RestaurantBookingPage() {
    return <RestaurantBooking />;
}
