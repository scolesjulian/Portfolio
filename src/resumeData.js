import express from "./express.png";
import cssLogo from "./css-logo.png";
import typescript from "./typescript.png";
import reactnative from "./reactnative.png";
import mysql from "./mysql.png";
import mongodb from "./mongodb.png";
import sass from "./sass.png";
import figma from "./figma.png";
import teams from "./teams.png";


let resumeData = {
    "name": "Julián Scoles",
    "role": "Desarrollador Full Stack ",
    "linkedinId":"scolesjulian1",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/scolesjulian1/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"https://github.com/scolesjulian",
          "className":"fa fa-github"
        }
      ],
    "aboutme":"Soy un desarrollador full stack que actualmente reside en Argentina. Me inicié en el mundo de la programación de manera autodidacta y realicé varios cursos intensivos sobre las tecnologías que mas me interesan.",
    "aboutme2":"Soy una persona con disciplina, persistencia y actitud que busca sumar experiencia en el sector IT, que disfruta del trabajo en equipo y la resolución de problemas. Me encuentro en búsqueda de nuevos desafíos, estoy abierto a todas las oportunidades que me permitan crecer y seguir capacitándome. ",
    "address":"Argentina",
    "website":"link del portfolio deployado",
    "skills":[
      {
        "skillname":"HTML5",
        "img":"https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
      },
      {
        "skillname":"CSS",
        "img": cssLogo
      },
      {
        "skillname":"Sass",
        "img": sass
      },
      {
        "skillname":"JavaScript",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
      },
      {
        "skillname":"Typescript",
        "img":typescript
      },
      {
        "skillname":"React",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png"
      },
      {
        "skillname":"ReactNative",
        "img":reactnative
      },
      {
        "skillname":"Redux",
        "img":"https://nightdeveloper.net/wp-content/uploads/2018/01/logo.png"
      },
      {
        "skillname":"NodeJS",
        "img":"https://ugeek.github.io/blog/images-blog/node.png"
      },
      {
        "skillname":"ExpressJS",
        "img": express
      },
      {
        "skillname":"MySql",
        "img": mysql
      },
      {
        "skillname":"MongoDB",
        "img": mongodb
      },
      {
        "skillname":"Figma",
        "img": figma
      },
      {
        "skillname":"Teams",
        "img": teams
      },
      {
        "skillname":"Git",
        "img":"https://miro.medium.com/max/650/1*zzvdRmHGGXONZpuQ2FeqsQ.png"
      },    
    ],
    "portfolio":[
      {
        "name":"SURF POINT LINKS",
        "description":"Pagina web en la que puedes iniciar sesión y guardar tus links de videos de tus olas preferidas para practicar surf.",
        "imgurl":"https://camo.githubusercontent.com/edcccecfd3e8a7b4aaee66796dcc462f44b7e354b4a178adde9a759cd735b286/68747470733a2f2f692e706f7374696d672e63632f503547586d7274372f53637265656e2d537572662d506f696e742d4c696e6b2d4e6f64652d4769746875622e706e67",
        "deploy":"https://github.com/scolesjulian/SurfPointLinks-NodeJs-Mysql"
      },
      {
        "name":"WHEATHERAPP",
        "description":"Pagina web que muestra el clima de varias ciudades en vivo, consume una api. Esta realizada con Html y Css.",
        "imgurl":"https://i.postimg.cc/mrJTVL4J/Screen-Clima-Github.png",
        "deploy":"https://github.com/scolesjulian/Wheather-Finder"
      },
     
    ],
}
  
export default resumeData