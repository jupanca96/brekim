//import { swiperValueprops } from "./swiper";
//import { Ajaxinate } from "ajaxinate";

import { productCard } from "./components/product-cards";
import { sideCart } from "./components/sidecart";
import { apiCarrito } from "./components/api_carrito";


document.addEventListener("DOMContentLoaded", function() {
    sideCart();
    productCard();    
});

apiCarrito();

