import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function readData<T = Record<string, unknown>>(section: string): T | null {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, `${section}.json`);
  if (!existsSync(filePath)) return null;
  try {
    const raw = readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function writeData(section: string, data: unknown): void {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, `${section}.json`);
  writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}
