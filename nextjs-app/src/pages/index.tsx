import { useState } from "react"
import { PieButton } from "@justeattakeaway/pie-button/dist/react"
import { PieDivider } from "@justeattakeaway/pie-divider/dist/react"
import { PieFormLabel } from "@justeattakeaway/pie-form-label/dist/react"
import { PieLink } from "@justeattakeaway/pie-link/dist/react"
import { PieSpinner } from "@justeattakeaway/pie-spinner/dist/react"
import { PieModal } from "@justeattakeaway/pie-modal/dist/react"
import { PieCookieBanner } from "@justeattakeaway/pie-cookie-banner/dist/react"
import { PieIconButton } from "@justeattakeaway/pie-icon-button/dist/react"
import { IconClose } from "@justeattakeaway/pie-icons-webc/dist/react/IconClose";
import { PieSwitch } from "@justeattakeaway/pie-switch/dist/react"
import { PieCard } from "@justeattakeaway/pie-card/dist/react"
import Link from 'next/link'

export default function Home() {
  const [counter, setCounter] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSwitchChecked, setIsSwitchCheck] = useState(false)

  return (
    <>
      <p><Link href="/icons">PIE Icons Test Page</Link></p>
      <h2>Pie Button</h2>
      <PieButton onClick={() => setCounter(counter + 1)}>Counter: {counter}</PieButton>
      <PieDivider />

      <h2>Pie Icon Button</h2>
      <PieIconButton onClick={() => alert('clicked')}>
        <IconClose></IconClose>
      </PieIconButton>
      <PieDivider />

      <h2>Pie Switch</h2>
      <PieSwitch onChange={(e) => setIsSwitchCheck((e as { detail: any }).detail)} label={`checked: ${isSwitchChecked}`} />
      <PieDivider />

      <h2>Pie Link</h2>
      <PieLink href="https://www.pie.design" target="_blank">Visit pie.design</PieLink>
      <PieDivider />

      <h2>Pie Spinner</h2>
      <PieSpinner />
      <PieDivider />

      <h2>Pie Card</h2>
      <PieCard padding="a" onClick={() => alert('Card clicked')}>
        <h2>Title</h2>
        <p>Test card</p>
      </PieCard>
      <PieDivider />

      <h2>Pie Modal</h2>
      <PieButton onClick={() => setIsModalOpen(true)}>Open Modal</PieButton>
      <PieModal isOpen={isModalOpen} heading="Modal Header" onPieModalClose={() => setIsModalOpen(false)} isDismissible hasBackButton>
        <p>Modal</p>
      </PieModal>
      <PieDivider />

      <PieCookieBanner />
      <PieDivider />

      <h2>Pie Form Label</h2>
      <PieFormLabel>Label</PieFormLabel>
    </>
  );
}
