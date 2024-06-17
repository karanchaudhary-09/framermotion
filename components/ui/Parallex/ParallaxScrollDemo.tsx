"use client";

import { images } from "@/utils/data/images";
import { ParallaxMultipleImageScroll } from "./ParallexMultipleImageScroll";
import { MobileScrollParalax } from "./ParallexScroll";

export function ParallaxScrollDemo() {
  return <MobileScrollParalax />;
}

export function ParallexScrollMultipleDemo() {
  return (
    <div className="py-20 overflow-hidden">
      <ParallaxMultipleImageScroll images={images} />
    </div>
  );
}
