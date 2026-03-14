// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 300px from the top, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top
mybutton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Inside your navbar.js, after innerHTML injection:
const authModalEl = document.getElementById('authModal');
if (authModalEl) {
    new bootstrap.Modal(authModalEl);
}
document.addEventListener('DOMContentLoaded', () => {
    updateOrderSummary(); // Initial calculation on load

    document.addEventListener('click', function (e) {
        // Handle Plus/Minus
        const isPlus = e.target.closest('.btn-plus');
        const isMinus = e.target.closest('.btn-minus');
        const isRemove = e.target.closest('.btn-remove');

        if (isPlus || isMinus) {
            const row = e.target.closest('.cart-item-row');
            const qtyDisplay = row.querySelector('.qty-value');
            const itemTotalDisplay = row.querySelector('.item-total-display');
            const unitPrice = parseInt(row.getAttribute('data-price'));
            let currentQty = parseInt(qtyDisplay.innerText);

            if (isPlus) currentQty++;
            else if (isMinus && currentQty > 1) currentQty--;

            qtyDisplay.innerText = currentQty;
            itemTotalDisplay.innerText = `₹${(unitPrice * currentQty).toLocaleString('en-IN')}`;
            updateOrderSummary();
        }

        // Handle Remove
        if (isRemove) {
            if(confirm("Remove this item from your Cart?")) {
                e.target.closest('.cart-item-row').remove();
                updateOrderSummary();
            }
        }
    });

    function updateOrderSummary() {
    let subtotal = 0;
    const rows = document.querySelectorAll('.cart-item-row');
    
    rows.forEach(row => {
        const price = parseInt(row.getAttribute('data-price'));
        const qty = parseInt(row.querySelector('.qty-value').innerText);
        subtotal += (price * qty);
    });

    const discount = rows.length > 0 ? 5000 : 0; 
    const gst = Math.round(subtotal * 0.18);
    const finalTotal = subtotal + gst - discount;

    // Helper to format currency
    const format = (num) => `₹${(num > 0 ? num : 0).toLocaleString('en-IN')}`;

    // Update ALL Final Totals (Mobile Bar + Desktop Sidebar)
    document.querySelectorAll('.final-total').forEach(el => {
        el.innerText = format(finalTotal);
    });

    // Update ALL Subtotals (In Sidebar + In Mobile Drop-up)
    document.querySelectorAll('.bag-total').forEach(el => {
        el.innerText = format(subtotal);
    });

    // Update ALL GST amounts (In Sidebar + In Mobile Drop-up)
    document.querySelectorAll('.gst-amount').forEach(el => {
        el.innerText = format(gst);
    });
}
});