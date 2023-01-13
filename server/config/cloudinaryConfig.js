// import { config, uploader } from "cloudinary";
// const cloudinaryConfig = () =>
//   config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET,
//   });
// export { cloudinaryConfig, uploader };

import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "RailwayConcession",
    allowedFormats: ["png", "jpeg", "jpg", "pdf"],
  },
});

export { cloudinary, storage };
