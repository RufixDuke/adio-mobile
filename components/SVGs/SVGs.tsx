import React from "react";
import { SvgXml } from "react-native-svg";

interface SVGProps {
  svg: string;
  width?: string;
  height?: string;
}

export function SVG({ svg, width, height }: SVGProps) {
  const bookmarkSVG = svg;
  const SvgImage = () => (
    <SvgXml xml={bookmarkSVG} width={width} height={height} />
  );

  return <SvgImage />;
}
