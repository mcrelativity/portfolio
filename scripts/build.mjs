import { cp, mkdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const destination = resolve(root, 'dist');
await mkdir(destination, { recursive: true });
const files = ['index.html', 'css/liquid-glass.css', 'css/optical.css', 'js/app.js', 'js/optical.js', 'assets/favicon.svg', 'assets/portrait.webp', 'assets/social-cover.png', 'assets/aws-architect.webp', 'assets/aws-ai.webp', 'assets/aws-practitioner.webp', 'assets/google-analytics.webp'];
for (const file of files) {
  await readFile(resolve(root, file));
  await cp(resolve(root, file), resolve(destination, file), { recursive: true });
}
console.log(`Built ${files.length} files into dist/. No runtime dependencies.`);
