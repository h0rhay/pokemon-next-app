import { capitalizedString } from '@/lib/utils/capitalizedString';

interface FilterProps {
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const pokemonTypes: {type: string; color: keyof typeof colorVariants}[] = [
  { type: 'normal', color: 'neutral' },
  { type: 'grass', color: 'green' },
  { type: 'rock', color: 'stone' },
  { type: 'fire', color: 'red' },
  { type: 'electric', color: 'sky' },
  { type: 'ice', color: 'cyan' },
  { type: 'fighting', color: 'orange' },
  { type: 'ground', color: 'brown' },
  { type: 'flying', color: 'indigo' },
  { type: 'psychic', color: 'violet' },
  { type: 'bug', color: 'lime' },
  { type: 'dragon', color: 'orange' },
  { type: 'ghost', color: 'slate' },
  { type: 'poison', color: 'purple' },
  { type: 'steel', color: 'gray' },
  { type: 'fairy', color: 'pink' },
];

const colorVariants = {
  neutral: `bg-neutral-400`,
  green: `bg-green-400`,
  purple: `bg-purple-400`,
  red: `bg-red-400`,
  sky: `bg-sky-400`,
  cyan: `bg-cyan-400`,
  orange: `bg-orange-400`,
  brown: `bg-yellow-700`,
  indigo: `bg-indigo-400`,
  pink: `bg-pink-400`,
  lime: `bg-lime-400`,
  gray: `bg-gray-400`,
  fuschia: `bg-fuschia-400`,
  black: `bg-black-400`,
  stone: `bg-stone-400`,
  slate: `bg-slate-300`,
  violet: `bg-violet-400`,
};

export function Filter({
  filterType,
  setFilterType,
  setCurrentPage,
}: FilterProps) {
  return (
    <nav className="flex justify-center gap-4 flex-wrap">
      {pokemonTypes.map((type, i) => {
        return (
          <button
            key={`${i}-pokemon`}
            className={`${
              filterType === type.type
                ? `${
                    colorVariants[type.color]
                  } opacity-100`
                : `${
                    colorVariants[type.color]
                  } opacity-60 hover:opacity-100`
            }  font-bold py-2 px-4 rounded-3xl  transition-colors border-2 border-white `}
            onClick={() => {
              setFilterType(type.type);
              setCurrentPage(1);
            }}
          >
            {capitalizedString(type.type)}
          </button>
        );
      })}
      <button
        className="font-bold py-2 px-4 rounded-3xl  transition-colors border-2 border-white"
        onClick={() => setFilterType('')}
      >
        Reset
      </button>
    </nav>
  );
}
