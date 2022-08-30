import Link from "next/link";
import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import UserForm from "../../layouts/UserForm";
import { signIn } from "next-auth/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeInput = (setter) => (e) => setter(e.target.value);

  const login = async (e) => {
    e.preventDefault();

    await signIn("signin", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <UserForm
      onFormSubmit={login}
      title="Login"
      socialTitle="Login"
      formContent={
        <>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={changeInput(setEmail)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={changeInput(setPassword)}
          />
          <Button>Login</Button>
        </>
      }
      footerContent={
        <>
          Don't have an account?{" "}
          <Link href="/auth/signup">
            <a className="text-primary font-semibold">Create a new account</a>
          </Link>
        </>
      }
    />
  );
}

export default LoginPage;
