import { ThemeProvider } from '@/app/context/ThemeProvider';
import { PokemonProvider } from '@/app/context/PokemonProvider';
import './globals.css';
import { Header } from '@/components/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <PokemonProvider>
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
          </PokemonProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

// interface LayoutProps {
//   children: React.ReactNode;
// }

// export function Layout({ children }: LayoutProps) {
//   return (
//       <div className="">
//           <main className="">
//               {children}
//           </main>
//       </div>
//   );
// }
