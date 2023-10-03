'use client';
import Image from 'next/image';

interface ImgProps {
  image: string;
  name: string;
}

export function Img({ image, name }: ImgProps) {
  if (!image) {
    return null;
  }
  return (
    <Image
      src={image}
      alt={`Image of a ${name} pokemon`}
      fill
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      placeholder="blur"
      blurDataURL={image}
    />
  );
}
