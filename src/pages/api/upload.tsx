import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};


const uploadDir = path.join(process.cwd(), 'public', 'images');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const form = new IncomingForm({
            uploadDir: uploadDir,
            keepExtensions: true,
            filename: (name, ext, part) => `${part.originalFilename}`,
        });

        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Something went wrong!' });
                return;
            }
            const file = files.file as unknown as formidable.File || "null";
            if (!file) {
                return res.status(400).json({ error: "No file uploaded" });
            }
            const tempPath = file.filepath;
            const targetPath = path.join(uploadDir, file.originalFilename || file.newFilename);
            try {
                await fs.rename(tempPath, targetPath);
                res.status(200).json({ message: 'File uploaded successfully', filePath: `/images/${file.originalFilename}` });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Failed to move file' });
            }
        });

    } else {
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

};

export default handler;
