'use strict';

import products from "./modules/products.js";
import header from "./modules/header.js";

const documentReady = () => {
  header();
  products();

};

document.addEventListener('DOMContentLoaded', documentReady);