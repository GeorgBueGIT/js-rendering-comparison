import fs from 'fs';
import path from 'path';

const root = path.resolve(import.meta.dirname, '..');
const app = process.cwd();

const imagesSrc = path.join(root, 'shared/images');
const imagesDst = path.join(app, 'public/images');
const jsonSrc = path.join(root, 'shared/data/items.json');
const jsonDst = path.join(app, 'src/items.json');

// Bilder: nur kopieren wenn nötig
const needsImageSync =
  !fs.existsSync(imagesDst) ||
  fs.readdirSync(imagesSrc).length !== fs.readdirSync(imagesDst).length;

if (needsImageSync) {
  fs.rmSync(imagesDst, { recursive: true, force: true });
  fs.cpSync(imagesSrc, imagesDst, { recursive: true });
  console.log(`✓ Images synced (${fs.readdirSync(imagesDst).length} files)`);
} else {
  console.log('✓ Images up to date');
}

// JSON: immer kopieren, ist klein
fs.copyFileSync(jsonSrc, jsonDst);
console.log('✓ items.json synced');