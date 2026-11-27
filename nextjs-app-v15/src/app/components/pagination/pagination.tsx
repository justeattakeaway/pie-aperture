'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PiePagination } from '@justeattakeaway/pie-webc/react/pagination.js';
import '@/styles/pagination.scss';

type PaginationExample = {
    label: string;
    currentPage: number;
    totalPages: number;
    disabled?: boolean;
    aria?: { label: string };
};

const examples: PaginationExample[] = [
    { label: 'Default (page 1 of 5)', currentPage: 1, totalPages: 5 },
    { label: 'Middle page (page 3 of 5)', currentPage: 3, totalPages: 5 },
    { label: 'Last page (page 5 of 5)', currentPage: 5, totalPages: 5 },
    { label: 'Single page (page 1 of 1)', currentPage: 1, totalPages: 1 },
    { label: 'No ellipsis, up to 7 pages (page 4 of 7)', currentPage: 4, totalPages: 7 },
    { label: 'Many pages (page 1 of 20)', currentPage: 1, totalPages: 20 },
    { label: 'Many pages, middle (page 10 of 20)', currentPage: 10, totalPages: 20 },
    { label: 'Many pages, last (page 20 of 20)', currentPage: 20, totalPages: 20 },
    { label: 'Ellipsis near start (page 2 of 50)', currentPage: 2, totalPages: 50 },
    { label: 'Ellipsis in the middle (page 25 of 50)', currentPage: 25, totalPages: 50 },
    { label: 'Ellipsis near end (page 49 of 50)', currentPage: 49, totalPages: 50 },
    { label: 'Custom aria label', currentPage: 3, totalPages: 20, aria: { label: 'Search results pages' } },
    { label: 'Disabled', currentPage: 3, totalPages: 5, disabled: true },
];

export default function Pagination() {
    return (
        <NavigationLayout title="Pagination">
            {examples.map(({ label, currentPage, totalPages, disabled, aria }) => (
                <section className="c-pagination-example" key={label}>
                    <h2>{label}</h2>
                    <PiePagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        disabled={disabled}
                        aria={aria}
                    />
                </section>
            ))}
        </NavigationLayout>
    );
}
