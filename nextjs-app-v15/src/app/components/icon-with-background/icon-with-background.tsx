'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieIconWithBackground } from '@justeattakeaway/pie-webc/react/icon-with-background.js';
import { IconClose } from '@justeattakeaway/pie-icons-webc/dist/react/IconClose.js';
import '@/styles/icon-with-background.scss';

export default function IconWithBackground() {
    return (
        <NavigationLayout title="Icon With Background">
            <h2 className="c-icon-with-background-heading">PIE Icon With Background - Default</h2>
            <div className="c-icon-with-background-container">
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="default" />
                    <span className="c-icon-with-background-label">default</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="with-icon"><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">with icon</span>
                </div>
            </div>

            <h2 className="c-icon-with-background-heading">PIE Icon With Background - Shapes</h2>
            <div className="c-icon-with-background-container">
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="shape-circle" shape="circle"><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">circle</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="shape-square" shape="square"><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">square</span>
                </div>
            </div>

            <h2 className="c-icon-with-background-heading">PIE Icon With Background - Sizes</h2>
            <div className="c-icon-with-background-container">
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="size-small" size="small"><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">small</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="size-medium" size="medium"><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">medium</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="size-large" size="large"><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">large</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="size-xlarge" size="xlarge"><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">xlarge</span>
                </div>
            </div>

            <h2 className="c-icon-with-background-heading">PIE Icon With Background - Variants</h2>
            <div className="c-icon-with-background-container">
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-neutral" variant="neutral"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">neutral</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-neutral-alt" variant="neutral-alternative"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">neutral-alt</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-information" variant="information"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">information</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-success" variant="success"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">success</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-error" variant="error"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">error</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-warning" variant="warning"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">warning</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-brand-02" variant="brand-02"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">brand-02</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-brand-03" variant="brand-03"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">brand-03</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-brand-04" variant="brand-04"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">brand-04</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-brand-05" variant="brand-05"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">brand-05</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-brand-06" variant="brand-06"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">brand-06</span></div>
                <div className="c-icon-with-background-item"><PieIconWithBackground data-test-id="variant-brand-08" variant="brand-08"><IconClose /></PieIconWithBackground><span className="c-icon-with-background-label">brand-08</span></div>
            </div>

            <h2 className="c-icon-with-background-heading">PIE Icon With Background - isStrong</h2>
            <div className="c-icon-with-background-container">
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="is-strong" variant="neutral" isStrong><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">neutral isStrong</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="is-strong-neutral-alt" variant="neutral-alternative" isStrong><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">neutral-alt isStrong</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="is-strong-success" variant="success" isStrong><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">success isStrong</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="is-strong-error" variant="error" isStrong><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">error isStrong</span>
                </div>
            </div>

            <h2 className="c-icon-with-background-heading">PIE Icon With Background - isDimmed</h2>
            <div className="c-icon-with-background-container">
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="is-dimmed-neutral" variant="neutral" isDimmed><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">neutral isDimmed</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="is-dimmed-success" variant="success" isDimmed><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">success isDimmed</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="is-dimmed-error" variant="error" isDimmed><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">error isDimmed</span>
                </div>
                <div className="c-icon-with-background-item">
                    <PieIconWithBackground data-test-id="is-dimmed-information" variant="information" isDimmed><IconClose /></PieIconWithBackground>
                    <span className="c-icon-with-background-label">information isDimmed</span>
                </div>
            </div>
        </NavigationLayout>
    );
}
