import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi, I'm Kyle</h1>
        <p>I'm a software engineer with a passion for creating beautiful and</p>
        <a href="mailto:kylectrent@gmail.com">Contact Me</a>
      </div>
      <img src={getImageUrl('hero/heroImage.PNG')} />
    </section>
  );
};
