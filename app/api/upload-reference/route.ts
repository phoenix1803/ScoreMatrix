import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const parameters = formData.get('parameters') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const ext = path.extname(file.name);
    const filePath = path.join(uploadDir, `question-paper${ext}`);

    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    const referenceData = { filePath, parameters };
    await fs.writeFile(path.join(uploadDir, 'reference.json'), JSON.stringify(referenceData, null, 2));

    return NextResponse.json({ message: 'Reference file stored successfully', referenceData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
  }
}
