import { useState } from "react"
import { PieButton } from "@justeattakeaway/pie-button/dist/react"
import { PieDivider } from "@justeattakeaway/pie-divider/dist/react"
import { PieLink } from "@justeattakeaway/pie-link/dist/react"
import { PieSpinner } from "@justeattakeaway/pie-spinner/dist/react"
import { PieModal } from "@justeattakeaway/pie-modal/dist/react"
import { PieCookieBanner } from "@justeattakeaway/pie-cookie-banner/dist/react"
import { PieIconButton } from "@justeattakeaway/pie-icon-button/dist/react"
import '@justeattakeaway/pie-icons-webc/IconClose';
import { PieSwitch } from "@justeattakeaway/pie-switch/dist/react"
import { PieCard } from "@justeattakeaway/pie-card/dist/react"

export default function Home() {
  const [counter, setCounter] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSwitchChecked, setIsSwitchCheck] = useState(false)

  return (
    <>
      <h2>Pie Button</h2>
      <PieButton onClick={() => setCounter(counter + 1)}>Counter: {counter}</PieButton>
      <PieDivider />

      <h2>Pie Icon Button</h2>
      <PieIconButton onClick={() => alert('clicked')}>
        {/* TODO use the react wrapper of webc icons once added (DSW-1281)*/}
        {/* @ts-ignore*/}
        <icon-close></icon-close>
      </PieIconButton>
      <PieDivider />

      <h2>Pie Switch</h2>
      <PieSwitch onPieSwitchChanged={(e) => setIsSwitchCheck(e.detail)} label={`checked: ${isSwitchChecked}`} />
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
    </>
  );
}
