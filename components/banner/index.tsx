'use client';
import { CldImage } from 'next-cloudinary';
import { Heading } from '../heading';

export function Banner() {
  return (
    <section className="relative mx-auto lg:max-w-5xl">
      <CldImage
        width="1024"
        height="450"
        src="test/pokemon-clouds"
        sizes="100vw"
        alt="Pokemon Banner image of various pokemon"
        crop="fill"
        gravity="auto"
        placeholder="blur"
        blurDataURL="test/pokemon-clouds"
        removeBackground
        priority
      />
      <div role="heading" aria-level={1}>
        <Heading size={1} className="text-center" primary>
          Explorer
        </Heading>
      </div>
    </section>
  );
}
