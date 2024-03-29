import { Injectable } from '@nestjs/common';

import fs from 'fs';
import { hashFile } from 'hasha';
import path from 'path';
import { slugify } from 'transliteration';

export interface IFile {
  readonly fieldname: string;
  readonly originalname: string;
  readonly encoding: string;
  readonly mimetype: string;
  readonly buffer: Buffer;
  readonly size: number;
}

const upload_dir = __dirname + '/../../uploads';

@Injectable()
export class UploadService {
  public async upload(file: IFile) {
    if (!fs.existsSync(upload_dir)) {
      fs.mkdirSync(upload_dir);
    }

    const hash_sum = hashFile(file.buffer, { algorithm: 'sha256' });

    const file_dir = path.resolve(upload_dir, hash_sum);
    const file_name = slugify(file.originalname.toLowerCase());
    const full_path = path.resolve(upload_dir, hash_sum, file_name);

    if (!fs.existsSync(file_dir)) {
      fs.mkdirSync(file_dir);
    }

    await this.saveFile(full_path, file.buffer);

    return `/uploads/${hash_sum}/${file_name}`;
  }

  private async saveFile(file_path: string, file: Buffer): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.mkdir(
        path.dirname(file_path),
        { recursive: true },
        (err_mkdir: Error) => {
          if (err_mkdir) {
            reject(err_mkdir);
          }

          fs.writeFile(file_path, file, (err_write: Error) => {
            if (err_write) {
              reject(err_write);
            }

            resolve();
          });
        },
      );
    });
  }
}
