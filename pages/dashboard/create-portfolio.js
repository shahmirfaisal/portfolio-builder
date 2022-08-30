import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import DashboardHeader from "../../components/DashboardHeader";
import { Tab } from "@headlessui/react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";

const TabComponent = ({ children }) => {
  return (
    <Tab
      className={({ selected }) =>
        [
          "grow p-2 rounded-md outline-none",
          selected && "bg-white text-primary font-semibold",
        ].join(" ")
      }
    >
      {children}
    </Tab>
  );
};

const PanelComponent = ({ title, children, onMove }) => {
  return (
    <Tab.Panel className="max-w-lg mx-auto">
      <h3 className="text-center font-bold text-4xl mb-10">{title}</h3>

      {children}

      <section className="flex justify-center mt-10">
        <Button className="" onClick={onMove}>
          Move
        </Button>
      </section>
    </Tab.Panel>
  );
};

const CreatePortfolioPage = ({ user }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const moveHandler = () => {
    setCurrentTab((prevTab) => prevTab + 1);
  };

  return (
    <main>
      <DashboardHeader user={user} />

      <section className="max-w-6xl mx-auto flex justify-end mt-20 mb-10">
        <Button>Save and Get Live URL</Button>
      </section>

      <section className="max-w-6xl mx-auto">
        <Tab.Group
          selectedIndex={currentTab}
          onChange={(index) => setCurrentTab(index)}
        >
          <Tab.List className="flex justify-between bg-primary text-white text-lg shadow-lg p-1 rounded-md">
            <TabComponent>About</TabComponent>
            <TabComponent>Skills</TabComponent>
            <TabComponent>Projects</TabComponent>
            <TabComponent>Contact</TabComponent>
          </Tab.List>

          <Tab.Panels className="mt-10 mb-10">
            <PanelComponent onMove={moveHandler} title="About">
              <About />
            </PanelComponent>

            <PanelComponent onMove={moveHandler} title="Skills">
              <Skills />
            </PanelComponent>

            <PanelComponent onMove={moveHandler}>Projects</PanelComponent>

            <PanelComponent title="Contact" onMove={moveHandler}>
              <Contact />
            </PanelComponent>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </main>
  );
};

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

export default CreatePortfolioPage;
