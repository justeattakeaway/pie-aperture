'use client';

import { useState } from 'react';
import NavigationLayout from '@/app/layout/navigation';
import { PiePagination } from '@justeattakeaway/pie-webc/react/pagination.js';
import '@/styles/pagination-interactive.scss';

const PAGE_SIZE = 10;
const TOTAL_ITEMS = 100;
const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);

// Fake in-memory dataset so the demo does not depend on a backend.
const MOCK_ITEMS = Array.from({ length: TOTAL_ITEMS }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
}));

export default function PaginationInteractive() {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const visibleItems = MOCK_ITEMS.slice(startIndex, startIndex + PAGE_SIZE);

    const handlePageChange = (event: CustomEvent) => {
        setCurrentPage(event.detail.currentPage);
    };

    return (
        <NavigationLayout title="Pagination (Interactive)">
            <section className="c-pagination-interactive">
                <h2>Interactive pagination with mock data</h2>

                <PiePagination
                    data-test-id="interactive-pagination"
                    currentPage={currentPage}
                    totalPages={TOTAL_PAGES}
                    aria={{ label: 'Mock items pages' }}
                    onPiePaginationPageChange={handlePageChange}
                />

                <p data-test-id="pagination-status">
                    Page {currentPage} of {TOTAL_PAGES}
                </p>

                <ul className="c-pagination-interactive__list" data-test-id="pagination-items">
                    {visibleItems.map((item) => (
                        <li key={item.id} data-test-id="pagination-item">{item.name}</li>
                    ))}
                </ul>
            </section>
        </NavigationLayout>
    );
}
