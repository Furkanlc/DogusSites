$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$("form.ajax").on("submit", function () {
  var that = $(this),
    url = that.attr("action"),
    method = that.attr("method"),
    data = {};

  that.find("[name]").each(function (index, value) {
    var that = $(this),
      name = that.attr("name"),
      value = that.val();

    data[name] = value;
  });

  $.ajax({
    url: url,
    type: type,
    data: data,
    success: function (response) {
      console.log(response);
      alert("Success");
    },
  });

  return false;
});
