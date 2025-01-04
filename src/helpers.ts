export function getMonthAndYear(dt: string): string {
  const date = new Date(dt);
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}
