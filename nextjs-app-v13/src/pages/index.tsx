import NavigationLayout from "@/layout/navigation";
import { PieLink } from '@justeattakeaway/pie-webc/react/link.js';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  return (
    <NavigationLayout title="Aperture">
    <h2>Demo Integrations</h2>
    <ul>
      <li><PieLink onClick={() => router.push('/integrations/form')} tag="button">Form Demo</PieLink></li>
    </ul>
    <h2>Component Pages</h2>
    <ul>
    <li><PieLink onClick={() => router.push('/components/assistive-text')} tag="button">Assistive Text</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/button')} tag="button">Button</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/card')} tag="button">Card</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/chip')} tag="button">Chip</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/cookie-banner')} tag="button">Cookie Banner</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/form-label')} tag="button">Form Label</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/icon')} tag="button">Icon</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/icon-button')} tag="button">Icon Button</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/link')} tag="button">Link</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/modal')} tag="button">Modal</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/spinner')} tag="button">Spinner</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/switch')} tag="button">Switch</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/tag')} tag="button">Tag</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/text-input')} tag="button">Text Input</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/textarea')} tag="button">Textarea</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/notification')} tag="button">Notification</PieLink></li>
    <li><PieLink onClick={() => router.push('/components/checkbox')} tag="button">Checkbox</PieLink></li>
    </ul>
    </NavigationLayout>
  );
}
