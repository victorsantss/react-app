export function getInitials(name: string) {
  const names = name.trim().split(' ');
  const firstInitial = names[0].charAt(0).toUpperCase();
  const lastInitial = names[names.length - 1].charAt(0).toUpperCase();
  return `${firstInitial}${lastInitial}`;
}
