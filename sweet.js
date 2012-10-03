(function ($) {

	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	
	function process_post(post_container) {
		console.log($(location).attr('href'));
		console.log("came here");
        var found = $(post_container).find(".in-reply-to");
		if (found.length > 0) {
			$(post_container).hide();
		}
		console.log("the end");
    }

    if (MutationObserver) {
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                $(mutation.addedNodes).each(function() {
                    if ($(this).is(".post-container")) {
						if($(location).attr('href')=="https://alpha.app.net/global/"){
							process_post($(this));
						}
                    } else {
                        $(this).find(".post-container").each(function() {
							if($(location).attr('href')=="https://alpha.app.net/global/"){
								process_post($(this));
							}
                        });
                    }
                });
            });
        });

        var config = { subtree: true, childList: true, characterData: false, attributes: false }
        $("body").each(function() {
            observer.observe(this, config);
        });
    }

    $(".post-container").each(function() {
		if($(location).attr('href')=="https://alpha.app.net/global/"){
			process_post(this);
		}
    });

})(jQuery);