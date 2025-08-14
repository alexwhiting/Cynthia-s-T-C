// Mobile menu toggle functionality
document.getElementById('mobileMenuButton').addEventListener('click', function() {
  const dropdown = document.getElementById('mobileDropdown');
  dropdown.classList.toggle('active');
  
  // Toggle between hamburger and close icon
  const icon = this.querySelector('i');
  if (dropdown.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('mobileDropdown');
  const menuButton = document.getElementById('mobileMenuButton');
  
  if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
    const icon = menuButton.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});