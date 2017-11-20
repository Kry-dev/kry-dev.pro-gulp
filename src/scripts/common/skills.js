var animateSkills = function() {
	$(".piechart .piechart__fill").each(function(){
		var pie = $(this),
			pie_dasharray = 314.159265,
			pie_offset = ((100-pie.data("percentage"))/100)*pie_dasharray;

    $(window).scroll(function() {
      if($(document).scrollTop() > 400) {
        pie.css({strokeDashoffset:pie_offset});
        console.log('work');
      }
    }),
    {
      offset: "90%"
    };
	});
}
export {animateSkills};