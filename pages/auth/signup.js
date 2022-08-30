import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "next/link";
import UserForm from "../../layouts/UserForm";
import { useState } from "react";
import { signIn } from "next-auth/react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changeInput = (setter) => (e) => setter(e.target.value);

  const signup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("Password is not same.");

    await signIn("signup", {
      name,
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <UserForm
      onFormSubmit={signup}
      title="Create Account"
      socialTitle="Signup"
      formContent={
        <>
          <Input
            value={name}
            onChange={changeInput(setName)}
            placeholder="Name"
            type="text"
          />
          <Input
            value={email}
            onChange={changeInput(setEmail)}
            placeholder="Email"
            type="email"
          />
          <Input
            value={password}
            onChange={changeInput(setPassword)}
            placeholder="Password"
            type="password"
          />
          <Input
            value={confirmPassword}
            onChange={changeInput(setConfirmPassword)}
            placeholder="Confirm Password"
            type="password"
          />
          <Button>Create Account</Button>
        </>
      }
      footerContent={
        <>
          Already have an account?{" "}
          <Link href="/auth/login">
            <a className="text-primary font-semibold">Log In</a>
          </Link>
        </>
      }
    />
  );
};

export default SignupPage;
