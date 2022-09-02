import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import ImageUploader from "./ImageUploader";
import useUploadImage from "../hooks/useUploadImage";

function About() {
  const { image, uploadImage } = useUploadImage();

  return (
    <form className="space-y-5">
      <ImageUploader src={image} onUpload={uploadImage} />

      <Input type="text" placeholder="Name" />
      <Input type="text" placeholder="Title" />
      <Input type="textarea" placeholder="Description" className="h-20" />
      <Button className="w-full">Save this section</Button>
    </form>
  );
}

export default About;
