$(function(){

    var gridster;

    gridster = $(".gridster > ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140],
        extra_cols : 10,
        resize: {
            enabled: true,
            stop : function(e, ui, $widget)
            {
                //console.log('moving')
                //gridster.move_widget_to_row_in_col($widget, 1,12 );

                //gridster.move_widget_to_closest_available_cell($widget);
            }
        }
    }).data('gridster');




});