const fs = require('fs');
const sharp = require('sharp');

async function createVideoBg() {
  const width = 1280;
  const height = 720;

  // 1. Load Adarsh circular photo and resize to 620x620
  const adarshCircle = await sharp('public/images/adarsh-circle.png')
    .resize(620, 620)
    .toBuffer();

  // 2. Create feathered alpha falloff so only the outer edge fades into the studio background
  const rawAdarsh = await sharp(adarshCircle).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = rawAdarsh;
  const cx = info.width / 2;
  const cy = info.height / 2;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      // Keep Adarsh 100% bright & crisp in the center; feather only at outer radius (240px to 310px)
      if (dist > 230) {
        const falloff = Math.max(0, 1 - (dist - 230) / 78);
        data[idx + 3] = Math.round(data[idx + 3] * falloff);
      }
    }
  }

  const featheredAdarsh = await sharp(data, { raw: info }).png().toBuffer();

  // 3. Create dark studio base (1280x720) with deep navy (#0B1120) and futuristic blue/cyan gradient lighting
  const baseSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#1E3A8A" stop-opacity="0.45" />
          <stop offset="50%" stop-color="#0F172A" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#0B1120" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="cyber" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#22D3EE" stop-opacity="0.12" />
          <stop offset="50%" stop-color="transparent" />
          <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0.12" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#0B1120" />
      <rect width="${width}" height="${height}" fill="url(#glow)" />
      <rect width="${width}" height="${height}" fill="url(#cyber)" />
    </svg>
  `);

  const bgBuffer = await sharp(baseSvg).png().toBuffer();

  // 4. Composite feathered Adarsh in the center of 1280x720
  const left = Math.round((width - 620) / 2);
  const top = Math.round((height - 620) / 2);

  await sharp(bgBuffer)
    .composite([{ input: featheredAdarsh, top, left }])
    .png()
    .toFile('public/images/animation-video-bg.png');

  console.log('Successfully created public/images/animation-video-bg.png');
}

createVideoBg().catch((err) => {
  console.error('Error generating video background:', err);
  process.exit(1);
});
