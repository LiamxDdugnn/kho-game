// donate.js
document.addEventListener('DOMContentLoaded', () => {
  const donateBtn = document.getElementById('donateBtn');
  const donateDialog = document.getElementById('donateDialog');
  const closeBtn = document.getElementById('closeDonateDialog');

  donateBtn.addEventListener('click', () => {
    donateDialog.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    donateDialog.style.display = 'none';
  });

  donateDialog.addEventListener('click', (e) => {
    if (e.target === donateDialog) {
      donateDialog.style.display = 'none';
    }
  });
});
