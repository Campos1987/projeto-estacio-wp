import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import SelectPage from './function/page';

import Logo from './componentes/Logo';
import './style.css';

import PyStruct from './json/py.json';
import JsStruct from './json/js.json';
import Category from './componentes/Category';

const page = SelectPage();
const struct = page === 'py' ? PyStruct.phyton : JsStruct.javascript;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Logo link={page} />
      <Category link={struct} />
    </BrowserRouter>
  </StrictMode>,
);
