import '@justeattakeaway/pie-webc/components/pagination.js';
import './shared.js';
import './utils/navigation.js';
import '../css/pagination-interactive.css';

const PAGE_SIZE = 10;
const TOTAL_ITEMS = 100;
const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);

// Fake in-memory dataset so the demo does not depend on a backend.
const mockItems = Array.from({ length: TOTAL_ITEMS }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
}));

let currentPage = 1;

document.querySelector('#app').innerHTML = `
    <section class="c-pagination-interactive">
        <h2>Interactive pagination with mock data</h2>

        <pie-pagination
            id="interactive-pagination"
            data-test-id="interactive-pagination"
            currentPage="${currentPage}"
            totalPages="${TOTAL_PAGES}"
        ></pie-pagination>

        <p data-test-id="pagination-status">Page ${currentPage} of ${TOTAL_PAGES}</p>

        <ul class="c-pagination-interactive__list" data-test-id="pagination-items"></ul>
    </section>`;

const pagination = document.getElementById('interactive-pagination');
const status = document.querySelector('[data-test-id="pagination-status"]');
const list = document.querySelector('[data-test-id="pagination-items"]');

// `aria` is an object property, so it is set imperatively rather than as an attribute.
pagination.aria = { label: 'Mock items pages' };

const renderPage = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const visibleItems = mockItems.slice(startIndex, startIndex + PAGE_SIZE);

    status.textContent = `Page ${currentPage} of ${TOTAL_PAGES}`;
    list.innerHTML = visibleItems
        .map((item) => `<li data-test-id="pagination-item">${item.name}</li>`)
        .join('');
};

pagination.addEventListener('pie-pagination-page-change', (event) => {
    currentPage = event.detail.currentPage;
    pagination.currentPage = currentPage;
    renderPage();
});

renderPage();
