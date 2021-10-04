import Image from "next/image";

const Desktop = ({ src, height, width }) => (
  <Image
    src={src}
    height={height}
    width={width}
    layout="responsive"
    alt="Desktop Image"
  />
)