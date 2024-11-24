$(document).ready(function(){
    $("#send").click(function(){
        alert('Terima Kasih atas pertanyaannya!');
    });
});

var collapsed = document.querySelector('.navbar-toggler');
var show = document.querySelector('.collapse');
var run = document.getElementsByClassName('nav-link');

for(var i = 0; i < run.length; i++){
    run[i].addEventListener('click', function(){
        collapsed.classList.add('collapsed');
        show.classList.remove('show');
    });
};

const products = [
    { id: 1, image: "img/1.jpg" },
    { id: 2, image: "img/2.jpg" },
    { id: 3, image: "img/3.jpg" },
    { id: 4, image: "img/4.jpg" },
    { id: 5, image: "img/5.jpg" },
    { id: 6, image: "img/6.jpg" },
    { id: 7, image: "img/7.jpg" },
    { id: 8, image: "img/8.jpg" },
    { id: 9, image: "img/9.jpg" },
    { id: 10, image: "img/10.jpg" },
    { id: 11, image: "img/11.jpg" },
    { id: 12, image: "img/12.jpg" },
    { id: 13, image: "img/13.jpg" },
    { id: 14, image: "img/14.jpg" },
    { id: 15, image: "img/15.jpg" },
    { id: 16, image: "img/16.jpg" },
    { id: 17, image: "img/17.jpg" },
    { id: 18, image: "img/18.jpg" },
    { id: 19, image: "img/19.jpg" },
    { id: 20, image: "img/20.jpg" },
    { id: 21, image: "img/21.jpg" },
    { id: 22, image: "img/22.jpg" },
    { id: 23, image: "img/23.jpg" },
    { id: 24, image: "img/24.jpg" },
    { id: 25, image: "img/25.jpg" },
    { id: 26, image: "img/26.jpg" },
    { id: 27, image: "img/27.jpg" },
    { id: 28, image: "img/28.jpg" },
    { id: 29, image: "img/29.jpg" },
    { id: 30, image: "img/30.jpg" },
    { id: 31, image: "img/31.jpg" },
    { id: 32, image: "img/32.jpg" },
    { id: 33, image: "img/33.jpg" },
    { id: 34, image: "img/34.jpg" },
    { id: 35, image: "img/35.jpg" },
    { id: 36, image: "img/36.jpg" },
    { id: 37, image: "img/37.jpg" },
    { id: 38, image: "img/38.jpg" },
    { id: 39, image: "img/39.jpg" },
    { id: 40, image: "img/40.jpg" },
    { id: 41, image: "img/41.jpg" },
    { id: 42, image: "img/42.jpg" },
    { id: 43, image: "img/43.jpg" },
    { id: 44, image: "img/44.jpg" },
    { id: 45, image: "img/45.jpg" },
    { id: 46, image: "img/46.jpg" },
    { id: 47, image: "img/47.jpg" },
    { id: 48, image: "img/48.jpg" },
    { id: 49, image: "img/49.jpg" },
    { id: 50, image: "img/50.jpg" },
];

// Jumlah produk per halaman
const itemsPerPage = 9;
let currentPage = 1;

// Fungsi untuk menampilkan produk berdasarkan halaman
function renderProducts(page) {
    const productGallery = document.getElementById("product-gallery");
    productGallery.innerHTML = ""; // Bersihkan produk sebelumnya

    // Hitung indeks awal dan akhir
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Ambil produk untuk halaman saat ini
    const paginatedProducts = products.slice(startIndex, endIndex);

    // Render produk ke dalam HTML
    paginatedProducts.forEach((product) => {
        const productHTML = `
            <div class="col-lg-4 col-md-6">
                <div class="border rounded mb-4 shadow-sm">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                </div>
            </div>
        `;
        productGallery.insertAdjacentHTML("beforeend", productHTML);
    });
}

// Fungsi untuk menampilkan tombol pagination
function renderPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ""; // Bersihkan pagination sebelumnya

    // Hitung jumlah halaman
    const totalPages = Math.ceil(products.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const paginationButton = `
            <li class="page-item ${i === currentPage ? "active" : ""}">
                <a class="page-link" href="#">${i}</a>
            </li>
        `;
        pagination.insertAdjacentHTML("beforeend", paginationButton);
    }

    // Tambahkan event listener untuk tombol pagination
    document.querySelectorAll("#pagination .page-link").forEach((button, index) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = index + 1;
            renderProducts(currentPage);
            renderPagination();
        });
    });
}

// Inisialisasi halaman pertama
renderProducts(currentPage);
renderPagination();