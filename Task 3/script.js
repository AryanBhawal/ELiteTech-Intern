const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15 });

sections.forEach(s => observer.observe(s));

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

cards.forEach(c => cardObserver.observe(c));

function toggleDark() {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('theme-toggle');
  btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}
