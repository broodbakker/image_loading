//cloudinary

import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { blur } from "@cloudinary/url-gen/actions/effect";
//typescipt
import type { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

export const transformImage = (url: string) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dta9vptzh",
    }
  });

  const image = cld.image(url);

  return image.resize(thumbnail().width(300).height(300));
}

export const transformImageBlur = (url: string) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dta9vptzh",
    }
  });

  const image = cld.image(url);

  return image.resize(thumbnail().width(300).height(300)).quality(5).effect(blur())
}


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
