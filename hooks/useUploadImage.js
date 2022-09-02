import { useState } from "react";

const useUploadImage = () => {
  const [image, setImage] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      setImage(e.currentTarget.result);
    };
  };

  return { image, uploadImage };
};

export default useUploadImage;
