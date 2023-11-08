import localFont from '@next/font/local';

const PokemonFont = localFont({
  src: [
    { path: '../../public/fonts/PokemonSolid.woff' },
    { path: '../../public/fonts/PokemonSolid.woff2' },
  ],
});

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  children: string | React.ReactNode;
  className: string;
  size?: number;
  primary?: boolean;
}

import React from 'react';

export function Heading({ children, size, className, primary }: HeadingProps) {
  const Heading = `h${size}` as keyof JSX.IntrinsicElements;

  return (
    <div className={`relative ${primary ? `ml-4 md:ml-12 -mt-8 -mb-8` : null}`}>
      <Heading
        className={`${PokemonFont.className} ${className} text-yellow-400 text-4xl md:text-8xl [text-shadow:8px_8px_1px_#2c65c2]`}
      >
        {children}
      </Heading>
      {primary ? (
        <p
          className={`${PokemonFont.className} ${className} text-yellow-400 text-4xl md:text-8xl [text-shadow:-8px_-8px_1px_#2c65c2] relative -top-[2.5rem] md:-top-[6rem]`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
