import formidable from 'formidable';
import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

type FormidableFiles = Record<string, formidable.File | formidable.File[]>;

export async function POST(req: Request): Promise<Response> {
  const form = new formidable.IncomingForm() as any;
  form.uploadDir = path.join(process.cwd(), '/uploads');
  form.keepExtensions = true;

  return new Promise((resolve) => {
    form.parse(req, (err: Error | null, _fields: any, files: FormidableFiles) => {
      if (err) {
        console.error('Error during file parsing:', err);
        resolve(
          new Response(
            JSON.stringify({ error: 'File upload failed', details: err.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
          )
        );
        return; // Exit after resolving
      }

      if (files?.file && Array.isArray(files.file)) {
        const filePath = files.file[0].filepath;

        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading the file:', err);
            resolve(
              new Response(
                JSON.stringify({ error: 'Error reading the file', details: err.message }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
              )
            );
            return; // Exit after resolving
          }

          Papa.parse(data, {
            complete: (result) => {
              console.log('Parsed CSV Data:', result.data);
              resolve(
                new Response(
                  JSON.stringify({ data: result.data }),
                  { status: 200, headers: { 'Content-Type': 'application/json' } }
                )
              );
            },
            header: true,
          });
        });
      } else {
        resolve(
          new Response(
            JSON.stringify({ error: 'No file uploaded' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          )
        );
      }
    });
  });
}
