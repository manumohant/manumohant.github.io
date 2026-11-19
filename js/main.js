(function () {
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  var root = document.documentElement;

  function updateMoonSize() {
    var now = new Date();
    var daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    var progress = (now.getDate() - 1) / (daysInMonth - 1);
    var scale = 0.72 + 0.43 * Math.sin(Math.PI * progress);
    var nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    root.style.setProperty('--moon-scale', scale.toFixed(3));
    window.setTimeout(updateMoonSize, nextDay.getTime() - now.getTime() + 100);
  }

  updateMoonSize();

  function resetEffects() {
    root.style.removeProperty('--pointer-x');
    root.style.removeProperty('--pointer-y');
    root.style.removeProperty('--move-x');
    root.style.removeProperty('--move-y');
  }

  document.addEventListener('pointermove', function (event) {
    if (motion.matches || !pointer.matches) return;

    var x = event.clientX / window.innerWidth;
    var y = event.clientY / window.innerHeight;
    root.style.setProperty('--pointer-x', (x * 100) + '%');
    root.style.setProperty('--pointer-y', (y * 100) + '%');
    root.style.setProperty('--move-x', ((x - 0.5) * 20) + 'px');
    root.style.setProperty('--move-y', ((y - 0.5) * 20) + 'px');
  });

  document.addEventListener('pointerout', function (event) {
    if (!event.relatedTarget) resetEffects();
  });
  motion.addEventListener('change', resetEffects);
  pointer.addEventListener('change', resetEffects);
}());
