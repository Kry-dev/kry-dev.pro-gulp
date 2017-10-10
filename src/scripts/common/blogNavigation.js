function blogNavigation() {
	// ==============================
	// Save needed elements
	// ==============================
	var active_id,
		additional_offset = 60,
		menu = $(".blog-navigation"),
		menu_items = menu.find("li a"),
		scroll_items = menu_items.map(function(){
			var item = $($(this).attr("href"));
			if (item.length) return item;
		});



	// =====================================
	// Sidemenu link smoothscroll handler
	// =====================================
	menu_items.click(function(e){
		var href = $(this).attr("href"),
			offsetTop = (href === "#") ? 0 : $(href).offset().top - additional_offset;

		e.preventDefault();

		$("html, body").stop().animate({ 
			scrollTop: offsetTop
		}, 700, "swing");
	});



	// ======================================================
	// Articles scroll-spy handler and sidemenu positioning
	// ======================================================
	$(window).scroll(function() {
		var fromTop = $(this).scrollTop(),
			blog_nav_offset = $(".blog-navigation").offset().top,
			blog_nav_limit = $(".footer__wrapper").offset().top - $(".blog-navigation__wrapper").outerHeight(),
			current = scroll_items.map(function(){
				if ($(this).offset().top <= fromTop+additional_offset+1){
					return this;
				}
			});

		current = current[current.length-1];
		var id = current && current.length ? current[0].id : "";

		if (active_id !== id) {
			active_id = id;
			menu_items.removeClass("active").filter("[href=#"+id+"]").addClass("active");
		}

		// Sidemenu behaviour
		if(fromTop >= blog_nav_limit && $(window).width() > window.hm.tabletSize) {
			$(".blog-navigation__wrapper").css({"position":"absolute", "top":blog_nav_limit + "px"});
		} else if (fromTop >= blog_nav_offset && $(window).width() > window.hm.tabletSize) {
			$(".blog-navigation__wrapper").css({"position":"fixed", "top":0});
			$(".blog-navigation__wrapper").addClass("nav-fixed");
		} else {
			$(".blog-navigation__wrapper").css({"position":"relative"});
			$(".blog-navigation__wrapper").removeClass("nav-fixed");
		}
	});



	// =====================================
	// Adaptive sidemenu checker
	// =====================================
	$(window).resize(function() {
		if($(window).width() <= window.hm.tabletSize){
			$(".blog-navigation__wrapper").removeClass("nav-fixed");
			$(".blog-navigation__wrapper").css({"position":"relative"});
		} else {
			if($("body").scrollTop() >= $(".blog").offset().top){
				$(".blog-navigation__wrapper").css({"position":"fixed", "top":0});
				$(".blog-navigation__wrapper").addClass("nav-fixed");
			}
		}
	});



	// ==============================
	// Sidemenu toggle button
	// ==============================
	$(".blog-navigation__toggle").click(function(){
		$(".blog-navigation").toggleClass("active");
	});

};

module.exports = blogNavigation;