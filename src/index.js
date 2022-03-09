
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox'
ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter>
  <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
    </BrowserRouter>

</React.StrictMode>,
  document.getElementById('root')
);


