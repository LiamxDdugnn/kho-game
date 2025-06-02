document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Trang đã sẵn sàng.");

  const links = document.querySelectorAll(".project");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const text = link.innerText || "Đường dẫn";
      console.log("🔗 Đã click vào:", text);
    });
  });
});
