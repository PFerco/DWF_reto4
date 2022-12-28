import { fetchReadProducts, renderProducts } from "../utils/utils.js";


const header = () => {
  const searchForm = document.getElementById('searchForm');

  const searchProducts = async (e) => {
    e.preventDefault();
    const name = searchForm.name.value;
    const data = await fetchReadProducts(1);
    // const data = await fetchReadProducts(1, name);

    renderProducts(data);
  };

  searchForm.addEventListener('submit', searchProducts);
}

export default header;