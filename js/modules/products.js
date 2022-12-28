import { fetchReadProducts, renderProducts } from "../utils/utils.js";

const products = async () => {
  const previousProducts = document.getElementById('previousProducts');
  const nextProducts = document.getElementById('nextProducts');
  let page = 1;

  

  previousProducts.addEventListener('click', async () => {
    // const data = await fetchReadProducts(--page);
    const data = await fetchReadProducts();

    renderProducts(data);
  });

  nextProducts.addEventListener('click', async () => {
    // const data = await fetchReadProducts(++page);
    const data = await fetchReadProducts();

    renderProducts(data);
  });


  // const data = await fetchReadProducts(page);
  const data = await fetchReadProducts();

  renderProducts(data);

};

export default products;