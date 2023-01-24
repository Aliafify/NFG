import React, { useState } from "react";
import "./gallary.css";
import Modal from "../modal/modal";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Header from "../About/header" 
import Details from "./projectDetails";
       // project
const Project = ({ project, onClick, light }) => {
  //project={title,name,discription,url,imageUrl}
  const [isOpen, setIsOpen] = useState(false);
  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));
  const style={
    backgroundImage:`url(${project.cover})`
  }
  return (
    <>
      <div style={style} onClick={() => setIsOpen(true)}
     id='project' className={` g-item ${light ? "shadow-sun-mode" : " "}`}>
      <span data-content={project.name}></span>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        width={  '70vw'}
          height= {'98vh'}
      >
<Header light={light}
       header={{word1:'',word2:project.name,bgtitle:""}}/>
<div id="pr">
<Details p={project}/>
<Carousel images={images} style={{  width: '100%' }} />
</div>
      </Modal>
    </>
  );
};
               // Gallary component

function Gallary({ projects ,light }) {
  //projects =[project1,project2,...]
  return (
    <section className="gallary">
      {projects.length ? (
        projects.map((p, i) => (
          <Project
            key={i}
            project={p}
            light={light}
          />
        ))
      ) : (
        <h5>No Projects added</h5>
      )}
      
    </section>
  );
}

export default Gallary;
