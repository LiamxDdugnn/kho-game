const apps = [
  {
    name: "Scarlet App",
    icon: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png",
    link: "https://scarlet.khoindvn.io.vn"
  },
  {
    name: "AltStore Tutorial",
    icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    link: "https://avieshek.wordpress.com/2024/06/11/how-to-sideload-on-ios/"
  }
];

const appSection = document.querySelector(".app-section");

apps.forEach(app => {
  const card = document.createElement("div");
  card.classList.add("project");
  card.innerHTML = `
    <img src="${app.icon}" style="width: 60px; margin-bottom: 10px;">
    <h3>${app.name}</h3>
    <a href="${app.link}" target="_blank">Open</a>
  `;
  appSection.appendChild(card);
});
