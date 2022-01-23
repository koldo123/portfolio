import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import micro from "../images/micro.png";
import calendar from "../images/calendar.png";

const Projects = () => {
  const [pagination, setPagination] = useState(true);

  const projects = [
    {
      title: "Crash Blind Test",
      image: "../images/micro.png",
      alt: "micro",
      desc: "Blind test en ligne avec la possibilité de personnaliser ses parties.",
      link: "https://marie5060.github.io/Blind-Crash-Test/",
      className: "projects__container__slide__link__micro",
    },
    {
      title: "Olentzero",
      image: "../images/calendar.png",
      alt: "calendar",
      desc: "Hackathon: 48H de code non-stop, en groupe, avec un thème imposé, la musique.",
      link: "https://koldo123.github.io/olentzero-music/",
      className: "projects__container__slide__link__olentzero",
    },
  ];

  return (
    <div className="projects" id="projets">
      <div className="projects__container">
        <div className="projects__container__nav">
          <IoIosArrowBack
            className="projects__container__nav__item"
            onClick={() => setPagination(!pagination)}
          />
          <IoIosArrowForward
            className="projects__container__nav__item"
            onClick={() => setPagination(!pagination)}
          />
        </div>

        <div className="projects__container__slide" id="slide">
          <a
            className="projects__container__slide__link"
            href={pagination ? projects[0].link : projects[1].link}
            target="_blank"
            rel="noreferrer"
            id="slide_link"
          >
            <img
              className={
                pagination ? projects[0].className : projects[1].className
              }
              id="slide_img"
              src={pagination ? micro : calendar}
              alt="micro"
            />
            <div className="projects__container__slide__link__content">
              <h1 className="projects__container__slide__link__content__title">
                {pagination ? projects[0].title : projects[1].title}
              </h1>
              <p
                className="projects__container__slide__link__content__desc"
                id="slide_desc"
              >
                {pagination ? projects[0].desc : projects[1].desc}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
