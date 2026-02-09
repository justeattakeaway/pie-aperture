import RestaurantBooking from './restaurant-booking';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Restaurant Booking',
    description: 'Book a table at your favourite restaurant with PIE Design System components',
}

export default function RestaurantBookingPage() {
    return <RestaurantBooking />;
}
