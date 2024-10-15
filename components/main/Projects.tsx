import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Carousel from "./Caroussel";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/phyto.png"
          title="Phytoscience Gabon"
          description="Phyto Science est une entreprise mondiale de santé et de bien-être."
          lien="https://phytoscience.vercel.app/"
        />

        <ProjectCard
          src="/mbulu.png"
          title="Mbulu"
          description="Le dictionnaire numérique interactif dédié aux langues gabonaises. "
          lien="https://dev-mbulu.netlify.app/"
        />

        <ProjectCard
          src="/fourniture.png"
          title="Fourniture en ligne"
          description="Fourniture en Ligne est la solution innovante pour simplifier la préparation de la rentrée scolaire. "
          lien="https://fournitureenligne.com/"
        />
        <ProjectCard
          src="/piga.jpg"
          title="PIGA by T.COM"
          description="PIGA est une solution innovante vous permettant de toucher plus de 50.000 personnes par jour en diffusant votre message publicitaire à l'intérieur de plus de 100 taxis berlines."
          lien=""
        />
      </div>
    </div>
  );
};

export default Projects;
