export const product = () => {

    //Agregar el click a todos los colores
    const swatchColor = document.querySelectorAll('.swatch');

    swatchColor.forEach(element => {
        const variantId = element.getAttribute('data-variant-color');
        element.addEventListener('click', function(){
            mostrarTallasDelColor(variantId);
        })
    })
}

function mostrarTallasDelColor(variantId){
    const colorSeleceted = document.querySelectorAll('.item_size-variant_selected')
    colorSeleceted.forEach(element => {
        element.classList.add('item_size-variant')
        element.classList.remove('item_size-variant_selected')
    })

    const variatnSize = document.querySelectorAll('.item_size-variant');
    variatnSize.forEach(element =>{
        const colorVariantSize = element.getAttribute('data-variant2-color');
        if(colorVariantSize === variantId){
            element.classList.add('item_size-variant_selected')
            element.classList.remove('item_size-variant')
        }        
    })
}