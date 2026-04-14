(function () {
  'use strict';

  function mount() {
    var B = window.PART2_BODIES || {};
    ['en', 'es', 'fr', 'ru'].forEach(function (L) {
      var el = document.getElementById('part2-mount-' + L);
      if (el && B[L]) el.innerHTML = B[L];
    });
    if (typeof window.bindArticleProgressiveFigs === 'function') window.bindArticleProgressiveFigs(document);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
