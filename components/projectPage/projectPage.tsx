import React from 'react';
import Languages from './languages/Languages';
import style from './ProjectPage.module.scss';

function ProjectsPage() {
  return (
    <div className={style.descriptionContainer}>
      <h3 className={style.title}>
        <div className={style.star} />
        Vest
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
        <Languages />
        <div className={style.license}>Mozilla Public License 2.0</div>
      </div>
    </div>
  );
}

export default ProjectsPage;
