import React, { useState } from "react"
import { PieIconButton } from "@justeattakeaway/pie-icon-button/dist/react";
import { IconClose } from "@justeattakeaway/pie-icons-webc2/dist/react";

export default function Home() {
  return (
    <>
      <h2>Icon Close</h2>
      <IconClose size='xs'></IconClose>

      <hr />

      <h2>Pie Icon Button</h2>
      <PieIconButton onClick={() => alert('clicked')}>
        <IconClose size='xs'></IconClose>
      </PieIconButton>
    </>
  );
}
