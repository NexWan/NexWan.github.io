document.addEventListener("DOMContentLoaded", function () {
    new fullpage("#fullpage", {
      sectionsColor: ['#32a852', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
      anchors: ["section1", "section2", "section3"],
      controlArrows: false,
      navigation: true,
      slidesNavigation: true,
      menu: '#menu', // Updated the menu option to use '#menu' since it's the ID of your menu list.
      afterLoad: function (origin, destination, direction) {
        // Remove the 'active' class from all menu items
        document.querySelectorAll("#menu li").forEach(function (item) {
          item.classList.remove("active");
        });
  
        // Add the 'active' class to the corresponding menu item based on the section anchor
        var menuItems = document.querySelectorAll("#menu li");
        var activeMenuItem = document.querySelector(`#menu li[data-menuanchor="${destination.anchor}"]`);
        if (activeMenuItem) {
          activeMenuItem.classList.add("active");
        }
      },
    });
  });
  