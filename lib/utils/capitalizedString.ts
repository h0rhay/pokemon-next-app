export function capitalizedString(string: string | null | undefined) {
  if (!string) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
