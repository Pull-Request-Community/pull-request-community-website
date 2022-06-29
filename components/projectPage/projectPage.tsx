import React from 'react';
import Technologies from './technologies/Technologies';
import style from './ProjectPage.module.scss';
import githubFullinfo from './ProjectPage.model';
/**
 *
 * @param FullInfo
 * @returns
 */
function ProjectsPage({ stars, license, languages, projectname }: githubFullinfo) {
  return (
    <div className={style.descriptionContainer}>
      <h3 className={style.title}>
        <div data-stars={stars} className={style.star} />
        {projectname}
      </h3>
      <p dir="auto" className={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ac orci phasellus egestas tellus rutrum tellus pellentesque
        eu tincidunt. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.
        Quam quisque id diam vel quam elementum pulvinar. Amet tellus cras adipiscing enim eu.
        Libero volutpat sed cras ornare arcu dui vivamus. Quisque egestas diam in arcu cursus
        euismod. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. In egestas erat
        imperdiet sed euismod nisi porta. Gravida in fermentum et sollicitudin ac orci phasellus
        egestas tellus.{' '}
      </p>

      <div className={style.infoContainer}>
        <Technologies lang={languages} />
        <div className={style.license}>{license}</div>
      </div>
    </div>
  );
}

export default ProjectsPage;
