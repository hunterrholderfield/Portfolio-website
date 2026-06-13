// Generates a valid placeholder résumé PDF at public/Hunter-Holderfield-Resume.pdf.
// Replace that file with your real résumé. Re-run with: node scripts/gen-resume.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/Hunter-Holderfield-Resume.pdf");

const text = (x, y, size, str) =>
  `BT /F1 ${size} Tf ${x} ${y} Td (${str.replace(/([()\\])/g, "\\$1")}) Tj ET`;

const content = [
  text(72, 720, 24, "Hunter Holderfield"),
  text(72, 694, 13, "AI & Automation Engineer  -  Kansas City, KS"),
  text(72, 660, 11, "This is a placeholder resume."),
  text(72, 644, 11, "Replace public/Hunter-Holderfield-Resume.pdf with your real PDF."),
  text(72, 610, 11, "hunterrholderfield@gmail.com  -  ihrh.me"),
].join("\n");

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [];
objects.forEach((body, i) => {
  offsets[i] = Buffer.byteLength(pdf);
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
offsets.forEach((off) => {
  pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, pdf, "latin1");
console.log("Wrote", out, `(${Buffer.byteLength(pdf)} bytes)`);
