'use client';

import React from "react"
import NavigationLayout from "@/app/layout/navigation";
import { PieBreadcrumb } from '@justeattakeaway/pie-webc/react/breadcrumb.js';
import { PieBreadcrumbItem } from '@justeattakeaway/pie-webc/react/breadcrumb-item.js';
import NextLink from 'next/link'

export default function Breadcrumb() {
    return (
        <NavigationLayout title="Breadcrumb">
            <PieBreadcrumb>
                <NextLink href="/" passHref legacyBehavior>
                    <PieBreadcrumbItemWithRef />
                </NextLink>
                <PieBreadcrumbItem href="#">Breadcrumb</PieBreadcrumbItem>
            </PieBreadcrumb>
        </NavigationLayout>
    );
}

// When wrapping a custom link component such as <PieBreadcrumbItem> or <PieLink> with Next.js's <Link>,
// we need to forward the component `ref` so the nextjs routing behaviour works as expected.
// See: https://nextjs.org/docs/14/pages/api-reference/components/link#if-the-child-is-a-functional-component
const PieBreadcrumbItemWithRef = React.forwardRef(({ href, onClick }: { href?: string, onClick?:  React.MouseEventHandler<HTMLLIElement>}, ref) => {
    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <PieBreadcrumbItem href={href} onClick={onClick} ref={ref as any}>Home</PieBreadcrumbItem>
    )
})

PieBreadcrumbItemWithRef.displayName = 'PieBreadcrumbItemWithRef'