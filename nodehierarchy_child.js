/**
 * Arm Isotope
 */

jQuery().ready(function(){
  
  // Initialize isotope
  jQuery('.children-isotope').each(function(){
    var isotope_id = '#' + jQuery(this).attr('id');

    // Recupero la categoria attiva
    var filter_id = '#filter-nid-' + jQuery(this).attr('id').substr(13);
    var active_button = jQuery(filter_id + ' a.active');
    var filterValue = active_button.attr('data-filter');
    if (filterValue !== undefined){
      // Nascondo i children che non sono attivi prima che isotope venga caricato (altrimenti si vedono tutti)
      jQuery(isotope_id + ' div.node').not(filterValue).hide();
    }
  
    // Usa il primo figlio come larghezza della griglia
    jQuery(isotope_id).imagesLoaded( function() {
      jQuery(isotope_id).isotope({
        itemSelector: '.node',
        filter: active_button.attr('data-filter'), 
      })
    });
  });

  // Initialize isotope filter
  // Per ora solo chi ha la classe ".children-filter-full"
  jQuery('.children-filter-isotope.children-filter-full').each(function(){
    var children_filter_id = '#' + jQuery(this).attr('id');
  
    // Armo i click
    jQuery(children_filter_id + ' a').click(function(e){
      e.preventDefault();
  
      var filterValue = jQuery(this).attr('data-filter');
      var isotope_id = '#' + jQuery(this).attr('isotope');
  
      jQuery(isotope_id).isotope({ filter: filterValue });
      
      jQuery(children_filter_id + ' a.active').removeClass('active');
      jQuery(this).addClass('active');
    });
  });
  
});