import { isPropertyAccessOrQualifiedName } from "typescript";
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
      const colorSize = card.querySelectorAll('.swatch-size');
      const cartButton = card.querySelector('.buttonCart');
      const selectorSizeCart = card.querySelector('.swatches-size');

      selectorSizeCart.classList.add('swatches-size_hide');
      selectorSizeCart.classList.remove('swatches-size');

      cartButton.addEventListener('click', function(){
        cartButton.classList.add('buttonCart_hide');
        cartButton.classList.remove('buttonCart');

        selectorSizeCart.classList.add('swatches-size');
        selectorSizeCart.classList.remove('swatches-size_hide');
      });

      document.addEventListener('click', function(event){
        if(cartButton.classList.contains('buttonCart_hide') && !cartButton.contains(event.target) && !selectorSizeCart.contains(event.target)){
          cartButton.classList.add('buttonCart');
          cartButton.classList.remove('buttonCart_hide');        

          selectorSizeCart.classList.add('swatches-size_hide');
          selectorSizeCart.classList.remove('swatches-size'); 
        }               
      });      

      if(swatches.length > 0) {
        const firstVariant = swatches[0];
        const firstVariantId = firstVariant.getAttribute('data-variant-id');
        const firstImageId = firstVariant.getAttribute('data-variant-image');
        const firstColorId = firstVariant.getAttribute('data-variant-color');

        mainImage.setAttribute('src', firstImageId);
        variantIdInput.setAttribute('value', firstVariantId);

        const firstStyle = firstVariant.querySelector('.item_color-variant');
        firstStyle.classList.add('item_color-variant_selected');

        // const firstStyleSize = colorSize[0].querySelector('.item_size-variant');
        // firstStyleSize.classList.add('item_size-variant_decor')

        colorSize.forEach(element =>{
          if(element.getAttribute('data-variant2-color') === firstColorId){
            const firstStyleSize = element.querySelector('.item_size-variant');
            firstStyleSize.classList.remove('item_size-variant');
            firstStyleSize.classList.add('item_size-variant_selected');
          };
        });       
      };

      colorSize.forEach(element => {
        element.addEventListener('click', function() {
          const variantId = element.getAttribute('data-variant2-id');
          variantIdInput.setAttribute('value', variantId);

          const previousSelected = card.querySelector('.item_size-variant_decor');
          if (previousSelected){
            previousSelected.classList.remove('item_size-variant_decor');
          }

          const swatchP = element.querySelector('.item_size-variant_selected');
          swatchP.classList.add('item_size-variant_decor');

        })
      });
      

      swatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
          const variantImage = swatch.getAttribute('data-variant-image');
          const variantColor = swatch.getAttribute('data-variant-color');

          mainImage.setAttribute('src', variantImage);           

          const previousSelected = card.querySelector('.item_color-variant_selected');
          if (previousSelected){
            previousSelected.classList.remove('item_color-variant_selected');
          }

          const swatchP = swatch.querySelector('.item_color-variant');
          swatchP.classList.add('item_color-variant_selected'); 

          const previousSelectedSize = card.querySelectorAll('.item_size-variant_selected');
          previousSelectedSize.forEach(element =>{
            element.classList.add('item_size-variant');
            element.classList.remove('item_size-variant_selected');
          });         

          colorSize.forEach(element => {
            if(element.getAttribute('data-variant2-color') === variantColor){
              const firstStyleSize = element.querySelector('.item_size-variant');
              firstStyleSize.classList.remove('item_size-variant');
              firstStyleSize.classList.add('item_size-variant_selected');
            };
          });                       
        });        
      });

    });

    //Js para side-cart

    //Abrir carrito desde cta
    const buttonCart = document.querySelector(".img_cart");     
    
      buttonCart.addEventListener('click', function(event){
        const sideCart = document.querySelector(".cart-drawer_hide");       
        sideCart.classList.remove('cart-drawer_hide');
        sideCart.classList.add('cart-drawer');  
        
        event.stopPropagation();
      });

    //Cerrar carrito dando clic afuera de el
      // document.addEventListener('click', function(event){ 
      //   const sideCart = document.querySelector(".cart-drawer");
      //   if(sideCart && !sideCart.contains(event.target)){
      //     sideCart.classList.remove('cart-drawer');
      //     sideCart.classList.add('cart-drawer_hide');
      //   }               
      // });    

    // slider para value props home
    //swiperValueprops();

});