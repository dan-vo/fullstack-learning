let sidebarButton = document.querySelector('.sidebar-toggle-button');
let sidebar = document.querySelector('.sidebar');
let tabTriggerButton = document.querySelectorAl('.tabs-trigger');
let onTabTriggerButtonClicked = function (event) {
  let currentButton = event.target;

  for (let i = 0; i < tabTriggerButtons.length; i++) {
    const button = tabTriggerButtons[i];

    button.classList.remove('active');
  }

  currentButton.classList.add('active');

  const tabTarget = currentButton.getAttribute('data-tab-target');

  const tab = document.querySelector(`[data-tab-content="${tabTarget}"]`);

  tab.classList.add('active');
};

button.addEventListener('click', onTabTriggerButtonClicked);

let onsideBarButtonClick = function () {
  //when the button is clicked
  // if the sidebar has the class collapsed
  if (sidebar.classList.contains('collapsed')) {
    // remove collapsed
    sidebar.classList.remove('collapsed');
  } else {
    // add collapsed to class sidebar
    sidebar.classList.add('collapsed');
  }
};

sidebarButton.addEventListener('click', onsideBarButtonClick);
