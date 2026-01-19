const navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2 py-lg-0">
  <div class="container-fluid">
    <p class="navbar-brand text-light fs-3 mt-3" disabled>Electro<span class="text-primary">Volt</span></p>
    <form class="d-flex ps-3 gap-3" role="search">
        <input class="form-control m-auto " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0 gap-3 fs-5">
        <li class="nav-item">
          <a class="nav-link active text-light rounded-4 text-light" aria-current="page" href="index.html" >Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light rounded-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu dropdown-dark bg-dark mx-auto my-0">
            <li><a class="dropdown-item text-white " href="home-appliances.html">Home Appliances</a></li>
            <li><a class="dropdown-item text-white " href="mobile.html">Mobile</a></li>
            <li><a class="dropdown-item text-white " href="laptop.html">Laptop</a></li>
            <li><a class="dropdown-item text-white " href="smartwatch.html">Smartwatch</a></li>
            <li><a class="dropdown-item text-white " href="camera.html">Camera</a></li>
            <li><a class="dropdown-item text-white " href="gaming-gadget.html">Gaming Gadgets</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light rounded-4" href="order.html">Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light rounded-4" href="about-us.html">About Us</a>
        </li>
      </ul>
      <button type="button" class="btn btn-outline-light mt-lg-0 mt-3">Sign Up</button>
    </div>
  </div>
</nav>

`;

document.getElementById('navbar-holder').innerHTML = navbarHTML;