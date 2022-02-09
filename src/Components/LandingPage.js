import React from "react";
import Abhishek_Dubey from "../Assets/Img/Abhi.png";
import A_Motion_ from "../Assets/Img/A_Motion_.gif";
import { Card } from "./Card";
import TechStack from "./TechStack";
import SkillCard from "./SkillCard";
import GradeCard from "./GradeCard";
import Footer from "./Footer";
import CAD from "../Assets/Img/CAD.png";
import Fade from "react-reveal/Fade";

const LandingPage = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-6 hide-scrollbar">
        <p className="text-2xl  font-Roboto font-bold text-white">
          Abhishek Dubey
        </p>
        <img src={A_Motion_} alt="gif" width={120} />
      </div>
      <div className="flex gap-24 mb-28 mt-6 justify-center items-center">
        <Fade left>
          <div>
            <img
              src={Abhishek_Dubey}
              alt="Abhishek_Dubey"
              width={350}
              className="border-solid border-4 border-stone-800 shadow-2xl shadow-amber-600 "
            />
          </div>
        </Fade>
        <Fade right>
          <div className="flex flex-col justify-center gap-6">
            <p className="font-light  text-7xl text-white">
              Hey <span className="text-7xl">People!</span>
            </p>
            <p className="font-light text-6xl text-white">
              This is{" "}
              <span className="text-6xl font-Roboto font-bold text-amber-600">
                Abhishek Dubey
              </span>
              ,
            </p>
            <p className="text-white text-5xl font-light">A Web Maestro💫</p>
          </div>
        </Fade>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <Fade right>
          <p className="text-white font-light text-6xl">
            About <span className="text-amber-600 font-light text-6xl">Me</span>
          </p>
        </Fade>
        <Fade left>
          <p className="text-white text-xl w-[80%] px-16 py-8 text-center">
            I'm a 2nd Year B.Tech Student of SRM Institute of Science And
            Technology, pursuing Computer Science and Engineering. I'm an
            explorer and a keen learner, looking for new experiences and
            innovation. In love with writing and creating some enticing content.
            Blending the code with creativity to make some beautiful websites.
            Looking forward for Blockchain development and competitive coding.
          </p>
        </Fade>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center">
        <Fade left>
          <p className="text-6xl text-white font-thin py-10">
            Tech
            <span className="text-amber-600 font-light text-6xl"> Stack</span>
          </p>
        </Fade>
        <div className="flex flex-wrap gap-24 px-20 justify-center">
          <Fade right>
            <TechStack
              title="C Programming"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQINBlL4kEKc7pka-r04fKAZsvY6n_CgAXD8UBvOQ8awIe-kyzSU3y5eEbmAXoeqfW_N4&usqp=CAU"
            />
            <TechStack
              title="C++ Programming"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQLKmLzEqBJn0CY7CPo6URc0rg6fwjT2LwTzwmsJhVjz1J7wR0qg_5wWbLfCQPE60dng&usqp=CAU"
            />
            <TechStack
              title="HTML"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCSkY_CB-m2rnEsFpKMWJcQyg5ZQuAKDjQhLpDDZqa3XtuZGA3LqPn2s5aohHKFuwsI0&usqp=CAU"
            />
            <TechStack
              title="CSS"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPOOOTBy_UpUTZ6lt9xBAL-r47gVTtvHxwE4WVQR2Ba9xp6VU9OxsXFW9CEIJ9DBu184&usqp=CAU"
            />
            <TechStack
              title="Javascript"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVttzoVgQl-AZ1MzKC_v_H4mF5-Mw8YdBL87Og8_qGmxyP0i2h3WeMKfH-2QC0kJ7kcs&usqp=CAU"
            />
            <TechStack
              title="Bootstrap"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXn7_UzCGI-qDorXLDQNlcbNermKIXcE55VwdxgIPwHreSNTYB0F1jm5MeeLPmJKhSxM&usqp=CAU"
            />
            <TechStack
              title="Tailwind Css"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqNMyaMm9JDFNn3eVGBCB0AZt9ShK0HVcEOIuUXwn2-gp4g33I2zCQGBDhR1OlS2YzTw&usqp=CAU"
            />
            <TechStack
              title="React Js"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR045MOPskiBF1v85HPVRs8ufbNb48Cd4v10nYdxMQQcVWDHALWheVdaNIa5OLt7qTNy1M&usqp=CAU"
            />
            <TechStack
              title="Next Js"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0mZZs9NndYiVkINsVDZV9TW9kPYqk3yp2zZqLRN1HNmN1kr1sCngAYSfZ07UoPGgN10&usqp=CAU"
            />
            <TechStack
              title="Node Js"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7u-Ov-Vmlk9gIzrfCdqUIJgmgjFka0TFCKH6rEnmXrwS7OL5aJsVw8v4j1KxNAAFA6h4&usqp=CAU"
            />
          </Fade>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center my-10">
        <Fade left>
          <p className="text-6xl text-white font-thin py-10">
            Skill
            <span className="text-amber-600 font-light text-6xl">Set</span>
          </p>
        </Fade>
        <div className="flex gap-28 flex-wrap">
          <Fade right>
            <SkillCard
              title="Web Development"
              imageUrl="https://cdn.dribbble.com/users/2069402/screenshots/5574718/gif-4mb.gif"
              content="I'm a front-end developer and love making beautiful sites. It seems pleasantful to me as it allows my creativity to flow with the power of the code. Moving forth, paving the path of backend development."
            />
            <SkillCard
              title="Competitve Coding"
              imageUrl="https://c.tenor.com/2uyENRmiUt0AAAAM/coding.gif"
              Platform="HackerRank"
              PlatformLink="https://www.hackerrank.com/ad8287"
              content="Competitive coding is something at which I'm looking forward to excel and explore the dynamic world of  programming. Click on Hackerrank text to check my hackerrank profile which is a work in progress."
            />
            <SkillCard
              title="Content Writing"
              imageUrl="https://thumbs.gfycat.com/MelodicPointlessHogget-max-1mb.gif"
              content="It's just amazing to express the magic of words in our own way and to present it more beautifully. I'm a content writer and it allows me to express my feelings freely, at the same time provides me with the leverage of writing and exploring the world of technology also. "
            />
          </Fade>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center my-10">
        <Fade left>
          <p className="text-6xl text-white font-thin py-10">
            Intern
            <span className="text-amber-600 font-light text-6xl">ships</span>
          </p>
        </Fade>
        <div>
          <Fade right>
            <img
              src="https://blogs.constantcontact.com/wp-content/uploads/2014/01/FindingYourBusiness.png"
              alt="intern"
              width={900}
            />
          </Fade>
        </div>
        {/* <div className="flex gap-28 flex-wrap">
          <Card
            title="Plaboy.com"
            imageUrl="https://www.corpstore.in/blog/wp-content/uploads/2019/09/stage-company.jpg"
            btnTitle="View Company"
            btnLink="/"
          />
          <Card
            title="Microsoft.com"
            imageUrl="https://m.economictimes.com/thumb/msid-76695421,width-1200,height-900,resizemode-4,imgsize-228666/microsoft.jpg"
            btnTitle="View Company"
            btnLink="/"
          />
          <Card
            title="Adobe.com"
            imageUrl="https://i0.wp.com/jobsmilega.com/wp-content/uploads/2019/11/ADBE-Adobe-Systems.jpg"
            btnTitle="View Company"
            btnLink="/"
          />
        </div> */}
      </div>

      <div className="flex flex-col gap-8 items-center my-10">
        <Fade left>
          <p className="text-6xl text-white font-thin py-10">
            Proj
            <span className="text-amber-600 font-light text-6xl">ects</span>
          </p>
        </Fade>
        <div className="flex gap-28 flex-wrap">
          <Fade right>
            <Card
              title="Ctrl Alt Delete"
              imageUrl={CAD}
              btnTitle="View Project"
              btnLink="https://hackathon-website-sandy.vercel.app/"
              content="Ctrl Alt Delete is a hackathon site which is made by me and my club mates of Coding Ninjas Club SRM. Visit my Github Profile for upcoming projects."
            />
            <Card
              title="Netflix Clone"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlY2dejgtzP0TzCqGj_GGJt2g242KBrzptIZQfoHonX1gSvvqUGKkGF0uxk2dgsn_6Eo&usqp=CAU"
              btnTitle="View Project"
              btnLink="https://netflixclone7.netlify.app/"
              content="It is a netflix clone using dynamic Apis and different functionalities of React.Js. Visit my Github Profile for upcoming projects."
            />
            <Card
              title="Musicane"
              imageUrl="https://assets.materialup.com/uploads/b731ff63-6902-4d6b-b920-75019fd29bfe/preview.png"
              btnTitle="View Project"
              btnLink="https://musicane.netlify.app"
              content="Musicane is a basic javascript music player, made it just for testing. Visit my Github Profile for upcoming projects."
            />
          </Fade>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center mb-10">
        <Fade left>
          <p className="text-6xl text-white font-thin py-10">
            Gra
            <span className="text-amber-600 font-light text-6xl">des</span>
          </p>
        </Fade>
        <div className="flex gap-28 flex-wrap">
          <Fade right>
            <GradeCard
              imageUrl="https://thumbs.gfycat.com/CluelessSparklingFattaileddunnart-size_restricted.gif"
              year="1st"
              cgpa="10.0"
            />
            <GradeCard
              imageUrl="https://thumbs.gfycat.com/CluelessSparklingFattaileddunnart-size_restricted.gif"
              year="12th"
              cgpa="85%"
            />
            <GradeCard
              imageUrl="https://thumbs.gfycat.com/CluelessSparklingFattaileddunnart-size_restricted.gif"
              year="10th"
              cgpa="91%"
            />
          </Fade>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
