// donate.js
document.addEventListener('DOMContentLoaded', () => {
  const donateBtn = document.getElementById('donateBtn');
  const donateDialog = document.getElementById('donateDialog');
  const closeDonateDialog = document.getElementById('closeDonateDialog');

  donateBtn.addEventListener('click', () => {
    donateDialog.style.display = 'flex';
  });

  closeDonateDialog.addEventListener('click', () => {
    donateDialog.style.display = 'none';
  });

  donateDialog.addEventListener('click', (e) => {
    if (e.target === donateDialog) {
      donateDialog.style.display = 'none';
    }
  });
});
