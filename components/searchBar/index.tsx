import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface SearchProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchBar({ searchText, setSearchText }: SearchProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 m-auto">
      <Label htmlFor="pokemonName">Name</Label>
      <Input
        type="text"
        value={searchText}
        id="pokemonName"
        placeholder="Pikachu, Bulbasaur..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
        autoComplete="off"
      />
    </div>
  );
}
