import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import axios from "axios";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { errorHandler } from "../../utils";
import toast from "react-hot-toast";

function UsenamePage({ user }) {
  const [username, setUsername] = useState("");

  const changeUsername = (e) => setUsername(e.target.value);
  const submitUsername = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(`/api/user/${user._id}`, {
        username,
      });
      toast.success("Username added!");
    } catch (error) {
      // alert(errorHandler(error));
      toast.error(errorHandler(error));
    }
  };

  return (
    <main className="min-h-screen bg-primary flex items-center justify-center">
      <section className="bg-white p-5 md:p-10 max-w-lg w-full shadow-xl rounded-md">
        <h1 className="md:text-4xl text-2xl font-bold text-center">
          Add a Username
        </h1>

        <form
          onSubmit={submitUsername}
          className="flex flex-col space-y-5 mt-10 mb-5"
        >
          <Input
            type="text"
            placeholder="Username..."
            value={username}
            onChange={changeUsername}
          />
          <Button>ADD</Button>
        </form>

        <p className="text-gray-600 text-sm">
          This username will be used in the URL of your portfolio. <br />
          <br /> For Example: If your username is "john", your portfolio will be
          available at: http://localhost:3000/john
        </p>
      </section>
    </main>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(session.user)),
    },
  };
};

export default UsenamePage;
