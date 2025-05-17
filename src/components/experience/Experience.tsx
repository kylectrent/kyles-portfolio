import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <a
        href="https://1drv.ms/w/c/5dd046f273d700f9/EQQejfl4KmlPvMhLT_-bEBoBdNeTYBk0jolvUNHD4QE2Cw?e=MoKApV"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        View My Resume
      </a>
      <div>
        <div>
          {skills.map((skill, id) => (
            <div key={id}>
              <div>
                {skill.title}
                <img src={getImageUrl(skill.imageSrc)} />
              </div>
            </div>
          ))}
        </div>
        <ul></ul>
      </div>
    </section>
  );
};
