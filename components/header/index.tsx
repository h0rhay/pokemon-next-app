import Link from 'next/link';
import { Home as HomeIcon, Cog as CogIcon, LucideProps } from 'lucide-react';
import { ThemeToggle } from '../themeToggle';

// Define a new type that includes the title prop
type IconProps = LucideProps & { title?: string };

// Extend the Home and Cog components to accept the new prop
const Home = (props: IconProps) => <HomeIcon {...props} />;
const Cog = (props: IconProps) => <CogIcon {...props} />;

export function Header() {
  return (
    <header className="mx-auto lg:max-w-5xl flex justify-between pt-4">
      <Link href="/" title="Home link">
        <Home title="home" className="hover:animate-ping w-10 h-10 p-2" />
      </Link>
      <ThemeToggle />
    </header>
  );
}
