import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Publications from "../components/Publications";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { filteredProjects, moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    const name = userData?.name || "Jorge Casco Seco";
    updateTitle(`${name} | Portfolio`);
  }, [userData]);

  return (
    <>
      <Hero name={userData?.name || "Jorge Casco Seco"} />
      <main>
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Skills />
        <Projects filteredProjects={filteredProjects} />
        <Publications />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
