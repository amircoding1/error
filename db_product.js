document.addEventListener("DOMContentLoaded", function () {
    // AJAX-Anfrage, um Produkte vom Server abzurufen
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "product_info.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var products = JSON.parse(xhr.responseText);
            displayProducts(products);
        }
    };

    xhr.send();

    function displayProducts(products) {
        // Produkte auf der Webseite anzeigen, z.B., durch DOM-Manipulation
        var productsContainer = document.querySelector(".popular-products");
        productsContainer.innerHTML = "";

        products.forEach(function (product) {
            var productDiv = document.createElement("div");
            productDiv.className = "product";

            var img = document.createElement("img");
            img.src = product.bild_pfad;
            img.alt = product.name;

            var h3 = document.createElement("h3");
            h3.textContent = product.name;

            var p = document.createElement("p");
            p.textContent = product.beschreibung;

            var priceParagraph = document.createElement("p");
            priceParagraph.textContent = "Preis: $" + product.preis.toFixed(2);

            var button = document.createElement("button");
            button.textContent = "Kaufen";

            productDiv.appendChild(img);
            productDiv.appendChild(h3);
            productDiv.appendChild(p);
            productDiv.appendChild(priceParagraph);
            productDiv.appendChild(button);

            productsContainer.appendChild(productDiv);
        });
    }
});
