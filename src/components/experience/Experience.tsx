import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        <div>
          {skills.map((skill) => 
            <div>
              {skill.title}
              <img src={getImageUrl(skill.imageSrc)}/>
            </div>
          )}
        </div>
        <ul></ul>
      </div>
    </section>
  );
};
