import { Rive } from "@rive-app/canvas-lite";

const r = new Rive({
  src: "https://cdn.rive.app/animations/vehicles.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  stateMachines: "bumpy",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});