import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const targets = [
  // Source (shared)
  path.join(root, 'shared/images'),
  path.join(root, 'shared/data/items.json'),
  // Kopien in den Apps
  ...['vite-react', 'nextjs', 'astro'].flatMap(app => [
    path.join(root, `apps/${app}/public/images`),
    path.join(root, `apps/${app}/src/items.json`),
  ]),
];

for (const target of targets) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`✓ Removed ${path.relative(root, target)}`);
  }
}