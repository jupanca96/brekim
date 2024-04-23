$('.js-load-more').on('click', function(){
    var $this =$(this),totalPages = parseInt($('[data-total-pages]').val()),currentPage = parseInt($('[data-current-page]').val());
    $this.attr('disabled', true);
    $this.find('[load-more-text]').addClass('hide');
    $this.find('[loader]').removeClass('hide');
    var nextUrl = $('[data-next-url]').val().replace(/page=[0-9]+/,'page='+currentPage);
    $('[data-current-page]').val(currentPage);
    $.ajax({
      url: nextUrl,
      type: 'GET',
      dataType: 'html',
      success: function(responseHTML){
        $('.grid--view-items').append($(responseHTML).find('.grid--view-items').html());
      },
      complete: function() {
        if(currentPage <= totalPages) {
           $this.attr('disabled', false); $this.find('[load-more-text]').removeClass('hide'); $this.find('[loader]').addClass('hide');
        } 
      }
    })
  });