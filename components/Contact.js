import Button from "./Button";
import Input from "./Input";

function Contact() {
  return (
    <form className="space-y-5">
      <Input type="email" placeholder="Email" />
      <Input type="number" placeholder="Phone Number" />
      <Button className="w-full">Save this section</Button>
    </form>
  );
}

export default Contact;
