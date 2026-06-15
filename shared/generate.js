import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.resolve(__dirname, './images');
const COUNT = 200;

fs.mkdirSync(IMAGES_DIR, { recursive: true });

// 1. items.json
const items = Array.from({ length: COUNT }, (_, i) => ({
  id: i+1,
  title: `Item ${i+1}`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price: (i+1 * 1.23).toFixed(2),
  imageUrl: `/images/${i+1}.jpg`,
}));
fs.writeFileSync(path.join(__dirname, './data/items.json'), JSON.stringify(items, null, 2));

// 2. Bilder (skip wenn vorhanden)
function download(i) {
  return new Promise((resolve, reject) => {
    const file = path.join(IMAGES_DIR, `${i}.jpg`);
    if (fs.existsSync(file)) return resolve('skip');
    https.get(`https://picsum.photos/seed/${i}/400/300`, res => {
      // picsum redirected — folge dem Location-Header
      if (res.statusCode === 302 || res.statusCode === 301) {
        https.get(res.headers.location, r => r.pipe(fs.createWriteStream(file)).on('finish', () => resolve('ok')));
      } else {
        res.pipe(fs.createWriteStream(file)).on('finish', () => resolve('ok'));
      }
    }).on('error', reject);
  });
}

// Parallel mit Limit (sonst rate-limited picsum)
const BATCH = 10;
for (let i = 1; i <= COUNT; i += BATCH) {
  await Promise.all(Array.from({ length: BATCH }, (_, j) => download(i + j)));
  console.log(`${i-1 + BATCH}/${COUNT}`);
}
console.log('Done');