const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '..', 'public', 'assets');
const outDir = path.join(assetsDir, 'optimized');

if (!fs.existsSync(assetsDir)) {
  console.error('public/assets not found');
  process.exit(1);
}
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const exts = ['.jpg', '.jpeg', '.png', '.webp'];

async function processFile(file) {
  const inPath = path.join(assetsDir, file);
  const outPath = path.join(outDir, file.replace(/\.(jpg|jpeg|png)$/i, '.jpg'));
  try {
    const metadata = await sharp(inPath).metadata();
    const width = metadata.width || 2000;
    const maxWidth = Math.min(1400, width);

    await sharp(inPath)
      .resize({ width: maxWidth })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(outPath);
    return { file, outPath, ok: true };
  } catch (err) {
    return { file, error: err.message, ok: false };
  }
}

(async () => {
  const files = fs.readdirSync(assetsDir).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return exts.includes(ext) && fs.statSync(path.join(assetsDir, f)).isFile();
  });

  console.log('Found', files.length, 'image files. Processing...');
  const results = [];
  for (const f of files) {
    // skip already optimized folder
    if (f === 'optimized') continue;
    const res = await processFile(f);
    results.push(res);
    console.log(res.ok ? 'OK  ' : 'ERR ', f, res.ok ? '' : res.error);
  }

  const ok = results.filter(r => r.ok).length;
  const err = results.length - ok;
  console.log(`\nDone. Optimized: ${ok}, Errors: ${err}`);
  console.log('Optimized files are in public/assets/optimized');
})();
