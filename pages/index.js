import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const HomePage = () => {
  const { data: session, status } = useSession();
  console.log("Home Page", session?.user);

  return (
    <div>
      <button onClick={() => signIn()}>Signin</button>
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
};

export default HomePage;
