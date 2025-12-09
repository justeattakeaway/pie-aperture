'use client';

import NavigationLayout from '@/app/layout/navigation';

export default function TypographyDemo() {
  return (
    <NavigationLayout title="Typography Demo">
      <section>
        <h1 className="u-font-heading-xxl">Main Title (XXL)</h1>
        <h2 className="u-font-heading-xl">Section Heading (XL)</h2>
        <h3 className="u-font-heading-l">Sub-Section Heading (L)</h3>
        <h4 className="u-font-heading-m">Content Block Title (M)</h4>
        <h5 className="u-font-heading-s">Small Header (S)</h5>
        <h6 className="u-font-heading-xs">Tiny Header (XS)</h6>

        <h1 className="u-font-heading-xxl-italic">Main Title Italic (XXL)</h1>
        <h2 className="u-font-heading-xl-italic">Section Heading Italic (XL)</h2>
        <h3 className="u-font-heading-l-italic">Sub-Section Heading Italic (L)</h3>
        <h4 className="u-font-heading-m-italic">Content Block Title Italic (M)</h4>
        <h5 className="u-font-heading-s-italic">Small Header Italic (S)</h5>
        <h6 className="u-font-heading-xs-italic">Tiny Header Italic (XS)</h6>

        <hr />

        <p className="u-font-subheading-l">This is a prominent subheading, perhaps introducing a new section of body text (L).</p>
        <p className="u-font-subheading-s">This is a smaller subheading, useful for brief context or labels (S).</p>

        <hr />

        <p className="u-font-body-l">This is a main paragraph of body text (L). It&apos;s intended for long-form reading, like an article or detailed description.
            <a href="#" className="u-font-body-l-link">This is a link within the body text.</a>
        </p>

        <p className="u-font-body-s">This is a smaller paragraph of body text (S). Used for secondary content or compact information.
            <a href="#" className="u-font-body-s-link">This is a small link in the secondary body text.</a>
        </p>

        <p className="u-font-body-strong-l"><strong>This is strong body text (L)</strong>, highlighting a key takeaway or important warning.
            <a href="#" className="u-font-body-strong-l-link">Strong link here.</a>
        </p>

        <p className="u-font-body-strong-s"><strong>This is strong body text (S)</strong>, for emphasis in smaller contexts.
            <a href="#" className="u-font-body-strong-s-link">Strong small link here.</a>
        </p>

        <hr />

        <p>
            <button className="u-font-interactive-l">Large Interactive Button Text</button>
            <button className="u-font-interactive-s">Small Interactive Text</button>
            <button className="u-font-interactive-xs">Extra-Small Interactive Text</button>
        </p>

        <hr />

        <p className="u-font-caption">This is a standard caption, used for image descriptions, metadata, or footnotes.
            <a href="#" className="u-font-caption-link">Caption link example.</a>
        </p>

        <p className="u-font-caption-strong"><strong>This is a strong caption</strong>, useful for crucial metadata or brief labels.
            <a href="#" className="u-font-caption-strong-link">Strong caption link.</a>
        </p>
      </section>
    </NavigationLayout>
  );
}
