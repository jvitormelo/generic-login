"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Config = void 0;
require('dotenv').config();
exports.s3Config = {
    bucketName: String(process.env.AWS_S3_BUCKET),
    defaultRegion: String(process.env.DEFAULT_REGION),
    defaultFilesACL: String(process.env.DEFAULT_FILES_ACL),
    accessKeyId: String(process.env.AWS_ACCESS_KEY),
    secretAccessKey: String(process.env.AWS_SECRET_ACCESS),
};
//# sourceMappingURL=s3.config.js.map