import { 
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand
 } from "@aws-sdk/client-s3";

 import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

 export const s3 = new S3Client({
    region:process.env.AWS_REGION
 })

 const Bucket=process.env.S3_BUCKET

 export const presignPut=(Key,contentType)=>
    getSignedUrl(
        
    )