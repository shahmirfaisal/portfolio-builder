import { useState } from "react";
import Button from "./Button";
import { BiUpload } from "react-icons/bi";
import Input from "./Input";

function About() {
  const [image, setImage] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      console.log(e.currentTarget.result);
      setImage(e.currentTarget.result);
    };
  };

  return (
    <form className="space-y-5">
      <section className="border flex items-center justify-center h-80">
        <input type="file" id="image" hidden onChange={uploadImage} />

        {!image && (
          <section>
            <Button htmlFor="image" type="label">
              Upload Image <BiUpload />
            </Button>
          </section>
        )}

        {image && (
          <section className="h-full w-full relative group">
            <img src={image} className="w-full h-full block object-contain" />

            <div className="w-full h-full bg-[#00000080] absolute top-0 right-0 hidden group-hover:flex items-center justify-center">
              <Button type="label" htmlFor="image">
                Upload Image <BiUpload />
              </Button>
            </div>
          </section>
        )}
      </section>

      <Input type="text" placeholder="Name" />
      <Input type="text" placeholder="Title" />
      <Input type="textarea" placeholder="Description" className="h-20" />
      <Button className="w-full">Save this section</Button>
    </form>
  );
}

export default About;
