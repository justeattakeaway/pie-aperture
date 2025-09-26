'use client';

import { PieDivider } from "@justeattakeaway/pie-webc/react/divider.js"
import { PieLink } from "@justeattakeaway/pie-webc/react/link.js";
import { useRouter, usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface NavigationLayoutProps {
  children: ReactNode;
  title: string;
}

export default function NavigationLayout({ children, title }: NavigationLayoutProps) {

    const router = useRouter();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
      <>
        <h1>NextJS 15 - PIE { title } </h1>
        { !isHomePage && 
        <>
        <PieLink onClick={() => router.push('/')} tag="button">Back to home</PieLink>
        <PieDivider/>
        </>
        }
        { children }
        { !isHomePage && <PieDivider/>}
      </>
    );
  }
