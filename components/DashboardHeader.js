import Image from "next/image";
import Button from "./Button";
import { FiExternalLink } from "react-icons/fi";

function DashboardHeader({ className, user }) {
  return (
    <header
      className={[
        "flex justify-between gap-5 items-center py-5 max-w-6xl mx-auto border-b-2",
        className,
      ].join(" ")}
    >
      <h1 className="grow font-bold text-2xl">Portfolio Builder</h1>
      <Button>
        View Portfolio <FiExternalLink size={20} />
      </Button>

      <Image src={user.image} width={40} height={40} className="rounded-full" />
    </header>
  );
}

export default DashboardHeader;
