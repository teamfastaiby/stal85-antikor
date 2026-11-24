/* СТАЛЬ 85 — меню, FAQ, заявка в WhatsApp */
(function () {
  "use strict";
  var PH = "+375 (29) 608-23-10", WAN = "375296082310";
  var burger = document.getElementById("burger"), drawer = document.getElementById("drawer");
  if (burger && drawer) {
    burger.addEventListener("click", function () { drawer.setAttribute("data-open", "1"); document.body.style.overflow = "hidden"; });
    var x = drawer.querySelector(".drawer__x");
    function close() { drawer.removeAttribute("data-open"); document.body.style.overflow = ""; }
    if (x) x.addEventListener("click", close);
    drawer.addEventListener("click", function (e) { if (e.target.tagName === "A") close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }
  var faq = document.querySelectorAll(".faq__q");
  Array.prototype.forEach.call(faq, function (b) {
    b.addEventListener("click", function () {
      var item = b.parentNode, open = item.getAttribute("data-open") === "1";
      Array.prototype.forEach.call(document.querySelectorAll(".faq__i"), function (i) { i.removeAttribute("data-open"); });
      if (!open) item.setAttribute("data-open", "1");
    });
  });
  var forms = document.querySelectorAll("form[data-form]");
  Array.prototype.forEach.call(forms, function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var g = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; };
      var lines = ["Заявка с сайта — антикор Dinitrol", "Телефон: " + g("f-phone"), "Что нужно: " + g("f-what"), "Адрес / район: " + g("f-where"), "Комментарий: " + g("f-msg")];
      var text = lines.filter(function (l) { return l.split(": ")[1] !== "" || l.indexOf("Телефон") === 0; }).join("\n");
      var out = f.querySelector(".formout");
      window.open("https://wa.me/" + WAN + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      if (out) out.textContent = "Открыл WhatsApp — останется нажать «Отправить».";
    });
  });
})();
