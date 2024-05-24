import { swiperValueprops } from "./swiper";

import { Ajaxinate } from "ajaxinate";


document.addEventListener("DOMContentLoaded", function() {

    // ajaxinate
    new Ajaxinate({
      container: '#AjaxinateContainer',
      pagination: '#AjaxinatePagination',
      method: 'click',
      loadingText: "Loading"
    });

    //En collection, para las porudct card podremos cambiar la imagen y el id dependiendo de la varainte

    const productCards = document.querySelectorAll('.product_card');

    productCards.forEach(card =>{
      const swatches = card.querySelectorAll('.swatch');
      const mainImage = card.querySelector('.main-image');
      const variantIdInput = card.querySelector('.variant-id');

      swatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
          const variantId = swatch.getAttribute('data-variant-id');
          const variantImage = swatch.getAttribute('data-variant-image');

        mainImage.setAttribute('src', variantImage);
        variantIdInput.setAttribute('value', variantId);
        });        
      });
    });

    // slider para value props home
    //swiperValueprops();

  });