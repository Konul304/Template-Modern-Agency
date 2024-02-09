const initIsotope = (id, videos, images) => {
  var grid = document.querySelectorAll(`.gallery-${id}`);
  var iso;

  if (grid.length >= 1) {
    grid.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: ".items",
      });

      // Filter presentations initially
      iso.arrange({ filter: videos?.length > 0 ? ".videos" : ".images" });
    });
  }

  var gridMons = document.querySelectorAll(`.gallery-mons-${id}`);
  if (gridMons.length >= 1) {
    gridMons.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: ".items",
        masonry: {
          columnWidth: ".width2",
        },
      });
    });
  }

  var filtersElem = document.querySelector(`.filtering-${id}`);
  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }
      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({ filter: filterValue });
    });
    var buttonGroups = document.querySelectorAll(`.filtering-${id}`);
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!matchesSelector(event.target, "span")) {
          return;
        }
        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

export default initIsotope;
