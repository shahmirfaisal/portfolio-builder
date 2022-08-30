import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import SocialLogin from "../components/SocialLogin";
import { signIn } from "next-auth/react";

function UserForm({
  title,
  formContent,
  footerContent,
  onFormSubmit,
  socialTitle,
}) {
  return (
    <main className="min-h-screen bg-primary md:grid md:grid-cols-[1fr_2fr]">
      <section className="md:min-h-screen"></section>

      <section className="bg-white min-h-screen md:rounded-tl-[44px] md:rounded-bl-[44px] py-20 px-6">
        <section className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold">{title}</h2>

          <section className="flex-wrap flex gap-4 mt-5">
            <SocialLogin
              icon={<FcGoogle size="2em" />}
              text={`${socialTitle} with Google`}
              className="grow"
            />
            <SocialLogin
              icon={<FaGithub size="2em" color="black" />}
              text={`${socialTitle} with Github`}
              className="grow"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "/",
                })
              }
            />
          </section>

          <p className="text-[#868686] font-medium text-center my-10">- OR -</p>

          <form onSubmit={onFormSubmit} className="flex flex-col space-y-6">
            {formContent}
          </form>

          <p className="mt-8">{footerContent}</p>
        </section>
      </section>
    </main>
  );
}

export default UserForm;
