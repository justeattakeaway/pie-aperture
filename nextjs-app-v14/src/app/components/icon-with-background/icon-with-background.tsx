'use client';

import { type CSSProperties } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieIconWithBackground } from '@justeattakeaway/pie-webc/react/icon-with-background.js';
import { IconClose } from '@justeattakeaway/pie-icons-webc/dist/react/IconClose.js';

const itemStyle: CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 };
const rowStyle: CSSProperties = { display: 'flex', gap: 16, alignItems: 'flex-end', flexWrap: 'wrap', padding: '8px 0' };
const labelStyle: CSSProperties = { fontSize: 12 };
const headingStyle: CSSProperties = { padding: '8px 0' };

export default function IconWithBackground() {
    return (
        <NavigationLayout title="Icon With Background">
            <h2 style={headingStyle}>PIE Icon With Background - Default</h2>
            <div style={rowStyle}>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="default" />
                    <span style={labelStyle}>default</span>
                </div>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="with-icon"><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>with icon</span>
                </div>
            </div>

            <h2 style={headingStyle}>PIE Icon With Background - Shapes</h2>
            <div style={rowStyle}>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="shape-circle" shape="circle"><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>circle</span>
                </div>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="shape-square" shape="square"><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>square</span>
                </div>
            </div>

            <h2 style={headingStyle}>PIE Icon With Background - Sizes</h2>
            <div style={rowStyle}>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="size-small" size="small"><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>small</span>
                </div>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="size-medium" size="medium"><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>medium</span>
                </div>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="size-large" size="large"><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>large</span>
                </div>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="size-xlarge" size="xlarge"><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>xlarge</span>
                </div>
            </div>

            <h2 style={headingStyle}>PIE Icon With Background - Variants</h2>
            <div style={rowStyle}>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-neutral" variant="neutral"><IconClose /></PieIconWithBackground><span style={labelStyle}>neutral</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-neutral-alt" variant="neutral-alternative"><IconClose /></PieIconWithBackground><span style={labelStyle}>neutral-alt</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-information" variant="information"><IconClose /></PieIconWithBackground><span style={labelStyle}>information</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-success" variant="success"><IconClose /></PieIconWithBackground><span style={labelStyle}>success</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-error" variant="error"><IconClose /></PieIconWithBackground><span style={labelStyle}>error</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-warning" variant="warning"><IconClose /></PieIconWithBackground><span style={labelStyle}>warning</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-brand-02" variant="brand-02"><IconClose /></PieIconWithBackground><span style={labelStyle}>brand-02</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-brand-03" variant="brand-03"><IconClose /></PieIconWithBackground><span style={labelStyle}>brand-03</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-brand-04" variant="brand-04"><IconClose /></PieIconWithBackground><span style={labelStyle}>brand-04</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-brand-05" variant="brand-05"><IconClose /></PieIconWithBackground><span style={labelStyle}>brand-05</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-brand-06" variant="brand-06"><IconClose /></PieIconWithBackground><span style={labelStyle}>brand-06</span></div>
                <div style={itemStyle}><PieIconWithBackground data-test-id="variant-brand-08" variant="brand-08"><IconClose /></PieIconWithBackground><span style={labelStyle}>brand-08</span></div>
            </div>

            <h2 style={headingStyle}>PIE Icon With Background - isStrong</h2>
            <div style={rowStyle}>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="is-strong" variant="neutral" isStrong><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>neutral isStrong</span>
                </div>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="is-strong-neutral-alt" variant="neutral-alternative" isStrong><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>neutral-alt isStrong</span>
                </div>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="is-strong-success" variant="success" isStrong><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>success isStrong</span>
                </div>
                <div style={itemStyle}>
                    <PieIconWithBackground data-test-id="is-strong-error" variant="error" isStrong><IconClose /></PieIconWithBackground>
                    <span style={labelStyle}>error isStrong</span>
                </div>
            </div>
        </NavigationLayout>
    );
}
