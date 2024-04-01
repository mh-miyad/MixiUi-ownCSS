const accordionItemHeaders = document.querySelectorAll(
  ".faq-accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader, index) => {
  const accordionItemIcon = accordionItemHeader.querySelector(
    ".faq-accordion-btn-icon"
  );
  const accordionItemBody = accordionItemHeader.nextElementSibling;

  if (index !== 0) {
    accordionItemIcon.style.transform = "rotate(0deg)";
    accordionItemHeader.classList.remove("active");
    accordionItemBody.style.maxHeight = 0;
  }

  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    accordionItemIcon.classList.toggle("active-btn");

    if (accordionItemHeader.classList.contains("active")) {
      accordionItemIcon.style.transform = "rotate(180deg)";
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemIcon.style.transform = "rotate(0deg)";
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
