import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {

  const router = useRouter();

  return (
    <>
    <ul>
    <li><Link href='/components/button'>Button</Link></li>
    <li><Link href='/components/modal'>Modal</Link></li>
    </ul>
    </>
  );
}
