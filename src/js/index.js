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

    // slider para value props home
    //swiperValueprops();

  });