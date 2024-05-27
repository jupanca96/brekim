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

      if(swatches.length > 0) {
        const firstVariant = swatches[0];
        const firstVariantId = firstVariant.getAttribute('data-variant-id');
        const firstImageId = firstVariant.getAttribute('data-variant-image');

        mainImage.setAttribute('src', firstImageId);
        variantIdInput.setAttribute('value', firstVariantId);

        const firstStyle = firstVariant.querySelector('.item_color-variant');
        firstStyle.classList.add('item_color-variant_selected');
      }
      

      swatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
          const variantImage = swatch.getAttribute('data-variant-image');
          const variantId = swatch.getAttribute('data-variant-id');

          const previousSelected = card.querySelector('.item_color-variant_selected');
          if (previousSelected){
            previousSelected.classList.remove('item_color-variant_selected');
          }

          const swatchP = swatch.querySelector('.item_color-variant');
          swatchP.classList.add('item_color-variant_selected');          

          mainImage.setAttribute('src', variantImage);
          variantIdInput.setAttribute('value', variantId);
        });        
      });
    });

    // slider para value props home
    //swiperValueprops();

  });