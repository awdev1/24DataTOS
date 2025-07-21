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

  document.getElementById('apiRequestForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const endpoint = document.getElementById('endpoint').value;
    const output = document.getElementById('apiResponse');
    output.classList.remove('hidden');
    output.textContent = 'Loading...';

try {
  const res = await fetch(`https://cors-anywhere.com/https://24data.ptfs.app${endpoint}`, {
    method: 'GET',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
} catch (err) {
  output.textContent = `Error: ${err.message}`;
}

  });


  const tryApiSubtabButtons = document.querySelectorAll('.tryapi-subtab-button');
  const tryApiSubtabs = document.querySelectorAll('.tryapi-subtab');

  function showTryApiSubTab(subtabId, button) {
    tryApiSubtabs.forEach(el => el.classList.add('hidden'));
    document.getElementById(subtabId).classList.remove('hidden');

    tryApiSubtabButtons.forEach(btn => btn.classList.remove('border-blue-400'));
    button.classList.add('border-blue-400');
  }

  if (tryApiSubtabButtons.length > 0) {
    showTryApiSubTab('tryapi-rest', tryApiSubtabButtons[0]);
    tryApiSubtabButtons.forEach(button => {
      button.addEventListener('click', () => {
        showTryApiSubTab(button.getAttribute('data-subtab'), button);
      });
    });
  }
});
