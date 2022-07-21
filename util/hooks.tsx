import { useEffect, useState } from "react"
import type { ResourceApiResponse } from "cloudinary";
//function
import { fetchGetJSON, fetchPostJSON } from "./functions/fetch"

export const useImages = () => {
  const [images, setImages] = useState<ResourceApiResponse["resources"]>();

  const [message, setMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async (
  ) => {
    setLoading(true);
    // setErrorMessage('');
    const response = await fetchGetJSON('/api/images');

    if (response.statusCode === 200) {
      setLoading(false);
      setImages(response.message)
      return;
    }
    if (response.statusCode > 405) {
      console.error(response.message);
      setErrorMessage(response.message);
      setLoading(false);
      return;
    }

    if (response.statusCode > 500) {
      console.error(response.message);
      setErrorMessage(response.message);
      setLoading(false);
      return;
    } else {
      console.error(response.message);
      setErrorMessage('unknown error: try again');
      setLoading(false);
    }
  };

  const handleDeleteImage = async (
    public_id: string
  ) => {
    setLoading(true);
    // setErrorMessage('');

    const response = await fetchPostJSON('/api/deleteImage', public_id);

    if (response.statusCode === 200) {
      setLoading(false);
      setMessage(response.message)
      getImages()
      return;
    }
    if (response.statusCode > 405) {
      console.error(response.message);
      setErrorMessage(response.message);
      setLoading(false);
      return;
    }

    if (response.statusCode > 500) {
      console.error(response.message);
      setErrorMessage(response.message);
      setLoading(false);
      return;
    } else {
      console.error(response.message);
      setErrorMessage('unknown error: try again');
      setLoading(false);
    }
  };

  return { images, loading, errorMessage, handleDeleteImage };
};
