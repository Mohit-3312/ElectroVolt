const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0">
  <div class="container-fluid">
    <p class="navbar-brand text-light fs-3 ps-2 mt-3 py-lg-0" style="cursor: default;">
      Electro<span class="text-info">Volt</span>
    </p>

    <div class="d-none d-lg-block mx-auto" style="width: 35%;">
      <div class="input-group">
        <span class="input-group-text bg-transparent border-secondary text-secondary">
          <i class="bi bi-search"></i>
        </span>
        <input type="text" class="form-control bg-dark text-white border-secondary shadow-none" 
               placeholder="Search products, brands..." id="desktopSearchInput">
        <button class="btn btn-info fw-bold">Search</button>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <button class="btn text-white border-0 d-lg-none me-2 shadow-none" type="button" 
              data-bs-toggle="collapse" data-bs-target="#searchBarCollapse">
        <i class="bi bi-search fs-5 search-icon-btn"></i>
      </button>
      
      <button class="navbar-toggler border-0 shadow-none" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 fs-5 pe-3">
        <li class="nav-item">
          <a class="nav-link active text-light rounded-4" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light rounded-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu dropdown-menu-dark bg-dark mx-auto my-0 shadow-lg">
            <li><a class="dropdown-item" href="home-appliances.html">Home Appliances</a></li>
            <li><a class="dropdown-item" href="mobile.html">Mobile</a></li>
            <li><a class="dropdown-item" href="laptop.html">Laptop</a></li>
            <li><a class="dropdown-item" href="smartwatch.html">Smartwatch</a></li>
            <li><a class="dropdown-item" href="camera.html">Camera</a></li>
            <li><a class="dropdown-item" href="gaming-gadget.html">Gaming Gadgets</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light rounded-4" href="order.html">Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light rounded-4" href="about-us.html">About Us</a>
        </li>
      </ul>
      <button type="button" class="btn btn-outline-light mt-lg-0 mt-3 px-4">Sign Up</button>
    </div>
  </div>
</nav>

<div class="collapse bg-black border-bottom border-secondary d-lg-none" id="searchBarCollapse">
  <div class="container py-3">
    <div class="input-group">
      <span class="input-group-text bg-transparent border-info text-info">
        <i class="bi bi-search"></i>
      </span>
      <input type="text" class="form-control bg-dark text-white border-info shadow-none" 
             placeholder="Search tech..." id="navSearchInput">
      <button class="btn btn-info fw-bold" type="button">SEARCH</button>
      <button class="btn btn-outline-secondary ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#searchBarCollapse">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  </div>
</div>
`;

// Inject the HTML
document.getElementById('navbar-holder').innerHTML = navbarHTML;

