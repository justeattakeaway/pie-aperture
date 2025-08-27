'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieAvatar } from '@justeattakeaway/pie-webc/react/avatar.js';
const imageUrl = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function Avatar() {
    return (
        <NavigationLayout title="Avatar">
            <h1>Avatar Static Initials</h1>
            <PieAvatar label="Ada Lovelace" tag="div"></PieAvatar>
            <h1>Avatar Fallback</h1>
            <PieAvatar tag="div"></PieAvatar>
            <h1>Avatar Static Image</h1>
            <PieAvatar tag="div" src={imageUrl}></PieAvatar>

        </NavigationLayout>
    );
}
