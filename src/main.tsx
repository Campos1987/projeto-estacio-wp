import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import SelectPage from './function/page';

import Logo from './componentes/Logo';
import './style.css';

import PyStruct from './json/py.json';
import JsStruct from './json/js.json';
import FeStruct from './json/fe.json';
import defaultStruct from './json/default.json';
import Category from './componentes/Category';

const page = SelectPage();
let struct = defaultStruct.estacioTi;
struct = page === 'py' ? PyStruct.phyton : struct;
struct = page === 'js' ? JsStruct.javascript : struct;
struct = page === 'fe' ? FeStruct.frontend : struct;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Logo link={page} />
    <Category link={struct} />
  </StrictMode>,
);
