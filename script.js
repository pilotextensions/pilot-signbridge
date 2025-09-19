function initI18n() {
  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: "en",
      debug: false,
      backend: {
        loadPath: "locales/{{lng}}/translation.json"
      }
    }, function (err, t) {
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });
      updateContent();
    });
}

function updateContent() {
  $("body").localize();

  // Fix bold HTML
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = i18next.t(key);
    if (translation.includes("<b>") || translation.includes("<br>") || translation.includes("<ul>")) {
      el.innerHTML = translation; // keep HTML
    }
  });

  // Build About list separately
  const list = i18next.t("aboutList", { returnObjects: true });
  const ul = document.getElementById("about-list");
  if (ul) {
    ul.innerHTML = "";
    list.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item; // HTML allowed
      ul.appendChild(li);
    });
  }
}

function setLang(lang) {
  i18next.changeLanguage(lang, updateContent);
}

initI18n();
