import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'CodingQuiz',
      description: 'Express.js, MSQL, ORM',
      link: "https://brandonchristopherlopez.github.io/coding-quiz/",
      repo: "https://github.com/brandonchristopherlopez/coding-quiz"
    },
    {
      name: 'SocialMediaManagementClient',
      description: 'HTML, CSS, and JS',
      link: "https://brandonchristopherlopez.github.io/Horiseon-Social-Media-Management/",
      repo: "https://github.com/brandonchristopherlopez/Horiseon-Social-Media-Management"
    },
    {
      name: 'DayPlanner',
      description: 'HTML/CSS',
      link: "https://brandonchristopherlopez.github.io/DayPlanner/",
      repo: "https://github.com/brandonchristopherlopez/DayPlanner"
    },
    {
      name: 'WeatherDash',
      description: 'Node/IoT',
      link: "https://brandonchristopherlopez.github.io/Challenge-6-Weather-Dash/",
      repo: "https://github.com/brandonchristopherlopez/Challenge-6-Weather-Dash"
    },
    {
      name: 'TechBlog',
      description: 'Heroku/Node JS/MYSQL',
      link: "https://brandons-tech-blog-83189e0dc167.herokuapp.com/",
      repo: "https://github.com/brandonchristopherlopez/Tech-Blog"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
