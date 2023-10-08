"use client";
import { ThemeProvider } from '@/app/context/ThemeProvider';
import { PokemonProvider } from '@/app/context/PokemonProvider';

import "regenerator-runtime/runtime";
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

import './globals.css';
import { Header } from '@/components/header';

const supportedChainIds = [1, 5];
const connectors = {
  injected: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <PokemonProvider>
            <ThirdwebWeb3Provider
              connectors={connectors}
              supportedChainIds={supportedChainIds}
            >
              <main
                className="w-full bg-[size:200%_200%]
              bg-gradient-radial
              from-[#c6e4ff]
              to-[#fff7cf]
              animate-background-flow"
              >
                <div
                  className="w-full bg-[size:200%_200%] 
              dark:bg-gradient-radial
              from-[#121829]
              to-[#193e63]
              animate-background-flow"
                >
                  <Header />
                  {children}
                </div>
              </main>
            </ThirdwebWeb3Provider>
          </PokemonProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
