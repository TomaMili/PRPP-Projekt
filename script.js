document.addEventListener("DOMContentLoaded", function () {
  // Responsive navigation menu
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  // Search functionality
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", function () {
    const query = searchInput.value.toLowerCase();
    alert("Searching for: " + query);
    // Implement search logic here
  });

  // Dynamically load news items
  const newsItemsContainer = document.getElementById("news-items");
  const newsItems = [
    {
      title: "News Item 1",
      content: "Content for news item 1",
    },
    {
      title: "News Item 2",
      content: "Content for news item 2",
    },
    {
      title: "News Item 3",
      content: "Content for news item 3",
    },
  ];

  newsItems.forEach((item) => {
    const newsItemDiv = document.createElement("div");
    newsItemDiv.classList.add("news-item");

    const newsTitle = document.createElement("h3");
    newsTitle.textContent = item.title;

    const newsContent = document.createElement("p");
    newsContent.textContent = item.content;

    newsItemDiv.appendChild(newsTitle);
    newsItemDiv.appendChild(newsContent);

    newsItemsContainer.appendChild(newsItemDiv);
  });
});
