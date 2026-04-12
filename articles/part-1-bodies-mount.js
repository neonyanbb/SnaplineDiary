(function () {
  'use strict';
  function mount() {
    var B = window.PART1_BODIES || {};
    ['en', 'es', 'fr', 'ru'].forEach(function (L) {
      var el = document.getElementById('part1-mount-' + L);
      if (el && B[L]) el.innerHTML = B[L];
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
