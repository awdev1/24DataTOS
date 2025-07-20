document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabSections = document.querySelectorAll('.tab-section');

  function showTab(tabId) {
    tabSections.forEach(section => {
      section.classList.remove('active');
      section.classList.add('hidden');
    });

    tabButtons.forEach(btn => {
      btn.classList.remove('border-blue-400');
    });

    document.getElementById(tabId)?.classList.add('active');
    document.getElementById(tabId)?.classList.remove('hidden');
    document.querySelector(`.tab-button[data-tab="${tabId}"]`)?.classList.add('border-blue-400');
  }

  showTab('rest');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      showTab(tab);
    });
  });
});
