import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const outputDir = path.join(process.cwd(), 'outputs');
  const files = fs.readdirSync(outputDir);

  if (files.length === 0) {
    return NextResponse.json({ error: 'No files available for download' }, { status: 404 });
  }

  const filePath = path.join(outputDir, files[0]);
  const fileStream = fs.createReadStream(filePath);

  return new NextResponse(fileStream, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${files[0]}"`,
    },
  });
}