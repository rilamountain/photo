(function () {
  "use strict";

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderLocationCards() {
    const grid = document.getElementById("loc-grid");
    if (!grid) return;
    const html = LOCATIONS.map(function (loc) {
      const approxNote = loc.approx
        ? '<p class="loc-approx">Coordinates approximate.</p>'
        : "";
      const kindLabel = loc.kind === "legend" ? "Legend" : "Real place";
      return (
        '<article class="loc-card" id="loc-' + loc.id + '" data-id="' + loc.id + '" data-kind="' + loc.kind + '">' +
          '<div class="loc-photo" data-photo-slot="' + loc.id + '">' +
            '<img src="assets/photos/' + loc.id + '.jpg" alt="' + escapeHtml(loc.name) + '" loading="lazy" ' +
              'onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'placeholder-icon\',textContent:\'No photo yet\'}))">' +
            '<span class="loc-kind">' + kindLabel + '</span>' +
          '</div>' +
          '<div class="loc-body">' +
            '<h3>' + escapeHtml(loc.name) + '</h3>' +
            (loc.localName ? '<p class="loc-local">' + escapeHtml(loc.localName) + '</p>' : "") +
            '<p class="loc-chapter">Chapter: ' + escapeHtml(loc.chapter) + '</p>' +
            '<p class="loc-real">' + escapeHtml(loc.real) + '</p>' +
            '<p class="loc-excerpt">' + escapeHtml(loc.excerpt) + '</p>' +
            approxNote +
          '</div>' +
        '</article>'
      );
    }).join("");
    grid.innerHTML = html;
  }

  function renderGlossary() {
    const dl = document.getElementById("glossary-grid");
    if (!dl) return;
    dl.innerHTML = GLOSSARY.map(function (g) {
      return (
        '<div class="gloss-item"><dt>' + escapeHtml(g.term) + '</dt><dd>' + escapeHtml(g.def) + '</dd></div>'
      );
    }).join("");
  }

  function highlightCard(id) {
    document.querySelectorAll(".loc-card.is-active").forEach(function (el) {
      el.classList.remove("is-active");
    });
    const card = document.getElementById("loc-" + id);
    if (card) {
      card.classList.add("is-active");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function initMap() {
    const mapEl = document.getElementById("leaflet-map");
    if (!mapEl || typeof L === "undefined") return;

    const map = L.map("leaflet-map", { scrollWheelZoom: false }).setView([42.22, 23.34], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 17
    }).addTo(map);

    LOCATIONS.forEach(function (loc) {
      const isLegend = loc.kind === "legend";
      const marker = L.circleMarker(loc.coords, {
        radius: isLegend ? 9 : 7,
        color: isLegend ? "#d8b769" : "#7fb3d5",
        weight: 2,
        fillColor: isLegend ? "#d8b769" : "#7fb3d5",
        fillOpacity: isLegend ? 0.55 : 0.75,
        dashArray: isLegend ? "3,3" : null
      }).addTo(map);

      const popupHtml =
        '<div class="map-popup"><h4>' + escapeHtml(loc.name) + '</h4>' +
        '<p>' + escapeHtml(loc.real) + '</p>' +
        '<a href="#loc-' + loc.id + '">Read more &darr;</a></div>';

      marker.bindPopup(popupHtml);
      marker.on("click", function () { highlightCard(loc.id); });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderLocationCards();
    renderGlossary();
    initMap();

    if (window.location.hash) {
      const id = window.location.hash.replace("#loc-", "");
      if (id !== window.location.hash) highlightCard(id);
    }
  });
})();
