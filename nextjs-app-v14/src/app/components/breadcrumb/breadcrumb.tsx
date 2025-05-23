'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieBreadcrumb } from '@justeattakeaway/pie-webc/react/breadcrumb.js';
import { PieBreadcrumbItem } from '@justeattakeaway/pie-webc/react/breadcrumb-item.js';
import NextLink from 'next/link'

export default function Breadcrumb() {
    return (
        <NavigationLayout title="Breadcrumb">
            <PieBreadcrumb>
                <NextLink passHref href="/" legacyBehavior>
                    <PieBreadcrumbItem href="/">Home</PieBreadcrumbItem>
                </NextLink>
                <PieBreadcrumbItem href="#">Breadcrumb</PieBreadcrumbItem>
            </PieBreadcrumb>
        </NavigationLayout>
    );
}
