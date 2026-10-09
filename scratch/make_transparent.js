const sharp = require('sharp');
const path = require('path');

async function processLogo() {
  const inputDark = path.join(__dirname, '../public/brand/logo/nixafin-logo-dark.png');
  const outputDark = path.join(__dirname, '../public/brand/logo/nixafin-logo-dark-transparent.png');
  
  const inputLight = path.join(__dirname, '../public/brand/logo/nixafin-logo-light.png');
  const outputLight = path.join(__dirname, '../public/brand/logo/nixafin-logo-light-transparent.png');

  // Process Dark Logo (black background -> transparent)
  const { data, info } = await sharp(inputDark)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelCount = info.width * info.height;
  for (let i = 0; i < pixelCount; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];

    const maxVal = Math.max(r, g, b);
    if (maxVal < 20) {
      data[i * 4 + 3] = 0; // Fully transparent
    } else if (maxVal < 50) {
      // Smooth alpha ramp for anti-aliasing
      const alpha = Math.round(((maxVal - 20) / 30) * 255);
      data[i * 4 + 3] = alpha;
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    }
  }).png().toFile(outputDark);

  console.log('Saved transparent dark logo:', outputDark);

  // Also process Light Logo if it has white background
  const { data: dataL, info: infoL } = await sharp(inputLight)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const countL = infoL.width * infoL.height;
  for (let i = 0; i < countL; i++) {
    const r = dataL[i * 4];
    const g = dataL[i * 4 + 1];
    const b = dataL[i * 4 + 2];

    const minVal = Math.min(r, g, b);
    if (minVal > 240) {
      dataL[i * 4 + 3] = 0; // Fully transparent
    } else if (minVal > 220) {
      const alpha = Math.round(((240 - minVal) / 20) * 255);
      dataL[i * 4 + 3] = alpha;
    }
  }

  await sharp(dataL, {
    raw: {
      width: infoL.width,
      height: infoL.height,
      channels: 4,
    }
  }).png().toFile(outputLight);

  console.log('Saved transparent light logo:', outputLight);
}

processLogo().catch(console.error);
