 /*scroll to div js*/
      $(document).on("click", 'a[href^="#"]', function(e) { e.preventDefault(), $("html, body").animate({ scrollTop: $($.attr(this, "href")).offset().top }, 1e3) })
