const body = document.querySelector("body");
const bgColorChange = document.getElementById("bg-color");
const bgImgChange = document.getElementById("formFile");
const headerChange = document.getElementById("headerFile");
const headerImage = document.querySelector("header img");
const clearImage = document.getElementById("clearImage");
const clearHeaderImage = document.getElementById("headerImageClear");
const resetBtn = document.getElementById("resetBtn");

bgColorChange.addEventListener("change", (event) => {
  body.style.backgroundColor = event.target.value;
});

bgImgChange.addEventListener("change", (event) => {
  body.style.backgroundImage = `url(${URL.createObjectURL(event.target.files[0])})`;
  clearImage.classList.remove("hidden");
  if (body.style.backgroundColor) {
    body.style.backgroundColor = null;
  }
});

clearImage.addEventListener("click", () => {
  bgImgChange.value = null;
  body.style.backgroundImage = null;
  clearImage.classList.add("hidden");
});

headerChange.addEventListener("change", (event) => {
  if (event.target.files[0]) {
    clearHeaderImage.classList.remove("hidden");
    document.querySelector("header").classList.remove("hidden");
    headerImage.src = URL.createObjectURL(event.target.files[0]);
  }
});
clearHeaderImage.addEventListener("click", () => {
  headerChange.value = null;
  headerImage.src = null;
  clearHeaderImage.classList.add("hidden");
  document.querySelector("header").classList.add("hidden");
});

document.getElementById("headerSize").addEventListener("change", (event) => {
  if (headerImage.src) {
    document.querySelector("header").style.maxHeight =
      `${event.target.value}px`;
  } else {
    console.log("please set image ");
  }
});

const topBorderColorDiv = document.querySelector(".description-title");
const topBorderColorInput = document.getElementById("top-border-color");
const headerCardColor = document.getElementById("header-border-color");

const cardOfForm = document.querySelectorAll(
  ".question-main-wrapper .form-control",
);
const cardOfFormLabel = document.querySelectorAll(
  ".question-main-wrapper .form-control .form-label",
);
const cardOfFormInput = document.querySelectorAll(
  ".question-main-wrapper .form-control  .form-input",
);

topBorderColorInput.addEventListener("change", (event) => {
  topBorderColorDiv.style.borderColor = event.target.value;
});

headerCardColor.addEventListener("change", (event) => {
  topBorderColorDiv.style.backgroundColor = event.target.value;
});

document
  .getElementById("font-header-color")
  .addEventListener("change", (event) => {
    document.querySelector(".description-title h2").style.color =
      event.target.value;
    topBorderColorDiv.style.color = event.target.value;
  });

document
  .getElementById("question-color")
  .addEventListener("change", (event) => {
    cardOfForm.forEach((card) => {
      card.style.backgroundColor = event.target.value;
    });
  });

document
  .getElementById("question-font-color")
  .addEventListener("change", (event) => {
    cardOfFormLabel.forEach((card) => {
      card.style.color = event.target.value;
    });
    cardOfFormInput.forEach((card) => {
      card.style.color = event.target.value;
    });
  });

document
  .getElementById("borderSizeQuestion")
  .addEventListener("change", (event) => {
    cardOfForm.forEach((card) => {
      card.style.borderWidth = `${event.target.value}px`;
    });
  });

document
  .getElementById("question-border-color")
  .addEventListener("change", (event) => {
    cardOfForm.forEach((card) => {
      card.style.borderColor = event.target.value;
    });
  });
//  reset value

const formPart = document.getElementById("settings-form");

formPart.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = new FormData(formPart);
  for (const [key, value] of form) {
    console.log(`${key}: ${value}\n`);
  }
 
    formPart.reset();
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
