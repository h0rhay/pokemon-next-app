import Link from 'next/link';
import { Home as HomeIcon, Cog as CogIcon, Wallet as WalletIcon, LucideProps } from 'lucide-react';
import { ThemeToggle } from '../themeToggle';

// Define a new type that includes the title prop
type IconProps = LucideProps & { title?: string };

// Extend the Home and Cog components to accept the new prop
const Home = (props: IconProps) => <HomeIcon {...props} />;
const Cog = (props: IconProps) => <CogIcon {...props} />;
const Wallet = (props: IconProps) => <WalletIcon {...props} />;

export function Header() {
  return (
    <header className="mx-auto lg:max-w-5xl flex justify-between pt-4 mb-12 border-b border-gray-300 dark:border-sky-900">
      <Link href="/" title="homeLink">
        <Home title="iconHome" className="hover:animate-ping w-10 h-10 p-2" />
      </Link>
      <h1 className="text-xl font-bold mt-2">Pokemon Next App</h1>
      <div className="flex">
      <Link href="/web3auth" title="Web3 auth link">
        <Wallet title="home" className="w-10 h-10 p-2" />
      </Link>
      <ThemeToggle />
      </div>
    </header>
  );
}
