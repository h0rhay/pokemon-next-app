import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface SearchProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchBar({ searchText, setSearchText }: SearchProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 m-auto">
      <Label htmlFor="pokemonName" className="sr-only">
        Name
      </Label>
      <Input
        type="text"
        value={searchText}
        id="pokemonName"
        placeholder="Pikachu, Bulbasaur..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
        autoComplete="off"
        className="border-2 border-neutral-100 rounded-lg px-4 py-2 transition-colors hover:border-neutral-200 hover:bg-gray-100 hover:dark:border-neutral-50 hover:dark:bg-neutral-800/30"
      />
    </div>
  );
}
