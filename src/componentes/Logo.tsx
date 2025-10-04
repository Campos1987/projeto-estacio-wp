import Styles from './Logo.module.css';

type LogoProp = {
  link: string;
};

const Logo = ({ link }: LogoProp) => {
  const page = link;
  const title = page == 'py' ? 'Python' : 'JavaScript';
  return (
    <div className={Styles.logo}>
      <img src={`./img/${page}.jpg`} />
      {title}
    </div>
  );
};

export default Logo;
