export function chunkDataKey(hash: string): string {
  return `c/${hash}/d`;
}

export function chunkMetaKey(hash: string): string {
  return `c/${hash}/m`;
}

export function chunkRefCountKey(hash: string): string {
  return `c/${hash}/r`;
}

export function headKey(name: string): string {
  return `h/${name}`;
}
