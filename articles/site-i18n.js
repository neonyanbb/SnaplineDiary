/* Shared i18n + share for articles (uses same localStorage key as site root index.html) */
(function () {
  'use strict';

  const LANG_KEYS = ['zh', 'en', 'es', 'fr', 'ru'];
  const LANG_STORE = 'snapline-diary-lang';

  function readStoredLang() {
    try {
      const v = localStorage.getItem(LANG_STORE);
      if (v && LANG_KEYS.includes(v)) return v;
    } catch (_) {}
    return null;
  }

  function detectBrowserLang() {
    const raw = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
    const base = raw.split('-')[0];
    if (LANG_KEYS.includes(base)) return base;
    if (raw.startsWith('zh')) return 'zh';
    return 'en';
  }

  function langFromUrl() {
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (q && LANG_KEYS.includes(q)) return q;
    } catch (_) {}
    return null;
  }

  const STR = {
    zh: {
      list_doc_title: '用法手记 · 时线日记',
      list_meta_desc:
        '由创始人撰写的用法手记：从产品由来到设计取舍，到长期使用中的方法与习惯；含系列文章与更新计划。',
      part1_doc_title: '碎片化时代的注意力管理，从「刷完更空」到「看一个算一个」· 用法手记 · 时线日记',
      part1_meta_desc:
        '信息超载与算法推荐时代，如何不必只靠意志力对抗屏幕：用时线日记把碎片收成可追溯的节点；含 iPhone、iPad 与 Mac（Designed for iPad）、轻量加工、模板与记忆曲线。',
      part2_doc_title: '【时线日记】新建节点：两个入口，一套流程，把碎片收成可回看的时间线 · 用法手记 · 时线日记',
      part2_meta_desc:
        '新建节点功能全貌：双入口（分享扩展与主页新建）、图片添加、封面拖拽、备注与链接识别、标签推荐、快速编辑与保存回主页。',
      appName: '时线日记',
      n_feat: '功能',
      n_mem: '记忆曲线',
      n_case: '使用场景',
      n_notes: '用法手记',
      n_aud: '适用人群',
      n_pro: 'Pro 版本',
      n_faq: '常见问题',
      n_dl: '立即下载',
      ft_desc: '把每天的生活与灵感记录下来，用科学提醒回看你的高光时刻。',
      ft_prod: '产品',
      ft_feat: '功能介绍',
      ft_mem: '记忆曲线',
      ft_notes: '用法手记',
      ft_pro: 'Pro 版本',
      ft_dl: 'App Store 下载',
      ft_sup: '支持',
      ft_faq: '常见问题',
      ft_contact: '联系我们',
      ft_priv: '隐私政策',
      ft_lang: '语言',
      ft_copy: '© 2026 时线日记 (Snapline Diary). All rights reserved.',
      ft_priv2: '隐私政策',
      ft_sup2: '技术支持',
      nav_toggle_open: '打开菜单',
      nav_toggle_close: '关闭菜单',
      toast_coming: '应用尚在 App Store 审核中，通过后将开放下载，感谢关注。',
      art_back_site: '返回官网',
      art_app_store: 'App Store',
      art_notes_list: '手记列表',
      art_crumb_official: '首页',
      art_crumb_notes: '用法手记',
      art_crumb_body: '正文',
      art_ft_home: '官网首页',
      art_ft_home_short: '官网',
      art_ft_notes: '手记',
      art_ft_contact: '联系支持',
      art_ft_support: '支持',
      art_end_p: '在官网了解全部功能与定价，一键跳转 App Store。',
      art_dl_btn: 'App Store 下载',
      art_back_home: '返回首页',
      notes_eye: '用法手记',
      notes_h: '用法心得<br><em>从功能到习惯</em>',
      notes_d:
        '从<strong>产品由来到设计取舍</strong>，到<strong>长期使用中的方法与习惯</strong>——由创始人以文章写清「为什么做成这样」和「平常怎么用好」：既有<strong>叙事与心得</strong>，也有<strong>可照做的方法与细节</strong>，并会持续更新。',
      notes_n1_series: '系列 · 其一 · 全概',
      notes_n1_t:
        '碎片化时代的注意力管理，从「刷完更空」到「看一个算一个」：用时线日记，把碎片信息流变成个人成长的养分',
      notes_n1_sum:
        '信息超载、注意力被切碎的年代：不靠硬扛戒屏，把值得停一下的收成时间线上的记录；辅以轻量加工与记忆曲线。',
      notes_n1_meta: '约 15 分钟',
      notes_n2_series: '系列 · 其二 · 功能篇',
      notes_n2_t: '【时线日记】新建节点：两个入口，一套流程，把碎片收成可回看的时间线',
      notes_n2_sum:
        '从分享扩展与主页「+」双入口开始，讲清添加照片、拖拽封面、备注与链接、标签推荐、快速编辑与保存回主页。',
      notes_n2_meta: '约 10 分钟',
      notes_n2_soon: '',
      notes_n3_series: '系列 · 其三 · 功能篇',
      notes_n3_t: 'Pro 备份里，一条节点长什么样',
      notes_n3_sum:
        'metadata.json 字段与界面能力对照：图、备注、链接、标签、多图与 memoryCurveItems；附真实备份样例。',
      notes_n3_meta: '约 15 分钟',
      notes_n3_soon: '敬请期待',
      part1_h1:
        '碎片化时代的注意力管理，从「刷完更空」到「看一个算一个」：用时线日记，把碎片信息流变成个人成长的养分',
      part1_meta: '系列 · 其一 · 全概（全面概括） · 约 15 分钟 · 2026-04-11',
      part2_h1: '【时线日记】新建节点：两个入口，一套流程，把碎片收成可回看的时间线',
      part2_meta: '系列 · 其二 · 功能篇 · 新建节点 · 约 10 分钟 · 2026-04-14',
      part1_lead:
        '<p>我们正处在一个<strong>信息超载、节奏极快、注意力被算法、热搜与短视频切成碎片</strong>的时代。</p><p>你是不是也常觉得，屏划久了，人往往不是更满足，而是<strong>更空</strong>？</p><p>若<strong>不靠硬扛戒屏</strong>，这点<strong>注意力</strong>，又该<strong>怎么收、怎么留</strong>，才不至于刷完就散？</p><p>本文给出<strong>其中一种答法</strong>：我用「时线日记」，把值得停一下的那一刻<strong>落成记录、排进时间线</strong>，日后翻得回来；真要记进长期记忆的，再交给记忆曲线去排期。</p><p><strong>是否如此，不妨用你自己的划屏习惯验一验</strong>——<strong>往下读几段</strong>，对照日常刷屏时的感受即可。</p>',
      share_title: '分享本文',
      share_wechat_aria: '朋友圈：扫码在微信内打开并分享',
      share_weibo_aria: '分享到微博',
      share_douban_aria: '分享到豆瓣',
      share_copy_aria: '复制链接',
      share_x_aria: '分享到 X',
      share_facebook_aria: '分享到 Facebook',
      share_linkedin_aria: '分享到 LinkedIn',
      share_instagram_aria: 'Instagram：复制正文链接，在 App 内粘贴使用',
      share_lbl_moments: '朋友圈',
      share_lbl_weibo: '微博',
      share_lbl_douban: '豆瓣',
      share_lbl_copy: '复制链接',
      share_lbl_x: 'X',
      share_lbl_facebook: 'Facebook',
      share_lbl_linkedin: 'LinkedIn',
      share_lbl_instagram: 'Instagram',
      share_copy: '复制链接',
      share_wechat_modal_title: '分享到朋友圈',
      share_wechat_tip:
        '用微信<strong>扫一扫</strong>在内置浏览器打开本页，再通过右上角「···」菜单<strong>分享到朋友圈</strong>或转发给好友；也可先点下方按钮<strong>复制链接</strong>，粘贴到微信会话。<br><br><small>在微信内打开该链接时，可展示标题、摘要与预览图（本页已配置 Open Graph 元数据）。<br><strong>说明：</strong>微信<strong>不向网页提供</strong>从系统浏览器（如 Safari）<strong>一键跳转到朋友圈发文界面</strong>的公开接口，因此需先在内置浏览器中打开本文，再通过「···」分享。</small>',
      share_instagram_toast:
        '链接已复制。\n\nInstagram 不支持从网页一键发帖：请打开 Instagram，将链接贴在贴文说明、个人简介或快拍的「链接」贴纸中；好友点击即可打开本页。',
      modal_close_aria: '关闭',
      share_copy_ok: '链接已复制',
      share_copy_fail: '复制失败，请从地址栏手动复制',
    },
    en: {
      list_doc_title: 'Field Notes · Snapline Diary',
      list_meta_desc:
        'Long-form notes from the founder: why the app is built this way and how to use it well — series articles updated over time.',
      part1_doc_title: 'Attention in an age of fragmentation · Field Notes · Snapline Diary',
      part1_meta_desc:
        'When feeds fragment your attention: capture what deserves a pause on your timeline — iPhone, iPad, Mac (Designed for iPad), light processing, templates, and memory curve.',
      part2_doc_title:
        '[Snapline Diary] Create entries: two entry points, one flow to turn fragments into a timeline you can revisit · Field Notes · Snapline Diary',
      part2_meta_desc:
        'A complete walkthrough of creating an entry: two entry points (Share Extension and Home +), photo adding, cover reorder, note and link handling, tag recommendations, quick edit buttons, and saving back to Home.',
      appName: 'Snapline Diary',
      n_feat: 'Features',
      n_mem: 'Memory Curve',
      n_case: 'Use Cases',
      n_notes: 'Field Notes',
      n_aud: "Who it's for",
      n_pro: 'Pro',
      n_faq: 'FAQ',
      n_dl: 'Download',
      ft_desc:
        'Capture life and inspiration every day — let science help you revisit your highlights.',
      ft_prod: 'Product',
      ft_feat: 'Features',
      ft_mem: 'Memory Curve',
      ft_notes: 'Field Notes',
      ft_pro: 'Pro',
      ft_dl: 'App Store Download',
      ft_sup: 'Support',
      ft_faq: 'FAQ',
      ft_contact: 'Contact Us',
      ft_priv: 'Privacy Policy',
      ft_lang: 'Language',
      ft_copy: '© 2026 Snapline Diary. All rights reserved.',
      ft_priv2: 'Privacy Policy',
      ft_sup2: 'Support',
      nav_toggle_open: 'Open menu',
      nav_toggle_close: 'Close menu',
      toast_coming:
        'The app is still in App Store review. Downloads will open once approved. Thanks for your patience.',
      art_back_site: 'Back to site',
      art_app_store: 'App Store',
      art_notes_list: 'All notes',
      art_crumb_official: 'Home',
      art_crumb_notes: 'Field notes',
      art_crumb_body: 'Article',
      art_ft_home: 'Homepage',
      art_ft_home_short: 'Home',
      art_ft_notes: 'Notes',
      art_ft_contact: 'Contact',
      art_ft_support: 'Support',
      art_end_p: 'See full features and pricing on the site, then jump to the App Store.',
      art_dl_btn: 'Download on App Store',
      art_back_home: 'Back home',
      notes_eye: 'Field notes',
      notes_h: 'Usage insights<br><em>from features to habits</em>',
      notes_d:
        'From <strong>why it’s built this way</strong> to <strong>methods and habits from long-term use</strong> — long-form notes by the founder: <strong>story and takeaways</strong>, plus <strong>practical steps you can try</strong>, updated over time.',
      notes_n1_series: 'Series · Part 1 · Overview',
      notes_n1_t:
        'Attention in an age of fragmentation: from “emptier after scrolling” to “every view counts” — use Snapline Diary to turn fragmented feeds into nutrients for personal growth',
      notes_n1_sum:
        'When feeds fragment your attention: instead of fighting the screen, save what deserves a pause to your timeline — with light processing and the memory curve.',
      notes_n1_meta: '~15 min',
      notes_n2_series: 'Series · Part 2 · Feature',
      notes_n2_t: '[Snapline Diary] Create entries: two entry points, one flow to turn fragments into a timeline you can revisit',
      notes_n2_sum:
        'Start from two entry points (Share Extension and Home +), then walk through adding photos, drag-reordering cover, notes and links, tag recommendations, quick edits, and save-to-home flow.',
      notes_n2_meta: '~10 min',
      notes_n2_soon: '',
      notes_n3_series: 'Series · Part 3 · Feature',
      notes_n3_t: 'What one entry looks like in a Pro backup',
      notes_n3_sum:
        'metadata.json fields vs the UI: images, notes, links, tags, multi-image, and memoryCurveItems — with a real backup sample.',
      notes_n3_meta: '~15 min',
      notes_n3_soon: 'Coming soon',
      part1_h1:
        'Attention in an age of fragmentation: from “emptier after scrolling” to “every view counts” — use Snapline Diary to turn fragmented feeds into nutrients for personal growth',
      part1_meta: 'Series · Part 1 · Overview · ~15 min · Apr 11, 2026',
      part2_h1:
        '[Snapline Diary] Create entries: two entry points, one flow to turn fragments into a timeline you can revisit',
      part2_meta: 'Series · Part 2 · Feature · Create Entries · ~10 min · Apr 14, 2026',
      part1_lead:
        '<p>We live in an age of <strong>information overload, relentless pace, and attention sliced up</strong> by algorithms, trends, and short video.</p><p>Do you often feel that after long scrolling you end up not more satisfied, but <strong>emptier</strong>?</p><p>If you <strong>don’t want to rely on sheer screen avoidance</strong>, how can you <strong>gather and keep</strong> that scarce <strong>attention</strong> so it doesn’t vanish the moment you look away?</p><p>Here is <strong>one answer</strong>: I use Snapline Diary to turn moments worth pausing on into <strong>records on a timeline</strong> I can revisit; what truly needs long-term memory goes to the <strong>memory curve</strong> schedule.</p><p><strong>See if it matches your own habits</strong> — <strong>read a few paragraphs below</strong> and compare with how you usually scroll.</p>',
      share_title: 'Share this article',
      share_wechat_aria: 'WeChat Moments: scan QR to open in WeChat, then share',
      share_weibo_aria: 'Share to Weibo',
      share_douban_aria: 'Share to Douban',
      share_copy_aria: 'Copy link',
      share_x_aria: 'Share to X',
      share_facebook_aria: 'Share to Facebook',
      share_linkedin_aria: 'Share to LinkedIn',
      share_instagram_aria: 'Instagram: copy article link for use in the app',
      share_lbl_moments: 'Moments',
      share_lbl_weibo: 'Weibo',
      share_lbl_douban: 'Douban',
      share_lbl_copy: 'Copy link',
      share_lbl_x: 'X',
      share_lbl_facebook: 'Facebook',
      share_lbl_linkedin: 'LinkedIn',
      share_lbl_instagram: 'Instagram',
      share_copy: 'Copy link',
      share_wechat_modal_title: 'Share to WeChat Moments',
      share_wechat_tip:
        '<strong>Scan</strong> with WeChat to open this page in the in-app browser, then use the ··· menu to <strong>share to Moments</strong> or forward to a chat. You can also <strong>copy the link</strong> below and paste it into WeChat.<br><br><small>When opened in-app, the link can show title, summary, and a preview image (Open Graph on this page).<br><strong>Note:</strong> WeChat does <strong>not</strong> provide a public URL to jump from Safari/Chrome <strong>straight into the Moments composer</strong>—open this page inside WeChat first, then share via ···.</small>',
      share_instagram_toast:
        'Link copied.\n\nInstagram does not allow posting from websites: open the Instagram app and paste the link in your caption, bio, or the link sticker in Stories. Followers tap to open this page.',
      modal_close_aria: 'Close',
      share_copy_ok: 'Link copied',
      share_copy_fail: 'Could not copy — copy from the address bar',
    },
    es: {
      list_doc_title: 'Notas de uso · Snapline Diary',
      list_meta_desc:
        'Artículos largos del fundador: por qué está hecho así y cómo sacarle partido — serie actualizada con el tiempo.',
      part1_doc_title: 'Atención en la era de la fragmentación · Notas · Snapline Diary',
      part1_meta_desc:
        'Cuando los feeds fragmentan tu atención: guarda en la línea de tiempo lo que merece una pausa — iPhone, iPad, Mac, plantillas y curva de memoria.',
      part2_doc_title:
        '[Snapline Diary] Crear nodos: dos entradas, un flujo para convertir fragmentos en una línea de tiempo revisitable · Notas de uso · Snapline Diary',
      part2_meta_desc:
        'Guía completa para crear nodos: dos entradas (Extensión de compartir y + en Inicio), añadir fotos, reordenar portada, notas y enlaces, recomendaciones de etiquetas, edición rápida y guardado en Inicio.',
      appName: 'Snapline Diary',
      n_feat: 'Funciones',
      n_mem: 'Curva de memoria',
      n_case: 'Casos de uso',
      n_notes: 'Notas de uso',
      n_aud: '¿Para quién?',
      n_pro: 'Pro',
      n_faq: 'FAQ',
      n_dl: 'Descargar',
      ft_desc: 'Registra tu vida e inspiración cada día.',
      ft_prod: 'Producto',
      ft_feat: 'Funciones',
      ft_mem: 'Curva de memoria',
      ft_notes: 'Notas de uso',
      ft_pro: 'Pro',
      ft_dl: 'Descargar',
      ft_sup: 'Soporte',
      ft_faq: 'FAQ',
      ft_contact: 'Contacto',
      ft_priv: 'Privacidad',
      ft_lang: 'Idioma',
      ft_copy: '© 2026 Snapline Diary.',
      ft_priv2: 'Privacidad',
      ft_sup2: 'Soporte',
      nav_toggle_open: 'Abrir menú',
      nav_toggle_close: 'Cerrar menú',
      toast_coming:
        'La app está en revisión en el App Store. La descarga estará disponible al aprobarse. Gracias por tu interés.',
      art_back_site: 'Volver al sitio',
      art_app_store: 'App Store',
      art_notes_list: 'Todas las notas',
      art_crumb_official: 'Inicio',
      art_crumb_notes: 'Notas de uso',
      art_crumb_body: 'Artículo',
      art_ft_home: 'Inicio',
      art_ft_home_short: 'Inicio',
      art_ft_notes: 'Notas',
      art_ft_contact: 'Contacto',
      art_ft_support: 'Soporte',
      art_end_p: 'Funciones y precios en la web; descarga en App Store.',
      art_dl_btn: 'Descargar en App Store',
      art_back_home: 'Inicio',
      notes_eye: 'Notas de uso',
      notes_h: 'Ideas de uso<br><em>de la función al hábito</em>',
      notes_d:
        'De <strong>por qué está hecho así</strong> a <strong>métodos y hábitos de uso a largo plazo</strong> — artículos del fundador: <strong>relato y conclusiones</strong>, más <strong>pasos prácticos</strong>, actualizados con el tiempo.',
      notes_n1_series: 'Serie · Parte 1 · Panorama',
      notes_n1_t:
        'Atención en la era de la fragmentación: de «más vacío tras el scroll» a «cada vista cuenta» — con Snapline Diary, convierte el feed en nutriente para tu crecimiento personal',
      notes_n1_sum:
        'Con saturación de información y atención fragmentada: en lugar de forcejear con la pantalla, guarda en la línea de tiempo lo que merece una pausa.',
      notes_n1_meta: '~15 min',
      notes_n2_series: 'Serie · Parte 2 · Función',
      notes_n2_t: '[Snapline Diary] Crear nodos: dos entradas, un flujo para convertir fragmentos en una línea de tiempo revisitable',
      notes_n2_sum:
        'Desde Extensión de compartir y + en Inicio, explica añadir fotos, arrastrar portada, notas y enlaces, recomendaciones de etiquetas, edición rápida y guardado en Inicio.',
      notes_n2_meta: '~10 min',
      notes_n2_soon: '',
      notes_n3_series: 'Serie · Parte 3 · Función',
      notes_n3_t: 'Cómo se ve una entrada en un backup Pro',
      notes_n3_sum:
        'Campos de metadata.json frente a la UI: imágenes, notas, enlaces, etiquetas, multi-imagen y memoryCurveItems.',
      notes_n3_meta: '~15 min',
      notes_n3_soon: 'Próximamente',
      part1_h1:
        'Atención en la era de la fragmentación: de «más vacío tras el scroll» a «cada vista cuenta» — con Snapline Diary, convierte el feed en nutriente para tu crecimiento personal',
      part1_meta: 'Serie · Parte 1 · Panorama · ~15 min · 11 abr 2026',
      part2_h1:
        '[Snapline Diary] Crear nodos: dos entradas, un flujo para convertir fragmentos en una línea de tiempo revisitable',
      part2_meta: 'Serie · Parte 2 · Función · Crear nodos · ~10 min · 14 abr 2026',
      part1_lead:
        '<p>Vivimos una era de <strong>sobrecarga de información, ritmo extremo y atención troceada</strong> por algoritmos, tendencias y vídeos cortos.</p><p>¿A menudo, tras mucho scroll, te sientes no más satisfecho, sino <strong>más vacío</strong>?</p><p>Si <strong>no quieres depender solo de dejar la pantalla</strong>, ¿cómo <strong>recoger y guardar</strong> esa <strong>atención</strong> para que no se disipe?</p><p><strong>Una respuesta</strong>: uso Snapline Diary para convertir lo que merece una pausa en <strong>registros en una línea de tiempo</strong>; lo que debe quedar en memoria larga va a la <strong>curva de memoria</strong>.</p><p><strong>Compruébalo con tus hábitos</strong> — <strong>lee unos párrafos</strong> y compáralo con tu forma de deslizar.</p>',
      share_title: 'Compartir',
      share_wechat_aria: 'Momentos de WeChat: escanear QR y compartir',
      share_weibo_aria: 'Compartir en Weibo',
      share_douban_aria: 'Compartir en Douban',
      share_copy_aria: 'Copiar enlace',
      share_x_aria: 'Compartir en X',
      share_facebook_aria: 'Compartir en Facebook',
      share_linkedin_aria: 'Compartir en LinkedIn',
      share_instagram_aria: 'Instagram: copiar enlace para usar en la app',
      share_lbl_moments: 'Momentos',
      share_lbl_weibo: 'Weibo',
      share_lbl_douban: 'Douban',
      share_lbl_copy: 'Copiar',
      share_lbl_x: 'X',
      share_lbl_facebook: 'Facebook',
      share_lbl_linkedin: 'LinkedIn',
      share_lbl_instagram: 'Instagram',
      share_copy: 'Copiar enlace',
      share_wechat_modal_title: 'Compartir en Momentos (WeChat)',
      share_wechat_tip:
        '<strong>Escanea</strong> con WeChat para abrir en el navegador interno y usa el menú ··· para <strong>compartir en Momentos</strong> o reenviar. También puedes <strong>copiar el enlace</strong> y pegarlo en WeChat.<br><br><small>En WeChat, el enlace puede mostrar título, resumen e imagen (Open Graph).<br><strong>Nota:</strong> WeChat <strong>no ofrece</strong> un enlace público para abrir el editor de Momentos desde Safari/Chrome: abre primero la página dentro de WeChat y usa ···.</small>',
      share_instagram_toast:
        'Enlace copiado.\n\nInstagram no permite publicar desde la web: abre la app y pega el enlace en el pie de foto, la biografía o el sticker de enlace en Historias.',
      modal_close_aria: 'Cerrar',
      share_copy_ok: 'Enlace copiado',
      share_copy_fail: 'No se pudo copiar — copia desde la barra de dirección',
    },
    fr: {
      list_doc_title: 'Carnet d’usage · Snapline Diary',
      list_meta_desc:
        'Articles longs du fondateur : pourquoi l’app est conçue ainsi et comment bien l’utiliser — série mise à jour dans le temps.',
      part1_doc_title: 'Attention à l’ère de la fragmentation · Carnet · Snapline Diary',
      part1_meta_desc:
        'Quand les flux morcellent l’attention : enregistrez sur la chronologie ce qui mérite une pause — iPhone, iPad, Mac, modèles et courbe de mémoire.',
      part2_doc_title:
        '[Snapline Diary] Créer un nœud : deux entrées, un seul flux pour transformer les fragments en chronologie consultable · Carnet d’usage · Snapline Diary',
      part2_meta_desc:
        'Guide complet de création d’un nœud : deux entrées (extension de partage et + accueil), ajout de photos, réorganisation de la couverture, notes et liens, recommandations de tags, édition rapide et sauvegarde sur l’accueil.',
      appName: 'Snapline Diary',
      n_feat: 'Fonctionnalités',
      n_mem: 'Courbe de mémoire',
      n_case: "Cas d'usage",
      n_notes: "Carnet d'usage",
      n_aud: 'Pour qui ?',
      n_pro: 'Pro',
      n_faq: 'FAQ',
      n_dl: 'Télécharger',
      ft_desc: 'Capturez votre vie et vos inspirations chaque jour.',
      ft_prod: 'Produit',
      ft_feat: 'Fonctionnalités',
      ft_mem: 'Courbe',
      ft_notes: "Carnet d'usage",
      ft_pro: 'Pro',
      ft_dl: 'Télécharger',
      ft_sup: 'Support',
      ft_faq: 'FAQ',
      ft_contact: 'Contact',
      ft_priv: 'Confidentialité',
      ft_lang: 'Langue',
      ft_copy: '© 2026 Snapline Diary.',
      ft_priv2: 'Confidentialité',
      ft_sup2: 'Support',
      nav_toggle_open: 'Ouvrir le menu',
      nav_toggle_close: 'Fermer le menu',
      toast_coming:
        "L'application est en cours d'examen sur l'App Store. Le téléchargement sera ouvert après validation.",
      art_back_site: 'Retour au site',
      art_app_store: 'App Store',
      art_notes_list: 'Toutes les notes',
      art_crumb_official: 'Accueil',
      art_crumb_notes: 'Carnet d’usage',
      art_crumb_body: 'Article',
      art_ft_home: 'Accueil',
      art_ft_home_short: 'Accueil',
      art_ft_notes: 'Notes',
      art_ft_contact: 'Contact',
      art_ft_support: 'Assistance',
      art_end_p: 'Fonctions et tarifs sur le site, puis lien vers l’App Store.',
      art_dl_btn: 'Télécharger sur l’App Store',
      art_back_home: 'Accueil',
      notes_eye: 'Carnet d’usage',
      notes_h: 'Conseils d’usage<br><em>des fonctions aux habitudes</em>',
      notes_d:
        'De <strong>pourquoi c’est conçu ainsi</strong> aux <strong>méthodes et habitudes sur la durée</strong> — articles du fondateur : <strong>récit et pistes</strong>, plus <strong>gestes concrets</strong>, mis à jour.',
      notes_n1_series: 'Série · Partie 1 · Vue d’ensemble',
      notes_n1_t:
        'L’attention à l’ère de la fragmentation : de « plus vide après le scroll » à « chaque vue compte » — avec Snapline Diary, faites du fil une matière pour votre croissance personnelle',
      notes_n1_sum:
        'Surcharge d’infos et attention morcelée : plutôt que de lutter contre l’écran, enregistrez sur la chronologie ce qui mérite une pause.',
      notes_n1_meta: '~15 min',
      notes_n2_series: 'Série · Partie 2 · Fonction',
      notes_n2_t: '[Snapline Diary] Créer un nœud : deux entrées, un seul flux pour transformer les fragments en chronologie consultable',
      notes_n2_sum:
        'À partir de l’extension de partage et du + accueil : ajout de photos, couverture par glisser-déposer, notes et liens, recommandations de tags, édition rapide et sauvegarde sur l’accueil.',
      notes_n2_meta: '~10 min',
      notes_n2_soon: '',
      notes_n3_series: 'Série · Partie 3 · Fonction',
      notes_n3_t: 'À quoi ressemble une entrée dans une sauvegarde Pro',
      notes_n3_sum:
        'Champs metadata.json et interface : images, notes, liens, étiquettes, multi-images et memoryCurveItems.',
      notes_n3_meta: '~15 min',
      notes_n3_soon: 'Bientôt disponible',
      part1_h1:
        'L’attention à l’ère de la fragmentation : de « plus vide après le scroll » à « chaque vue compte » — avec Snapline Diary, faites du fil une matière pour votre croissance personnelle',
      part1_meta: 'Série · Partie 1 · Vue d’ensemble · ~15 min · 11 avr. 2026',
      part2_h1:
        '[Snapline Diary] Créer un nœud : deux entrées, un seul flux pour transformer les fragments en chronologie consultable',
      part2_meta: 'Série · Partie 2 · Fonction · Création de nœud · ~10 min · 14 avr. 2026',
      part1_lead:
        '<p>Nous vivons une époque de <strong>surcharge d’informations, rythme intense et attention découpée</strong> par algorithmes, tendances et vidéos courtes.</p><p>Souvent, après longtemps défiler, on n’est pas plus satisfait, mais <strong>plus vide</strong>.</p><p>Sans <strong>lutte frontale contre l’écran</strong>, comment <strong>recueillir et garder</strong> cette <strong>attention</strong> ?</p><p><strong>Une piste</strong> : avec Snapline Diary, je fige sur une <strong>chronologie</strong> ce qui mérite une pause ; ce qui doit entrer en mémoire longue passe par la <strong>courbe de mémoire</strong>.</p><p><strong>Voyez si cela vous parle</strong> — <strong>lisez quelques paragraphes</strong> et comparez à vos habitudes.</p>',
      share_title: 'Partager',
      share_wechat_aria: 'Moments WeChat : scanner le QR puis partager',
      share_weibo_aria: 'Partager sur Weibo',
      share_douban_aria: 'Partager sur Douban',
      share_copy_aria: 'Copier le lien',
      share_x_aria: 'Partager sur X',
      share_facebook_aria: 'Partager sur Facebook',
      share_linkedin_aria: 'Partager sur LinkedIn',
      share_instagram_aria: 'Instagram : copier le lien pour l’app',
      share_lbl_moments: 'Moments',
      share_lbl_weibo: 'Weibo',
      share_lbl_douban: 'Douban',
      share_lbl_copy: 'Copier',
      share_lbl_x: 'X',
      share_lbl_facebook: 'Facebook',
      share_lbl_linkedin: 'LinkedIn',
      share_lbl_instagram: 'Instagram',
      share_copy: 'Copier le lien',
      share_wechat_modal_title: 'Partager dans Moments (WeChat)',
      share_wechat_tip:
        '<strong>Scannez</strong> avec WeChat pour ouvrir dans le navigateur intégré, puis le menu ··· pour <strong>partager dans Moments</strong> ou transférer. Vous pouvez aussi <strong>copier le lien</strong> ci-dessous.<br><br><small>Dans WeChat, le lien peut afficher titre, résumé et aperçu (Open Graph).<br><strong>Remarque :</strong> WeChat <strong>ne fournit pas</strong> d’URL publique pour ouvrir la rédaction des Moments depuis Safari/Chrome : ouvrez d’abord la page dans WeChat, puis ···.</small>',
      share_instagram_toast:
        'Lien copié.\n\nInstagram ne permet pas de publier depuis le site : ouvrez l’app et collez le lien dans la légende, la bio ou le sticker lien des Stories.',
      modal_close_aria: 'Fermer',
      share_copy_ok: 'Lien copié',
      share_copy_fail: 'Échec — copiez depuis la barre d’adresse',
    },
    ru: {
      list_doc_title: 'Заметки об использовании · Snapline Diary',
      list_meta_desc:
        'Развёрнутые заметки создателя: зачем приложение сделано так и как им пользоваться — серия со временем обновляется.',
      part1_doc_title: 'Внимание в эпоху фрагментации · Заметки · Snapline Diary',
      part1_meta_desc:
        'Когда лента рассыпает внимание: сохраняйте в таймлайне то, на чём стоит остановиться — iPhone, iPad, Mac, шаблоны и кривая памяти.',
      part2_doc_title:
        '[Snapline Diary] Создание записи: два входа, один поток, чтобы превратить фрагменты в таймлайн для повторного просмотра · Заметки · Snapline Diary',
      part2_meta_desc:
        'Полный разбор создания записи: два входа (Share Extension и + на главной), добавление фото, выбор обложки перетаскиванием, заметки и ссылки, рекомендации тегов, быстрые кнопки и сохранение на главную.',
      appName: 'Snapline Diary',
      n_feat: 'Функции',
      n_mem: 'Кривая памяти',
      n_case: 'Применение',
      n_notes: 'Заметки об использовании',
      n_aud: 'Кому подойдёт',
      n_pro: 'Pro',
      n_faq: 'FAQ',
      n_dl: 'Скачать',
      ft_desc: 'Записывайте жизнь и вдохновение каждый день.',
      ft_prod: 'Продукт',
      ft_feat: 'Функции',
      ft_mem: 'Кривая памяти',
      ft_notes: 'Заметки об использовании',
      ft_pro: 'Pro',
      ft_dl: 'Скачать',
      ft_sup: 'Поддержка',
      ft_faq: 'FAQ',
      ft_contact: 'Контакты',
      ft_priv: 'Конфиденциальность',
      ft_lang: 'Язык',
      ft_copy: '© 2026 Snapline Diary.',
      ft_priv2: 'Конфиденциальность',
      ft_sup2: 'Поддержка',
      nav_toggle_open: 'Открыть меню',
      nav_toggle_close: 'Закрыть меню',
      toast_coming:
        'Приложение проходит проверку в App Store. Загрузка откроется после одобрения.',
      art_back_site: 'На сайт',
      art_app_store: 'App Store',
      art_notes_list: 'Все заметки',
      art_crumb_official: 'Главная',
      art_crumb_notes: 'Заметки об использовании',
      art_crumb_body: 'Статья',
      art_ft_home: 'Главная',
      art_ft_home_short: 'Сайт',
      art_ft_notes: 'Заметки',
      art_ft_contact: 'Связаться',
      art_ft_support: 'Поддержка',
      art_end_p: 'Функции и цены на сайте, затем переход в App Store.',
      art_dl_btn: 'Скачать в App Store',
      art_back_home: 'На главную',
      notes_eye: 'Заметки об использовании',
      notes_h: 'Опыт использования<br><em>от функций к привычкам</em>',
      notes_d:
        'От <strong>зачем сделано именно так</strong> к <strong>методам и привычкам при длительном использовании</strong> — заметки создателя: <strong>история и выводы</strong> и <strong>конкретные шаги</strong>, обновляются со временем.',
      notes_n1_series: 'Серия · Часть 1 · Обзор',
      notes_n1_t:
        'Внимание в эпоху фрагментации: от «пустее после ленты» к «каждый просмотр на счету» — Snapline Diary превращает поток в питание для личного роста',
      notes_n1_sum:
        'Перегруз информации и рассыпанное внимание: вместо борьбы с экраном сохраняйте в таймлайне то, на чём стоит остановиться.',
      notes_n1_meta: '~15 мин',
      notes_n2_series: 'Серия · Часть 2 · Функция',
      notes_n2_t: '[Snapline Diary] Создание записи: два входа, один поток, чтобы превратить фрагменты в таймлайн для повторного просмотра',
      notes_n2_sum:
        'От Share Extension и + на главной: добавление фото, обложка перетаскиванием, заметки и ссылки, рекомендации тегов, быстрые правки и сохранение в ленту главной.',
      notes_n2_meta: '~10 мин',
      notes_n2_soon: '',
      notes_n3_series: 'Серия · Часть 3 · Функция',
      notes_n3_t: 'Как выглядит запись в Pro-резервной копии',
      notes_n3_sum:
        'Поля metadata.json и интерфейс: изображения, заметки, ссылки, теги, несколько фото и memoryCurveItems.',
      notes_n3_meta: '~15 мин',
      notes_n3_soon: 'Скоро',
      part1_h1:
        'Внимание в эпоху фрагментации: от «пустее после ленты» к «каждый просмотр на счету» — Snapline Diary превращает поток в питание для личного роста',
      part1_meta: 'Серия · Часть 1 · Обзор · ~15 мин · 11 апр. 2026',
      part2_h1:
        '[Snapline Diary] Создание записи: два входа, один поток, чтобы превратить фрагменты в таймлайн для повторного просмотра',
      part2_meta: 'Серия · Часть 2 · Функция · Создание записи · ~10 мин · 14 апр. 2026',
      part1_lead:
        '<p>Мы живём в эпоху <strong>перегруза информацией, сумасшедшего темпа и внимания, нарезанного</strong> алгоритмами, трендами и короткими видео.</p><p>Часто после долгого скролла чувствуешь не насыщение, а <strong>пустоту</strong>.</p><p>Если <strong>не опираться только на отказ от экрана</strong>, как <strong>собрать и удержать</strong> это <strong>внимание</strong>?</p><p><strong>Один ответ</strong>: я использую Snapline Diary, чтобы превращать моменты, на которых стоит остановиться, в <strong>записи на таймлайне</strong>; то, что нужно в долгую память, — в <strong>кривую памяти</strong>.</p><p><strong>Проверьте на своих привычках</strong> — <strong>прочитайте несколько абзацев</strong> ниже.</p>',
      share_title: 'Поделиться',
      share_wechat_aria: 'Моменты WeChat: сканировать QR и поделиться',
      share_weibo_aria: 'Поделиться в Weibo',
      share_douban_aria: 'Поделиться в Douban',
      share_copy_aria: 'Копировать ссылку',
      share_x_aria: 'Поделиться в X',
      share_facebook_aria: 'Поделиться в Facebook',
      share_linkedin_aria: 'Поделиться в LinkedIn',
      share_instagram_aria: 'Instagram: скопировать ссылку для приложения',
      share_lbl_moments: 'Моменты',
      share_lbl_weibo: 'Weibo',
      share_lbl_douban: 'Douban',
      share_lbl_copy: 'Ссылка',
      share_lbl_x: 'X',
      share_lbl_facebook: 'Facebook',
      share_lbl_linkedin: 'LinkedIn',
      share_lbl_instagram: 'Instagram',
      share_copy: 'Копировать ссылку',
      share_wechat_modal_title: 'Поделиться в «Моментах» (WeChat)',
      share_wechat_tip:
        '<strong>Отсканируйте</strong> камерой WeChat, откройте страницу во встроенном браузере и через меню ··· выберите <strong>«Моменты»</strong> или пересылку в чат. Либо <strong>скопируйте ссылку</strong> ниже и вставьте в WeChat.<br><br><small>В WeChat ссылка может показать заголовок, описание и превью (Open Graph).<br><strong>Важно:</strong> WeChat <strong>не даёт</strong> публичной ссылки, чтобы из Safari/Chrome <strong>сразу открыть экран публикации в «Моментах»</strong> — сначала откройте страницу внутри WeChat, затем ···.</small>',
      share_instagram_toast:
        'Ссылка скопирована.\n\nInstagram не публикует с сайта: откройте приложение и вставьте ссылку в подпись, профиль или стикер ссылки в Stories.',
      modal_close_aria: 'Закрыть',
      share_copy_ok: 'Ссылка скопирована',
      share_copy_fail: 'Не удалось скопировать — скопируйте из адресной строки',
    },
  };

  let lang = readStoredLang() || detectBrowserLang();

  function s(k) {
    const dict = STR[lang] || STR.zh;
    if (dict[k] !== undefined) return dict[k];
    return STR.zh[k] !== undefined ? STR.zh[k] : k;
  }

  function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const v = s(key);
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      const v = s(key);
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      if (k) el.setAttribute('aria-label', s(k));
    });
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
    var cur = document.getElementById('cur-lang-lbl');
    if (cur) {
      var labels = { zh: '中文', en: 'English', es: 'Español', fr: 'Français', ru: 'Русский' };
      cur.textContent = labels[lang] || lang;
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
    document.body.classList.remove('art-lang-zh', 'art-lang-en', 'art-lang-es', 'art-lang-fr', 'art-lang-ru');
    document.body.classList.add('art-lang-' + lang);

    document.querySelectorAll('meta[name="description"][data-i18n-content]').forEach(function (meta) {
      var k = meta.getAttribute('data-i18n-content');
      if (k) meta.setAttribute('content', s(k));
    });
    if (typeof window.refreshSiteChromeI18n === 'function') window.refreshSiteChromeI18n();
  }

  function setLang(l) {
    if (!LANG_KEYS.includes(l) || l === lang) return;
    lang = l;
    try {
      localStorage.setItem(LANG_STORE, lang);
    } catch (_) {}
    applyLang();
  }

  function initArticleShare() {
    if (!document.querySelector('.art-share')) return;

    var modal = document.getElementById('wx-share-modal');
    var qrImg = document.getElementById('wx-share-qr');
    var toast = document.getElementById('art-share-toast');
    /** 以 canonical 为准，缺省时回退当前 URL */
    var canonicalEl = document.querySelector('link[rel="canonical"]');
    var SHARE_ARTICLE_URL = (canonicalEl && canonicalEl.href) || location.href;

    function getMetaDescription() {
      var m = document.querySelector('meta[name="description"]');
      return (m && m.getAttribute('content')) || '';
    }

    function showToast(msg, opts) {
      opts = opts || {};
      var ms = opts.ms != null ? opts.ms : 2200;
      if (!toast) {
        window.alert(msg);
        return;
      }
      toast.textContent = msg;
      toast.classList.toggle('art-share-toast--long', !!opts.long);
      toast.classList.add('show');
      clearTimeout(showToast._t);
      showToast._t = setTimeout(function () {
        toast.classList.remove('show');
        toast.classList.remove('art-share-toast--long');
      }, ms);
    }

    function fallbackCopy(text) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        showToast(ok ? s('share_copy_ok') : s('share_copy_fail'));
      } catch (_) {
        showToast(s('share_copy_fail'));
      }
    }

    function copyPageUrl() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(SHARE_ARTICLE_URL).then(
          function () {
            showToast(s('share_copy_ok'));
          },
          function () {
            fallbackCopy(SHARE_ARTICLE_URL);
          }
        );
      } else {
        fallbackCopy(SHARE_ARTICLE_URL);
      }
    }

    function copyForInstagram() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(SHARE_ARTICLE_URL).then(
          function () {
            showToast(s('share_instagram_toast'), { ms: 5200, long: true });
          },
          function () {
            try {
              var ta = document.createElement('textarea');
              ta.value = SHARE_ARTICLE_URL;
              ta.setAttribute('readonly', '');
              ta.style.position = 'fixed';
              ta.style.left = '-9999px';
              document.body.appendChild(ta);
              ta.select();
              var ok = document.execCommand('copy');
              document.body.removeChild(ta);
              if (ok) showToast(s('share_instagram_toast'), { ms: 5200, long: true });
              else showToast(s('share_copy_fail'));
            } catch (_) {
              showToast(s('share_copy_fail'));
            }
          }
        );
      } else {
        try {
          var ta2 = document.createElement('textarea');
          ta2.value = SHARE_ARTICLE_URL;
          ta2.setAttribute('readonly', '');
          ta2.style.position = 'fixed';
          ta2.style.left = '-9999px';
          document.body.appendChild(ta2);
          ta2.select();
          var ok2 = document.execCommand('copy');
          document.body.removeChild(ta2);
          if (ok2) showToast(s('share_instagram_toast'), { ms: 5200, long: true });
          else showToast(s('share_copy_fail'));
        } catch (_) {
          showToast(s('share_copy_fail'));
        }
      }
    }

    function closeWechatModal() {
      if (!modal) return;
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function openWechatModal() {
      if (!modal || !qrImg) return;
      var titleText = '';
      var h1 = document.querySelector('h1.art-h1');
      if (h1) titleText = h1.textContent.trim();
      qrImg.src =
        'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' +
        encodeURIComponent(SHARE_ARTICLE_URL);
      qrImg.alt = titleText || s('appName');
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    document.body.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-share]');
      if (!btn) return;
      var k = btn.getAttribute('data-share');
      var titleText = '';
      var h1 = document.querySelector('h1.art-h1');
      if (h1) titleText = h1.textContent.trim();
      if (!titleText) titleText = s('appName');

      var summary = getMetaDescription().trim();
      if (summary.length > 220) summary = summary.slice(0, 217) + '…';

      if (k === 'copy') {
        e.preventDefault();
        copyPageUrl();
        closeWechatModal();
        return;
      }
      if (k === 'wechat') {
        e.preventDefault();
        openWechatModal();
        return;
      }
      if (k === 'instagram') {
        e.preventDefault();
        copyForInstagram();
        return;
      }

      var excerpt = summary || titleText;
      if (excerpt.length > 100) excerpt = excerpt.slice(0, 97) + '…';
      var tweetText = titleText + '\n\n' + excerpt + '\n\n' + SHARE_ARTICLE_URL;
      if (tweetText.length > 268) tweetText = titleText + '\n\n' + SHARE_ARTICLE_URL;

      var liSummary = summary || titleText;
      if (liSummary.length > 200) liSummary = liSummary.slice(0, 197) + '…';

      var links = {
        weibo:
          'http://service.weibo.com/share/share.php?url=' +
          encodeURIComponent(SHARE_ARTICLE_URL) +
          '&title=' +
          encodeURIComponent(titleText),
        douban:
          'https://www.douban.com/share/service?href=' +
          encodeURIComponent(SHARE_ARTICLE_URL) +
          '&name=' +
          encodeURIComponent(titleText),
        x: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText),
        facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(SHARE_ARTICLE_URL),
        linkedin:
          'https://www.linkedin.com/shareArticle?mini=true&url=' +
          encodeURIComponent(SHARE_ARTICLE_URL) +
          '&title=' +
          encodeURIComponent(titleText) +
          '&summary=' +
          encodeURIComponent(liSummary) +
          '&source=' +
          encodeURIComponent(s('appName')),
      };

      var u = links[k];
      if (u) window.open(u, '_blank', 'noopener,noreferrer,width=640,height=520');
    });

    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-wx-close]')) closeWechatModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && !modal.hidden) closeWechatModal();
    });
  }

  function boot() {
    var fromUrl = langFromUrl();
    if (fromUrl) {
      lang = fromUrl;
      try {
        localStorage.setItem(LANG_STORE, lang);
      } catch (_) {}
    }
    applyLang();
    initArticleShare();
  }

  window.setLang = setLang;
  window.applyLang = applyLang;
  window.getSnaplineStr = s;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
