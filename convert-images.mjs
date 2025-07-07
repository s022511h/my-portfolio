import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import fs from 'fs';

const sourceDir = 'src/assets';
const outputDir = 'src/assets/webp';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = await imagemin([`${sourceDir}/*.{jpg,png}`], {
  destination: outputDir,
  plugins: [
    imageminWebp({
      quality: 75,
    }),
  ],
});

console.log(`✅ Converted ${files.length} image(s) to WebP.`);
