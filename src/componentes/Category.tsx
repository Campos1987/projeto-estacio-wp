import { Link } from 'react-router-dom';
import Styles from './Box.module.css';

type CategoryItem = {
  category: string;
  children?:
    | {
        key: string;
        label: string;
        url: string;
      }[];
};

type CategoryProp = {
  link: CategoryItem[];
};

const Category = ({ link }: CategoryProp) => {
  return link.map(item => (
    <li className={Styles.boxContent}>
      {item.category}
      <ul>
        <DropDown link={item.children} />
      </ul>
    </li>
  ));
};

type DropDownProp = {
  link?: {
    key: string;
    label: string;
    url: string;
  }[];
};

const DropDown = ({ link }: DropDownProp) => {
  if (!link) return null;

  return link.map(item => (
    <li key={item.key}>
      <Link to={item.url}>{item.label}</Link>
    </li>
  ));
};

export default Category;
