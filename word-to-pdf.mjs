#!/usr/bin/env node

/**
 * word-to-pdf.mjs — Convert .docx to PDF via mammoth + Playwright
 *
 * Usage:
 *   node word-to-pdf.mjs <input.docx> [output.pdf]
 *
 * Workflow:
 *   1. mammoth converts .docx to HTML (preserves structure)
 *   2. Playwright renders HTML to PDF
 *
 * Drop your Word files in word-templates/ folder.
 */

import { readFile, writeFile } from 'fs/promises';
import { resolve, basename, dirname } from 'path';
import mammoth from 'mammoth';
import { chromium } from 'playwright';

async function convertWordToPdf() {
  const args = process.argv.slice(2);
  const inputPath = args[0];

  if (!inputPath) {
    console.log('Usage: node word-to-pdf.mjs <input.docx> [output.pdf]');
    console.log('');
    console.log('Examples:');
    console.log('  node word-to-pdf.mjs word-templates/resume.docx');
    console.log('  node word-to-pdf.mjs word-templates/resume.docx output/resume.pdf');
    process.exit(1);
  }

  const resolvedInput = resolve(inputPath);
  const outputPath = args[1]
    ? resolve(args[1])
    : resolve('output', basename(inputPath).replace(/\.docx$/i, '.pdf'));

  console.log(`📄 Input:  ${resolvedInput}`);
  console.log(`📁 Output: ${outputPath}`);

  // Step 1: Convert .docx to HTML using mammoth
  console.log('📝 Converting .docx to HTML...');
  const docxBuffer = await readFile(resolvedInput);
  const result = await mammoth.convertToHtml({ buffer: docxBuffer }, {
    styleMap: [
      "p[style-name='Heading 1'] => h1:fresh",
      "p[style-name='Heading 2'] => h2:fresh",
      "p[style-name='Heading 3'] => h3:fresh",
    ]
  });

  if (result.messages.length > 0) {
    console.log('⚠️  Conversion warnings:', result.messages.map(m => m.message).join(', '));
  }

  // Step 2: Wrap HTML with styling that mimics a clean resume
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: Calibri, Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.4;
    color: #1a1a1a;
    padding: 0.5in;
  }
  h1 { font-size: 22pt; font-weight: 700; margin-bottom: 4px; color: #1a1a2e; }
  h2 { font-size: 13pt; font-weight: 700; text-transform: uppercase; color: #2a7a8a; border-bottom: 1px solid #ddd; padding-bottom: 2px; margin-top: 12px; margin-bottom: 6px; }
  h3 { font-size: 11pt; font-weight: 600; color: #6a3d9a; margin-top: 8px; margin-bottom: 2px; }
  p { margin-bottom: 4px; }
  ul { padding-left: 18px; margin-top: 4px; margin-bottom: 4px; }
  li { font-size: 10.5pt; line-height: 1.4; margin-bottom: 2px; }
  strong { font-weight: 700; }
  a { color: #555; text-decoration: none; }
  img { max-width: 80px; height: auto; }
  table { width: 100%; border-collapse: collapse; }
  td, th { padding: 2px 4px; vertical-align: top; }
</style>
</head>
<body>
${result.value}
</body>
</html>`;

  // Save intermediate HTML (useful for debugging)
  const htmlPath = resolvedInput.replace(/\.docx$/i, '.html');
  await writeFile(htmlPath, html);
  console.log(`🔧 HTML saved: ${htmlPath}`);

  // Step 3: Render to PDF using Playwright
  console.log('🖨️  Rendering PDF...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const pdfBuffer = await page.pdf({
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
  });

  await writeFile(outputPath, pdfBuffer);
  await browser.close();

  const pageCount = (pdfBuffer.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  console.log(`✅ PDF generated: ${outputPath}`);
  console.log(`📊 Pages: ${pageCount}`);
  console.log(`📦 Size: ${(pdfBuffer.length / 1024).toFixed(1)} KB`);
}

convertWordToPdf().catch(err => {
  console.error('❌ Conversion failed:', err.message);
  process.exit(1);
});
