// function showNotification(params) {
//   let notify = document.getElementById("notify");
//   notify.classList.toggle("active-notify");
//   const pageWrapper = document.querySelector(".page-wrapper");
//   pageWrapper.classList.toggle("open-notify");
//   const getheader = notify.querySelector(".notify-header h2");
//   getheader.textContent = params;
//   const notifyContent = notify.querySelector(".notify-content");
//   const supportContent = notify.querySelector(".support-content");
//   const knowledgeContent = notify.querySelector(".knowledge-content");
//   const btnOfShow = notify.querySelector(".notify-btn-dark");
//   if (getheader.textContent === "Notifications") {
//     btnOfShow.addEventListener("click", () => {
//       console.log("clicked");
//     });
//   } else {
//     btnOfShow.getAttribute("disabled", "true");
//   }
//   if (getheader.textContent === "Notifications") {
//     notifyContent.classList.remove("d-none");
//     supportContent.classList.add("d-none");
//     knowledgeContent.classList.add("d-none");
//   } else if (getheader.textContent === "Knowledge Base") {
//     knowledgeContent.classList.remove("d-none");
//     notifyContent.classList.add("d-none");
//     supportContent.classList.add("d-none");
//   } else if (getheader.textContent === "Support") {
//     supportContent.classList.remove("d-none");
//     notifyContent.classList.add("d-none");
//     knowledgeContent.classList.add("d-none");
//   } else {
//     alert("content is Not Found ");
//   }
// }
function showNotification(params) {
  let notify = document.getElementById("notify");
  notify.classList.toggle("active-notify");
  const pageWrapper = document.querySelector(".page-wrapper");
  pageWrapper.classList.toggle("open-notify");
  const getheader = notify.querySelector(".notify-header h2");
  getheader.textContent = params;

  const notifyContent = notify.querySelector(".notify-content");
  const supportContent = notify.querySelector(".support-content");
  const knowledgeContent = notify.querySelector(".knowledge-content");
  const listOfKnownCategory =
    knowledgeContent.querySelectorAll(".list-group-item");
  listOfKnownCategory.forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("active");
    });
  });

  const btnOfShow = notify.querySelector(".notify-btn-dark");
  btnOfShow.disabled = getheader.textContent !== "Notifications";
  btnOfShow.onclick = () => {
    const settingsOfNotifications = document.getElementById("notify-settings");
    if (settingsOfNotifications.style.display === "none") {
      settingsOfNotifications.style.display = "block";
    } else if (settingsOfNotifications.style.display === "block") {
      settingsOfNotifications.style.display = "none";
    } else {
      settingsOfNotifications.style.display = "none";
    }
  };
  switch (getheader.textContent) {
    case "Notifications":
      notifyContent.classList.remove("d-none");
      supportContent.classList.add("d-none");
      knowledgeContent.classList.add("d-none");
      break;
    case "Knowledge Base":
      knowledgeContent.classList.remove("d-none");
      notifyContent.classList.add("d-none");
      supportContent.classList.add("d-none");
      break;
    case "Support":
      supportContent.classList.remove("d-none");
      notifyContent.classList.add("d-none");
      knowledgeContent.classList.add("d-none");
      break;
    default:
      alert("Content Not Found");
  }
}
function closeNotify() {
  let notify = document.getElementById("notify");
  notify.classList.remove("active-notify");
  const pageWrapper = document.querySelector(".page-wrapper");
  pageWrapper.classList.remove("open-notify");
}
