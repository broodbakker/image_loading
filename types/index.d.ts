import type cloudinary from "cloudinary";

export { };

declare global {
  interface Window {
    cloudinary?: cloudinary;
  }
}