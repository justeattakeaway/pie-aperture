import type { Metadata } from 'next';
import Dashboard from './dashboard';

export const metadata: Metadata = {
    title: 'PIE Hub Dashboard',
    description: 'PIE Hub - a fictional pie-bakery dashboard exercising every PIE web component, design token and pie-css helper.',
};

export default function DashboardPage () {
    return <Dashboard />;
}
