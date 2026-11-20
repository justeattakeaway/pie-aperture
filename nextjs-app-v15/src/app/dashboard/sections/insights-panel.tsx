'use client';

import { PieAccordion } from '@justeattakeaway/pie-webc/react/accordion.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';
import { PieLottiePlayer } from '@justeattakeaway/pie-webc/react/lottie-player.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { IconDownload } from '@justeattakeaway/pie-icons-webc/dist/react/IconDownload.js';
import { IconHelpCircle } from '@justeattakeaway/pie-icons-webc/dist/react/IconHelpCircle.js';
import { IconVegan } from '@justeattakeaway/pie-icons-webc/dist/react/IconVegan.js';
import { IconVegetarian } from '@justeattakeaway/pie-icons-webc/dist/react/IconVegetarian.js';
import type { ReactNode } from 'react';
import { faqs, menuItems } from '../state/dashboard-data';
import { useDashboard } from '../state/dashboard-context';
import styles from '../dashboard.module.scss';

// The CSS-only button export from pie-css, for the static pill inside the banner
// link below. Anything genuinely clickable on this page uses `pie-button`.
import '@justeattakeaway/pie-css/dist/components/button.css';

// PIE has no chilli/spice glyph, so a spicy tag renders text only rather than
// borrowing an unrelated icon.
const dietaryIcons: Partial<Record<'vegan' | 'vegetarian' | 'spicy', ReactNode>> = {
    vegan: <IconVegan slot="icon" />,
    vegetarian: <IconVegetarian slot="icon" />,
};

/**
 * Insights, help and media.
 *
 * Components exercised: `pie-accordion` (controlled, with icon slot, secondary
 * label, heading level, reduced emphasis and a hidden divider), `pie-thumbnail`
 * (sizes, aspect ratios, background colours, outline variant, padding, disabled and
 * both placeholder behaviours), `pie-lottie-player` (speed, direction and looping
 * options), `pie-link` (all variants, sizes, standalone, icon placement, download
 * and visited state), `pie-spinner` (every size and variant) and
 * `pie-icon-with-background` at all four sizes.
 *
 * `pie-accordion` is a controlled component: it emits `toggle` but never changes
 * its own `isOpen`, so the reducer holds which panel is open (one at a time here).
 */
export default function InsightsPanel () {
    const { state, dispatch } = useDashboard();

    const handleReportDownload = () => {
        dispatch({ type: 'ui/setReportLoading', isLoading: true });
        window.setTimeout(() => {
            dispatch({ type: 'ui/setReportLoading', isLoading: false });
            toaster.create({
                message: 'Weekly insights report is ready.',
                variant: 'success',
                isDismissible: true,
            });
        }, 1800);
    };

    return (
        <section className={styles.section} aria-labelledby="insights-heading">
            <div className={styles.sectionHeader}>
                <div>
                    <h2 id="insights-heading" className={`u-font-heading-m ${styles.sectionHeading}`}>Insights and help</h2>
                    <p className={`u-font-body-s ${styles.sectionIntro}`}>
                        Media, disclosure and loading treatments.
                    </p>
                </div>
                <div className={styles.sectionActions}>
                    <PieButton
                        type="button"
                        variant="secondary"
                        size="small-productive"
                        iconPlacement="trailing"
                        isLoading={state.ui.isReportLoading}
                        data-test-id="insights-report-button"
                        onClick={handleReportDownload}
                    >
                        Build weekly report
                        <IconDownload slot="icon" />
                    </PieButton>
                </div>
            </div>

            {/*
              * The whole banner is the interactive element, so the pill inside it must not
              * be a real button. This is the narrow case the `c-button` CSS-only export
              * exists for: a static element that should look like a PIE button.
              */}
            <a className={styles.guideBanner} href="https://pie.design/foundations/photography" target="_blank" rel="noopener noreferrer">
                <span className={styles.stackTight}>
                    <span className="u-font-body-strong-s">Photograph your pies properly</span>
                    <span className="u-font-caption">
                        Listings with a good photo sell around a third more.
                    </span>
                </span>
                <span className="c-button c-button--secondary c-button--small-productive">
                    Read the guide
                </span>
            </a>

            <div className={styles.splitGrid}>
                <div className={styles.panel}>
                    <h3 className={`u-font-heading-s ${styles.sectionHeading}`}>Order status animations</h3>
                    <p className={`u-font-caption ${styles.subHeading}`}>
                        Shown to customers while they wait. The animations are decorative and
                        hidden from assistive technology, so each one is labelled in text.
                    </p>

                    <div className={styles.lottieWrapper}>
                        <div className={styles.stackTight}>
                            <PieLottiePlayer
                                className={styles.lottiePlayer}
                                animationSrc="/animations/preparing.json"
                                data-test-id="insights-lottie-preparing"
                            />
                            <p className="u-font-body-strong-s">In the oven</p>
                            <p className="u-font-caption">Default speed, looping</p>
                        </div>

                        <div className={styles.stackTight}>
                            <PieLottiePlayer
                                className={styles.lottiePlayer}
                                animationSrc="/animations/courier.json"
                                speed={1.75}
                                data-test-id="insights-lottie-courier"
                            />
                            <p className="u-font-body-strong-s">Out for delivery</p>
                            <p className="u-font-caption">1.75&times; speed</p>
                        </div>

                        <div className={styles.stackTight}>
                            <PieLottiePlayer
                                className={styles.lottiePlayer}
                                animationSrc="/animations/order-confirmed.json"
                                loopDisabled
                                data-test-id="insights-lottie-delivered"
                            />
                            <p className="u-font-body-strong-s">Delivered</p>
                            <p className="u-font-caption">Plays once on arrival</p>
                        </div>
                    </div>
                </div>

                <div className={styles.panel}>
                    <h3 className={`u-font-heading-s ${styles.sectionHeading}`}>Frequently asked</h3>


                    <div className={styles.accordionShell}>
                        {faqs.map((faq, index) => (
                            <PieAccordion
                                key={faq.id}
                                headingLabel={faq.heading}
                                secondaryLabel={faq.secondary}
                                headingLevel="h4"
                                size="auto"
                                /* Suppress the divider on the last item so it sits flush. */
                                isDividerHidden={index === faqs.length - 1}
                                isOpen={state.ui.openFaqId === faq.id}
                                data-test-id={`insights-faq-${faq.id}`}
                                onToggle={() => dispatch({
                                    type: 'ui/setOpenFaq',
                                    id: state.ui.openFaqId === faq.id ? null : faq.id,
                                })}
                            >
                                {/* The visual spec asks for size="m" icons in the icon slot. */}
                                <IconHelpCircle slot="icon" size="m" />
                                <p className="u-font-body-s">{faq.body}</p>
                            </PieAccordion>
                        ))}
                    </div>

                </div>
            </div>

            <div className={styles.panel}>
                <h3 className={`u-font-heading-s ${styles.sectionHeading}`}>Pie photography</h3>
                <p className={`u-font-caption ${styles.subHeading}`}>
                    How your pies appear to customers. Sold-out pies are dimmed.
                </p>

                <div className={styles.thumbnailGrid}>
                    {menuItems.map((item) => (
                        <PieCard
                            key={item.id}
                            tag="button"
                            variant="outline"
                            padding="d"
                            disabled={!item.isAvailable}
                            data-test-id={`insights-menu-card-${item.id}`}
                            aria={{ label: `${item.name}, ${item.price}` }}
                            onClick={() => toaster.create({
                                message: `Opening “${item.name}”.`,
                                variant: 'info',
                                isDismissible: true,
                            })}
                        >
                            <div className={styles.thumbnailCardBody}>
                                <PieThumbnail
                                    src={item.imageSrc}
                                    alt={`${item.name}`}
                                    size={96}
                                    aspectRatio="4by3"
                                    disabled={!item.isAvailable}
                                    /* Replaces the built-in placeholder when the image fails. */
                                    placeholder={{ src: '/logo.png', alt: '' }}
                                />
                                <span className="u-font-body-strong-s">{item.name}</span>
                                <span className="u-font-caption">{item.description}</span>
                                <span className={styles.row}>
                                    <PieTag variant="neutral" size="small">{item.price}</PieTag>
                                    {item.dietary.map((diet) => (
                                        <PieTag
                                            key={diet}
                                            variant="success"
                                            size="small"
                                            hasLeadingIcon={Boolean(dietaryIcons[diet])}
                                        >
                                            {dietaryIcons[diet]}
                                            {diet}
                                        </PieTag>
                                    ))}
                                </span>
                            </div>
                        </PieCard>
                    ))}
                </div>

            </div>
        </section>
    );
}
