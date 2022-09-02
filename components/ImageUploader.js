import Button from "./Button";
import { BiUpload } from "react-icons/bi";

function ImageUploader({ src, onUpload }) {
  return (
    <section className="border flex items-center justify-center h-80">
      <input type="file" id="image" hidden onChange={onUpload} />

      {!src && (
        <section>
          <Button htmlFor="image" type="label">
            Upload Image <BiUpload />
          </Button>
        </section>
      )}

      {src && (
        <section className="h-full w-full relative group">
          <img src={src} className="w-full h-full block object-contain" />

          <div className="w-full h-full bg-[#00000080] absolute top-0 right-0 hidden group-hover:flex items-center justify-center">
            <Button type="label" htmlFor="image">
              Upload Image <BiUpload />
            </Button>
          </div>
        </section>
      )}
    </section>
  );
}

export default ImageUploader;
