import { Link } from 'react-router-dom';

type BoxProp = {
  name: string;
  url: string;
};

const BoxContent = ({ name, url }: BoxProp) => {
  return <Link to={url}>{name}</Link>;
};

export default BoxContent;
