import fs from 'fs';
import path from 'path';

export async function loadJson(file: string) {
  const content = await fs.promises.readFile(file, 'utf8');
  return JSON.parse(content);
}

export async function saveJson(file: string, data: unknown) {
  const content = JSON.stringify(data, null, 2);
  await fs.promises.mkdir(path.dirname(file), { recursive: true });
  await fs.promises.writeFile(file, content);
}
