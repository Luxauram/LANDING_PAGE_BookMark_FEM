const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');


// Tabs Accordion eventListener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

// Hamburger button eventListener
btn.addEventListener('click', navToggle)

// Accordion Function
function onTabClick(e) {
  // Deactive all tabs
  tabs.forEach(tab => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })

  // Hide all panels
  panels.forEach(panel => panel.classList.add('hidden'));

  // Activate a new tab and panel based on the target
  e.target.classList.add('border-softRed', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document.getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}

// Hamburger Menu Function
function navToggle() {
  btn.classList.toggle('hamburger-open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }

  document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", () => {
      btn.classList.remove("hamburger-open");
      menu.classList.remove("flex");
      menu.classList.add("hidden");
    });
  });
}

// If resize window during Hamburger Menu Open
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    btn.classList.remove("open");
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }
});


