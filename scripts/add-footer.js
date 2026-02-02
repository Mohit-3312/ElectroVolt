const footerHTML = `
  <footer class="bg-black text-white py-5 border-top border-secondary mt-5">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-4 col-md-6">
                <h4 class="fw-bold text-info mb-3">ELECTRO<span class="text-white">VOLT</span></h4>
                <p class="text-secondary small">Your ultimate destination for high-voltage tech. From gaming rigs to smart home appliances, we power your lifestyle.</p>
                <div class="d-flex gap-3 mt-4">
                    <a href="#" class="text-secondary fs-5"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="text-secondary fs-5"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="text-secondary fs-5"><i class="bi bi-twitter-x"></i></a>
                    <a href="#" class="text-secondary fs-5"><i class="bi bi-youtube"></i></a>
                </div>
            </div>

            <div class="col-lg-2 col-md-6">
                <h6 class="fw-bold mb-3">Categories</h6>
                <ul class="list-unstyled small text-secondary">
                    <li class="mb-2"><a href="laptop.html" class="text-decoration-none text-secondary">Laptops</a></li>
                    <li class="mb-2"><a href="home-appliances.html" class="text-decoration-none text-secondary">Home Appliances</a></li>
                    <li class="mb-2"><a href="mobile.html" class="text-decoration-none text-secondary">Smartphones</a></li>
                    <li class="mb-2"><a href="gaming-gadget.html" class="text-decoration-none text-secondary">Gaming Gear</a></li>
                    <li class="mb-2"><a href="smartwatch.html" class="text-decoration-none text-secondary">Smartwatches</a></li>
                    <li class="mb-2"><a href="camera.html" class="text-decoration-none text-secondary">Camera</a></li>
                </ul>
            </div>

            <div class="col-lg-2 col-md-6">
                <h6 class="fw-bold mb-3">Support</h6>
                <ul class="list-unstyled small text-secondary">
                    <li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Order Tracking</a></li>
                    <li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Privacy Policy</a></li>
                    <li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Terms of Service</a></li>
                    <li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Warranty Info</a></li>
                </ul>
            </div>

            <div class="col-lg-4 col-md-6">
                <h6 class="fw-bold mb-3">Get in Touch</h6>
                <p class="small text-secondary mb-2"><i class="bi bi-geo-alt text-info me-2"></i> Junagadh / Jetpur</p>
                <p class="small text-secondary mb-2"><i class="bi bi-envelope text-info me-2"></i> electrovoltofficial@gmail.com</p>
                <p class="small text-secondary mb-4"><i class="bi bi-telephone text-info me-2"></i> +91 93160 54344</p>
                


        <hr class="my-5 border-secondary">

        <div class="d-flex justify-content-between align-items-center small text-secondary">
            <p class="mb-0 text-left">&copy; 2026 ElectroVolt. All Rights Reserved.</p>
            <p class="mb-0">Designed by <span class="text-info">Mohit,Dhruvit,Divyesh</span></p>
        </div>
    </div>
</footer>
`;

document.getElementById("footerHolder").innerHTML = footerHTML;