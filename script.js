// Get the container element (focus on the 'ul' within the 'nav')
var btnContainer = document.querySelector('nav ul');

// Get all list items (li) within the container
var btns = btnContainer.querySelectorAll('li');

// Loop through the list items and add click event listener
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Remove active class from all list items (prevents duplicates)
    btns.forEach(function(item) {
      item.classList.remove("active");
    });

    // Add the active class to the clicked list item
    this.classList.add("active");
  });
}
