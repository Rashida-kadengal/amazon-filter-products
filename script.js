// init Isotope
var $grid = $('#product-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });



function  displayCount(){
    document.getElementById('result').innerText="3 clothings , 4 electronics & 1 furniture are availabe";
    
}




