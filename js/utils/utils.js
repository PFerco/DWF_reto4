export const renderProducts = (data) => {
  const productsContainer = document.getElementById('productsContainer');
  productsContainer.innerHTML = '';


  data.forEach((element) => {
    const { id, title, price, description, category, image } = element;
    // const { id, title, price, species, type, gender, origin, location, image } = element;


    productsContainer.innerHTML += `
      <div class="col-md-4" key=${id}>
        <div class="card bg-dark border border-2 border-light border-opacity-25 h-100 mx-auto"
          style="width: min(100%, 18rem);">
          <div class="card-header text-center">
            ${title}
          </div>
          <div class="card-body">
            <img src="${image}" class="card-img-top" alt="Anime 1" width="256" height="144"
              style="width: 100%; height: 192px; object-fit: cover; border-radius: 0.5rem"/>
            <h5 class="card-title mt-2">${title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${type || 'Chanchito'}</h6>
            <p class="card-text">
              <span class="badge text-bg-info">${price}</span>
              <span class="badge text-bg-primary">${category}</span>
            </p>
          </div>
          <div class="card-footer text-center">
            <a href="${image}" target="_blank" rel="noopener noreferrer" class="card-link">Descargar imagen</a>
          </div>
        </div>
      </div>
    `;
  });
};

// 1// export const fetchReadProducts = async (page=1, title='') => {
//   export const fetchReadProducts = async () => {

//   try {
//     const { data } = await axios.get(`https://fakestoreapi.com/products/`);
//     1// const { data } = await axios.get(`https://fakestoreapi.com/products/?page=${page}&name=${title}`);

//     1// const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`);

//     return data.results;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     window.scrollTo(0, 0);
//   }
// };

export const fetchReadProducts = async (page) => {
  // export const fetchReadProducts = async (page) => {

  try {
    // const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    const { data } = await axios.get(`https://fakestoreapi.com/products/products?page=${page}`);

    renderProducts(data.results);
  } catch (error) {
    console.log(error);
  } finally {
    window.scrollTo(0, 0);
    console.log('fetchRead');
  }
};