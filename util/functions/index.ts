//typescipt
import type { ResourceApiResponse, UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

export const openWidget = () => {
  // create the widget
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dta9vptzh",
      uploadPreset: "image_loading"
    },
    (error: UploadApiErrorResponse, result: UploadApiResponse) => {

    }
  );
  widget.open(); // open up the widget after creation
};

export const createImageGallaryData = (resources: ResourceApiResponse["resources"]) => resources.map((resource: any) => ({ src: resource.url, width: 3, height: 3 }))