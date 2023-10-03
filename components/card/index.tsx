import Link from 'next/link';
import { Img } from '../image';
import { capitalizedString } from '@/lib/utils/capitalizedString';

interface CardProps {
  name: string;
  image: string;
  types: { type: { name: string } }[];
}

export function Card({ name, image, types }: CardProps): JSX.Element {
  return (
    <Link
      href={`/${name}`}
      className="group m-3 rounded-lg border border-neutral-50 dark:border-gray-500 px-5 py-4 transition-colors hover:border-neutral-100 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex items-center"
    >
      <div className="relative w-20 h-20 m-2">
        <Img image={image} name={name} />
      </div>
      <h2 className={`text-2xl font-semibold`}>{capitalizedString(name)}</h2>
    </Link>
  );
}
