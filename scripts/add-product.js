  let productHTML = '';
  let product = `<div class="col-lg-4 col-md-6 col-12">
  <div class="card h-100 border-0 shadow-sm bg-dark text-white overflow-hidden product-card">
    
    <div class="position-relative">
      <span class="badge bg-danger position-absolute mt-2 ms-2">sale</span>
      
      <button class="btn btn-sm btn-light position-absolute end-0 mt-2 me-2 rounded-circle shadow-sm">
        <i class="bi bi-heart text-danger"></i>
      </button>

      <img src="images/home-appliences/pic2.jpg" class="card-img-top p-4 mt-4" alt="Product Name" style="height: 250px; object-fit: contain;">
    </div>

    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <small class="text-info fw-bold"><i class="bi bi-patch-check-fill me-1"></i> Samsung</small>
        <small class="text-warning">
          <i class="bi bi-star-fill"></i> 4.5
        </small>
      </div>

      <h5 class="card-title mb-1">Double Door Refrigerator</h5>
      
      <div class="d-flex gap-3 my-2 text-secondary small">
        <span><i class="bi bi-lightning-charge text-primary"></i> 5-Star</span>
        <span><i class="bi bi-snow text-info"></i> Inverter</span>
        <span><i class="bi bi-box-seam"></i> 250L</span>
      </div>

      <p class="card-text text-secondary small flex-grow-1">
        Energy-efficient cooling with digital inverter technology. Perfect for modern kitchens.
      </p>

      <div class="d-flex align-items-center my-3">
        <span class="fs-4 fw-bold me-2 text-info">₹24,999</span>
        <span class="text-secondary text-decoration-line-through small">₹29,999</span>
      </div>

      <div class="d-grid gap-2 mt-auto">
        <button class="btn btn-primary fw-bold" type="button">
          <i class="bi bi-cart-plus me-2"></i>Add to Cart
        </button>
        <button class="btn btn-outline-light btn-sm" type="button">
          <i class="bi bi-eye me-2"></i>View Details
        </button>
      </div>
    </div>
  </div>
</div>`;

      for(let i=1; i<=10; i++)
      {
        productHTML += product;
      }

      document.getElementById('productHolder').innerHTML += productHTML;
