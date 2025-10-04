import Styles from './Logo.module.css';

type LogoProp = {
  link: string;
};

const Logo = ({ link }: LogoProp) => {
  const page = link;
  let title = 'Estacio TI';
  title = page == 'py' ? 'Python' : title;
  title = page == 'js' ? 'JavaScript' : title;
  return (
    <div className={Styles.logo}>
      <img src={`./img/${page}.jpg`} />
      {title}
    </div>
  );
};

export default Logo;
