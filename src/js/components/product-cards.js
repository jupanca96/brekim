const seleccionarColor = () => {
    // agregar todo lo relacionado a la seleccion de color
   // console.log("color")
}

const selectorTalla = () => {
    // agregar todo lo relacionada a la seleccion de tallas
   // console.log("talla")

}

export const productCard = () => {
    //En collection, para las porudct card podremos cambiar la imagen y el id dependiendo de la varainte
    const productCards = document.querySelectorAll('.product_card');
    if(productCards){
      productCards.forEach(card =>{
        const swatches = card.querySelectorAll('.swatch');
        const mainImage = card.querySelector('.main-image');
        const variantIdInput = card.querySelector('.variant-id'); 
        const colorSize = card.querySelectorAll('.swatch-size');
        const cartButton = card.querySelector('.buttonCart');
        const selectorSizeCart = card.querySelector('.swatches-size');

        //Oculta las pastillas de talla al iniciar la pagina
        selectorSizeCart.classList.add('swatches-size_hide');
        selectorSizeCart.classList.remove('swatches-size');
        //Funcion para click en add to cart y que muestre las variantes de talla
        cartButton.addEventListener('click', function(){
          cartButton.classList.add('buttonCart_hide');
          cartButton.classList.remove('buttonCart');

          selectorSizeCart.classList.add('swatches-size');
          selectorSizeCart.classList.remove('swatches-size_hide');
        });

        //Función para click fuera de las variantes de talla y que se muestre de nuevo el boton add to cart
        document.addEventListener('click', function(event){
          if(cartButton.classList.contains('buttonCart_hide') && !cartButton.contains(event.target) && !selectorSizeCart.contains(event.target)){
            cartButton.classList.add('buttonCart');
            cartButton.classList.remove('buttonCart_hide');        

            selectorSizeCart.classList.add('swatches-size_hide');
            selectorSizeCart.classList.remove('swatches-size'); 
          }               
        });      

        //Codigo para pintar las variantes
        if(swatches.length > 0) {
          const firstVariant = swatches[0];
          const firstVariantId = firstVariant.getAttribute('data-variant-id');
          const firstImageId = firstVariant.getAttribute('data-variant-image');
          const firstColorId = firstVariant.getAttribute('data-variant-color');

          //Poner las imagenes asociadas al color de la variante seleccionada
          mainImage.setAttribute('src', firstImageId);
          variantIdInput.setAttribute('value', firstVariantId);

          //Ponerle a la primera variante el estilo seleccionado
          const firstStyle = firstVariant.querySelector('.item_color-variant');
          firstStyle.classList.add('item_color-variant_selected');

          //Muestra las variantes de talla que estan ligadas al color seleccionado, les quita su clase ite_size-varaint que esta oculta
          colorSize.forEach(element =>{
            if(element.getAttribute('data-variant2-color') === firstColorId){
              const firstStyleSize = element.querySelector('.item_size-variant');
              firstStyleSize.classList.remove('item_size-variant');
              firstStyleSize.classList.add('item_size-variant_selected');
            };
          });       
        };

        //Click en la variante de talla para add to cart
        colorSize.forEach(element => {
          element.addEventListener('click', function() {
            //Poner el id de la variante que se agrega al carrito
            const variantId = element.getAttribute('data-variant2-id');
            variantIdInput.setAttribute('value', variantId);

            //Quitar la clase del elemento seleccionado
            // const previousSelected = card.querySelector('.item_size-variant_decor');
            // if (previousSelected){
            //   previousSelected.classList.remove('item_size-variant_decor');
            // }

            //Agrandar el elemento seleccionado al momento de dar click
            const swatchP = element.querySelector('.item_size-variant_selected');
            swatchP.classList.add('item_size-variant_decor');

          })
        });
        

        //Click en variante de color 
        swatches.forEach(swatch => {
          swatch.addEventListener('click', function() {
            //Obtener atributos de imagen y color
            const variantImage = swatch.getAttribute('data-variant-image');
            const variantColor = swatch.getAttribute('data-variant-color');

            //Fijar imagen segun color seleccionado
            mainImage.setAttribute('src', variantImage);           

            //Quitar seleccion al color anterior
            const previousSelected = card.querySelector('.item_color-variant_selected');
            if (previousSelected){
              previousSelected.classList.remove('item_color-variant_selected');
            }

            //Poner selección al nuevo color seleccionado
            const swatchP = swatch.querySelector('.item_color-variant');
            swatchP.classList.add('item_color-variant_selected'); 

            //Quita las variantes de color selecciondas
            const previousSelectedSize = card.querySelectorAll('.item_size-variant_selected');
            previousSelectedSize.forEach(element =>{
              element.classList.add('item_size-variant');
              element.classList.remove('item_size-variant_selected');
            });         

            //Pone las nuevas variantes de color seleccionadas
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
    }
}