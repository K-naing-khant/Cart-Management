// Variables //
const productList = document.querySelector('#productList');
const productModal = document.querySelector('#productModal');
const showProductModal = new bootstrap.Modal('#productModal');


// Function //
const stars = (num) => {
  let result = '';

  for(let i = 1; i <= 5; i++) {
    if(Math.floor(num) >= i) {
      result += '<i class="bi bi-star-fill"></i>';
    } else {
      result += '<i class="bi bi-star"></i>';
    }
  }
  return result;
}

const createCard = (product) => {
  const div = document.createElement('div');
  div.className = "col-12 col-md-6 col-lg-4";
  div.innerHTML = `
  <div class="card">
    <div class="card-thumbnail">
      <img src="${product.thumbnail}" alt="">
    </div>
    <div class="card-body">
      <h5 class="mb-3 fw-bold">${product.title}</h5>
      <div class="d-flex justify-content-between mb-3">
        <div class="badge bg-dark">${product.category}</div>
        <div class="stars">
          ${stars(product.rating)}
        </div>
      </div>
      <div class="desc text-truncate">
        ${product.description}
      </div>
      <hr>
      <div class="d-flex justify-content-between align-items-center">
        <div class="fw-bold">$ <span class="cost">${product.price}</span></div>
        <button class="btn btn-outline-dark">Add To Cart</button>
      </div>
    </div>
  </div>
  `;

  div.addEventListener('click', showProductDetailModal.bind(null, product)); //addEventListener doesn't have parameter passing

  return div;
}

const showProductDetailModal = (x) => {
  // console.log(x);
  productModal.querySelector('#productModalLabel').innerText = x.title;
  productModal.querySelector('.modalBox-img').src = x.thumbnail;
  productModal.querySelector('.modalBox-desc').innerText = x.description;
  showProductModal.show();
}


// Process //
products.forEach((product) => {
  // console.log(product);
  productList.append(createCard(product));
})