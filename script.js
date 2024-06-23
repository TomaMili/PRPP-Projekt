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
      title:
        "Predstavljanje obnovljenih prostora na Znanstveno-učilišnom kampusu Boronogaj",
      content:
        "Tehničko veleučilište u Zagrebu je uz potporu Ministarstva znanosti i obrazovanja, kao i iz vlastitih sredstava uredilo 2000m2 prostora za nastavu na Znanstveno-učilišnom kampusu Borongaj. Suvremeno uređeni prostor namjenjen je za nastavu studentima Informatičko računarskog odjela. Studenti informatike i računarstva često se smatraju najboljim inovatorima jer akumuliraju multidisciplinarna znanja.",
    },
    {
      title:
        "Dekanici TVZ-a prof. dr. sc. Jani Žiljak Gršić nagrada za povezivanje znanosti i poslovanja",
      content:
        "U Zagrebu, 24. studenog 2023. Vodstvo i članovi udruge MBA Croatia s ponosom izvještavaju o uspješnom održavanju šeste godišnje dodjele nagrada – MBA Awards Gala. Večer, koja je okupila preko 150 poslovnih lidera, članova udruge MBA Croatia, posebnih gostiju i podržavatelja, obilježena je dodjelom prestižnih nagrada, čime smo istaknuli izniman doprinos pojedinaca u raznim područjima.",
    },
    {
      title:
        "Zaposlenik i studenti sudjelovali na ovogodišnjem izdanju WRC Croatia rally 2024",
      content:
        "Na ovogodišnjem izdanju WRC Croatia rally 2024 su sudjelovali zaposlenik Elektrotehničkog odjela Goran Vujisić kao zamjenik direktora i voditelj sigurnosti natjecanja te kao natjecatelj je sudjelovao student Mehatronike Jan Pokos. S velikim zadovoljstvom možemo konstatirati da su i studenti TVZ-a sudjelovali u ovogodišnjoj organizaciji WRC Croatia rally-a na brzinskim ispitima te servisnom prostoru kod West Gate-a.",
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

// Pop-up

document.getElementById("openPopupBtn").addEventListener("click", function () {
  document.getElementById("popupContainer").classList.remove("hidden");
  document.getElementById("popupContainer").style.display = "flex";
});
document.getElementById("openPopupBtn2").addEventListener("click", function () {
  document.getElementById("popupContainer").classList.remove("hidden");
  document.getElementById("popupContainer").style.display = "flex";
});
document.getElementById("closePopupBtn").addEventListener("click", function () {
  document.getElementById("popupContainer").classList.add("hidden");
  document.getElementById("popupContainer").style.display = "none";
});
document
  .getElementById("closePopupBtn2")
  .addEventListener("click", function () {
    document.getElementById("popupContainer").classList.add("hidden");
    document.getElementById("popupContainer").style.display = "none";
  });
