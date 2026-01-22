'use client';

import { PieDivider } from "@justeattakeaway/pie-webc/react/divider.js"
import { PieLink } from "@justeattakeaway/pie-webc/react/link.js";
import { useRouter, usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface ParentLink {
  href: string;
  label: string;
}

interface NavigationLayoutProps {
  children: ReactNode;
  title: string;
  parentLink?: ParentLink;
}

export default function NavigationLayout({ children, title, parentLink }: NavigationLayoutProps) {

    const router = useRouter();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
      <>
        <h1>NextJS 15 - PIE { title } </h1>
        { !isHomePage &&
        <>
        <PieLink onClick={() => router.push('/')} tag="button">Back to home</PieLink>
        { parentLink &&
            <>
            &nbsp;| <PieLink onClick={() => router.push(parentLink.href)} tag="button">{parentLink.label}</PieLink>
            </>
        }
        <PieDivider/>
        </>
        }
        { children }
        { !isHomePage && <PieDivider/>}
      </>
    );
  }
