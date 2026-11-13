/** "2026-04-30" → "30 Apr 2026" (UTC, so the day never shifts). */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
