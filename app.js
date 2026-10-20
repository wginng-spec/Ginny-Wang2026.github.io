/* ============================================================
   汪静怡 · 个人网站
   两种皮肤（minimal / pop）× 两种语言（zh / en）× 四套配色
   ============================================================ */

var CONTENT = {
  zh: {
    name: '汪静怡',
    en: 'Ginny Wang',
    role: '商务售后 · 芜湖禾田汽车工业有限公司',
    lede: [
      '学经济统计，做汽车零部件外贸售后。',
      '日常和 PI、装箱单、发货清单打交道，也在试着把这些反复核对的活儿交给表格和 AI。'
    ],
    bio2: '2026 年从安徽大学经济统计专业毕业，现在负责客户订单跟进、外贸单据制作与核对、发货与库存协同，同时推进 TRW 仓储管理系统在现场的落地。几年统计训练下来，我对"数字对不对"格外敏感——工作里最耗人的往往不是难事，而是几十行订单和发货清单之间的逐条核对，所以我一直在把能自动化的部分交出去。',
    focus: ['外贸单据流程自动化', 'AI 工具在业务中的落地', '仓储发货与库存协同'],
    eduShort: ['安徽大学 · 经济统计（本科）', '2022.09 — 2026.07 · GPA 3.68/5.0'],
    banner: '欢迎来到我的个人主页。',
    hi: 'hi，这里是',
    stickers: ['外贸打工人', '单据核对狂', 'AI 上头选手'],
    shout: '终于把这玩意儿从 0 到 1 搭出来了。学经济统计，现在做汽车零部件外贸售后，每天和 PI、装箱单、发货清单打架。',
    chips: ['2026 届', '安徽大学', '芜湖', 'GPA 3.68'],
    marquee: ['订单核对到眼花', '发货差一件就爆炸', '用 AI 偷懒中', 'EXCEL 是我的第二大脑'],
    nav: { about: '关于', exp: '经历', works: '作品', skills: '技能', contact: '联系' },
    sections: {
      about: '关于',
      exp: '工作经历',
      works: '做过的事',
      edu: '教育背景',
      skills: '技能',
      contact: '联系'
    },
    aboutTitle: '人类样本说明书',
    about: [
      '我在汽车零部件外贸行业做商务售后，服务的方向是"订单进来之后，货准确发出去"。工作内容看着琐碎，但每一环都直接影响客户体验：单据数字错一位，后面就要返工；发货数量差一件，客户就会来问。',
      '统计专业给我的不是公式，而是一种习惯：先确认口径，再动手算；先找差异在哪，再决定怎么处理。这套习惯用在核对订单和发货清单上，效果意外地好。'
    ],
    creed: '能交给表格和 AI 的，绝不用手。',
    exp: [
      {
        title: '商务售后', when: '2026.06 — 至今', org: '芜湖禾田汽车工业有限公司',
        live: true,
        points: [
          '负责客户订单跟进与外贸单据（PI / PO / 装箱单）的制作、核对，对接发货进度与库存协同。',
          '从一线使用视角推进 TRW 仓储管理系统（扫码发货）的落地与优化：出库确认、库位推荐、盘点准确率等环节出现卡点时自行修复并优化，再跟进效果。',
          '用表格与 AI 工具搭建订单—发货清单的批量比对流程，把原来逐条人工核对的工作自动化。'
        ]
      },
      {
        title: '助理人力资源专员（实习）', when: '2026.01 — 2026.03', org: '科大讯飞',
        points: [
          '结合业务需求梳理岗位画像，独立安排面试 100+ 场次，与 200+ 位候选人沟通意向，推动 10 余人进入终面。',
          '用 Excel 维护招聘数据日报，协助新员工入职资料整理与档案维护。'
        ]
      },
      {
        title: '实习生', when: '2024.06 — 2024.08', org: '芜湖市湾沚区图书馆',
        points: ['负责读者咨询、文献查找与信息检索，参与文献整理与设备操作维护。']
      }
    ],
    works: [
      { title: '发货清单自动核对', meta: '', desc: '把客户订单与发货清单放在一起，用表格规则自动逐行比对，标出数量差异、缺漏和多发项，输出一份可以直接用的对比报告——原来要逐条对一下午的事，现在几分钟出结果。' },
      { title: 'TRW 仓储管理系统落地', meta: '', desc: '从一线使用视角参与系统落地优化：扫码出库、库位推荐、盘点流程在真实发货场景里跑通，遇到卡点自行修复并优化，再跟进修复效果。系统好不好用，发货时最清楚。' },
      { title: '这个网站本身', meta: '', desc: '从写文案、调样式到 GitHub 托管部署，全程用 AI 辅助完成——也是我"把重复劳动交给工具"的一次实践。' },
      { title: '数字金融与农业绿色全要素生产率', meta: '省级大学生创新创业项目 · 核心成员 · 2023.12 — 2025.04', desc: '基于北京大学数字普惠金融指数测算长三角地区农业绿色全要素生产率，结合统计年鉴、EPS 数据库做实证分析，产出区域差异与政策建议。' }
    ],
    edu: {
      school: '安徽大学 · 经济统计（本科）',
      when: '2022.09 — 2026.07',
      meta: '大数据与统计学院 · GPA 3.68 / 5.0',
      points: [
        '主修：数学分析 95 · 概率论与数理统计 94 · 微观经济学 94 · 统计学 92 · 市场调查与预测 91 · 计量经济学 90',
        '荣誉：安徽大学学习优秀奖学金（2023、2024、2025）；社会暑期实践先进个人（2023）'
      ]
    },
    skills: [
      ['外贸业务', 'PI / PO · 装箱单 · 订单跟进 · 发货协同'],
      ['数据与表格', 'Excel 批量比对 · 飞书多维表格 · SPSS'],
      ['编程与统计', 'Python · R · C（课程 / 项目级）'],
      ['工具与 AI', '豆包 · WorkBuddy · 提示词实操'],
      ['语言与证书', 'CET-6（527）· CET-4（537）· 普通话']
    ],
    contactText: '如果你也在做外贸单据、仓储协同，或者对"怎么把重复活儿自动化"感兴趣，欢迎聊聊。',
    email: 'wginng@gmail.com',
    loc: '安徽 · 芜湖',
    footer: '© 2026 汪静怡 · Made with AI & GitHub Pages',
    ui: { minimal: '极简', pop: '多巴胺', zh: '中文', en: 'EN' }
  },

  en: {
    name: 'Ginny Wang',
    en: '汪静怡',
    role: 'After-sales Specialist · Wuhu Hetian Auto Industry Co., Ltd.',
    lede: [
      'Economics & statistics graduate, now in after-sales for auto-parts export.',
      'My days revolve around PIs, packing lists and shipping sheets — and I keep handing the repetitive checking over to spreadsheets and AI.'
    ],
    bio2: 'I graduated from Anhui University in 2026 with a degree in Economic Statistics. Today I handle order follow-up, export documentation, shipping and inventory coordination, and I drive the on-site rollout of the TRW warehouse management system. Statistics trained me to be picky about numbers: the exhausting part of the job is rarely the hard part — it is checking dozens of order lines against the shipping list, one by one. So I keep automating what can be automated.',
    focus: ['Automation of export documentation', 'Putting AI tools to real business use', 'Warehouse shipping & inventory coordination'],
    eduShort: ['Anhui University · Economic Statistics (BSc)', '2022.09 — 2026.07 · GPA 3.68/5.0'],
    banner: 'Welcome to my personal website.',
    hi: 'hi, this is',
    stickers: ['Trade desk', 'List-checker', 'AI enthusiast'],
    shout: 'Finally shipped this thing from 0 to 1. I studied economic statistics and now work in after-sales for auto-parts export — wrestling PIs, packing lists and shipping sheets every day.',
    chips: ['Class of 2026', 'Anhui University', 'Wuhu', 'GPA 3.68'],
    marquee: ['Eyes burnt from checking lists', 'One piece short and it explodes', 'Automating with AI', 'Excel is my second brain'],
    nav: { about: 'About', exp: 'Experience', works: 'Work', skills: 'Skills', contact: 'Contact' },
    sections: {
      about: 'About',
      exp: 'Experience',
      works: 'Selected work',
      edu: 'Education',
      skills: 'Skills',
      contact: 'Contact'
    },
    aboutTitle: 'Owner\u2019s manual',
    about: [
      'I work in after-sales for an auto-parts exporter, which really means: once an order comes in, the goods have to go out correctly. It looks like small stuff, but every step hits the customer — one wrong figure in a document means rework, one missing piece means a phone call.',
      'My statistics training did not give me formulas so much as a habit: confirm the definition first, then calculate; find where the difference is, then decide what to do. That habit turns out to work surprisingly well on order-versus-shipping-list reconciliation.'
    ],
    creed: 'If a spreadsheet or an AI can do it, my hands do not.',
    exp: [
      {
        title: 'After-sales Specialist', when: 'Jun 2026 — Present', org: 'Wuhu Hetian Auto Industry Co., Ltd.',
        live: true,
        points: [
          'Own order follow-up and export documentation (PI / PO / packing list), coordinating shipping schedules and inventory.',
          'Drive rollout and improvement of the TRW warehouse management system (barcode shipping) from the frontline: fixing and optimising outbound confirmation, location suggestions and stocktake accuracy myself when they break, then verifying the outcome.',
          'Built a batch reconciliation flow for orders versus shipping lists with spreadsheets and AI, replacing line-by-line manual checking.'
        ]
      },
      {
        title: 'HR Assistant (Intern)', when: 'Jan 2026 — Mar 2026', org: 'iFLYTEK',
        points: [
          'Scheduled 100+ interviews and spoke with 200+ candidates, moving more than 10 into final rounds.',
          'Maintained the recruiting dashboard in Excel; supported onboarding paperwork and personnel files.'
        ]
      },
      {
        title: 'Intern', when: 'Jun 2024 — Aug 2024', org: 'Wanzhi District Library, Wuhu',
        points: ['Reader enquiries, literature search, document organising and equipment maintenance.']
      }
    ],
    works: [
      { title: 'Automated shipping-list reconciliation', meta: '', desc: 'Orders and shipping lists go in, line-by-line differences come out — shortages, extras, mismatched quantities — with a report ready to send. What used to take an afternoon now takes minutes.' },
      { title: 'TRW warehouse system rollout', meta: '', desc: 'Joined the rollout from the frontline and kept improving it: got barcode outbound, location suggestions and stocktaking working in real shipping operations, fixed and optimised blockers myself, then verified the result. You only learn whether a system works when the truck is waiting.' },
      { title: 'This website', meta: '', desc: 'Copy, styling and GitHub deployment, all done with AI assistance — one more experiment in handing repetitive work to tools.' },
      { title: 'Digital finance & agricultural green TFP', meta: 'Provincial innovation programme · Core member · Dec 2023 — Apr 2025', desc: 'Measured agricultural green total factor productivity across the Yangtze River Delta using Peking University\u2019s Digital Financial Inclusion Index, with empirical analysis on statistical yearbooks and the EPS database.' }
    ],
    edu: {
      school: 'Anhui University · Economic Statistics (BSc)',
      when: 'Sep 2022 — Jul 2026',
      meta: 'School of Big Data and Statistics · GPA 3.68 / 5.0',
      points: [
        'Core courses: Mathematical Analysis 95 · Probability & Statistics 94 · Microeconomics 94 · Statistics 92 · Market Research & Forecasting 91 · Econometrics 90',
        'Honours: Academic Excellence Scholarship (2023, 2024, 2025); Outstanding Individual in Summer Social Practice (2023)'
      ]
    },
    skills: [
      ['Foreign trade', 'PI / PO · Packing lists · Order follow-up · Shipping coordination'],
      ['Data & spreadsheets', 'Excel reconciliation · Feishu Bitable · SPSS'],
      ['Programming', 'Python · R · C (coursework / project level)'],
      ['Tools & AI', 'Doubao · WorkBuddy · Prompt engineering'],
      ['Languages', 'CET-6 (527) · CET-4 (537) · Mandarin']
    ],
    contactText: 'If you work with export documents, warehouse coordination, or just want to stop doing repetitive work by hand — say hello.',
    email: 'wginng@gmail.com',
    loc: 'Wuhu, Anhui · China',
    footer: '© 2026 Ginny Wang · Made with AI & GitHub Pages',
    ui: { minimal: 'Minimal', pop: 'Pop', zh: '中文', en: 'EN' }
  }
};

/* ---------------- 状态 ---------------- */

var PALETTES = ['lemon', 'peach', 'mint', 'violet'];
var state = { skin: 'minimal', lang: 'zh', theme: 'lemon', photo: 'id' };

function readStore(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function writeStore(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

(function initState() {
  var q = new URLSearchParams(location.search);
  var skin = q.get('skin') || readStore('wb-skin');
  var lang = q.get('lang') || readStore('wb-lang');
  var theme = q.get('theme') || readStore('wb-theme');
  if (skin === 'minimal' || skin === 'pop') state.skin = skin;
  if (lang === 'zh' || lang === 'en') state.lang = lang;
  if (PALETTES.indexOf(theme) >= 0) state.theme = theme;
  var photo = q.get('photo');
  if (photo === 'life' || photo === 'id') state.photo = photo;
})();

/* ---------------- 渲染：极简风 ---------------- */

function renderMinimal(t) {
  var expHtml = t.exp.map(function (e) {
    return '' +
      '<div class="entry">' +
        '<div class="entry-head"><h3>' + e.title + '</h3><span class="when">' + e.when + '</span></div>' +
        '<p class="org">' + e.org + '</p>' +
        '<ul class="points">' + e.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
      '</div>';
  }).join('');

  var worksHtml = t.works.map(function (w) {
    return '' +
      '<div class="entry">' +
        '<h3>' + w.title + '</h3>' +
        (w.meta ? '<p class="meta">' + w.meta + '</p>' : '') +
        '<p class="desc">' + w.desc + '</p>' +
      '</div>';
  }).join('');

  return '' +
  '<nav class="m-nav">' +
    '<a class="m-name" href="#top">' + t.name + '</a>' +
    '<div class="m-links">' +
      '<a href="#about">' + t.sections.about + '</a>' +
      '<a href="#exp">' + t.sections.exp + '</a>' +
      '<a href="#works">' + t.sections.works + '</a>' +
      '<a href="#edu">' + t.sections.edu + '</a>' +
      '<a href="#contact">' + t.sections.contact + '</a>' +
    '</div>' +
  '</nav>' +

  '<div class="m-banner" id="top"><p>' + t.banner + '</p></div>' +

  '<div class="m-page">' +
    '<section class="m-profile m-card">' +
      '<div class="m-photo-col">' +
        '<figure class="m-portrait">' +
          '<span class="m-monogram">汪</span>' +
          '<img class="m-photo" src="photo-' + state.photo + '.jpg" alt="' + t.name + '" onerror="this.remove()">' +
        '</figure>' +
        '<div class="m-photo-switch">' +
          '<button data-photo="id" class="' + (state.photo === 'id' ? 'on' : '') + '">' + (state.lang === 'zh' ? '证件照' : 'Formal') + '</button>' +
          '<button data-photo="life" class="' + (state.photo === 'life' ? 'on' : '') + '">' + (state.lang === 'zh' ? '生活照' : 'Casual') + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="m-profile-text">' +
        '<h1>' + t.name + '<span class="m-en">' + t.en + '</span></h1>' +
        '<p class="m-role">' + t.role + '</p>' +
        '<p class="m-bio">' + t.lede.join(' ') + '</p>' +
        '<p class="m-bio">' + t.bio2 + '</p>' +
        '<div class="m-mini">' +
          '<div><p class="m-mini-label">' + t.sections.about + '</p><ul>' +
            t.focus.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul></div>' +
          '<div><p class="m-mini-label">' + t.sections.edu + '</p><ul>' +
            t.eduShort.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul></div>' +
        '</div>' +
        '<div class="m-links-row">' +
          '<a href="mailto:' + t.email + '">' + t.email + '</a>' +
          '<a href="#contact">' + t.sections.contact + ' ↓</a>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="m-block" id="about">' +
      '<h2>' + t.sections.about + '</h2>' +
      '<div class="m-card m-body">' +
        '<p class="m-para"><strong>' + t.aboutTitle + '</strong></p>' +
        t.about.map(function (p) { return '<p class="m-para">' + p + '</p>'; }).join('') +
      '</div>' +
    '</section>' +

    '<section class="m-block" id="exp">' +
      '<h2>' + t.sections.exp + '</h2>' +
      '<div class="m-card m-body">' + expHtml + '</div>' +
    '</section>' +

    '<section class="m-block" id="works">' +
      '<h2>' + t.sections.works + '</h2>' +
      '<div class="m-card m-body">' + worksHtml + '</div>' +
    '</section>' +

    '<section class="m-block" id="edu">' +
      '<h2>' + t.sections.edu + '</h2>' +
      '<div class="m-card m-body">' +
        '<div class="entry">' +
          '<div class="entry-head"><h3>' + t.edu.school + '</h3><span class="when">' + t.edu.when + '</span></div>' +
          '<p class="org">' + t.edu.meta + '</p>' +
          '<ul class="points">' + t.edu.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="m-block" id="skills">' +
      '<h2>' + t.sections.skills + '</h2>' +
      '<div class="m-card m-body">' +
        '<dl class="m-skills">' + t.skills.map(function (s) {
          return '<div><dt>' + s[0] + '</dt><dd>' + s[1] + '</dd></div>';
        }).join('') + '</dl>' +
      '</div>' +
    '</section>' +

    '<section class="m-block" id="contact">' +
      '<h2>' + t.sections.contact + '</h2>' +
      '<div class="m-card m-body">' +
        '<p class="m-para">' + t.contactText + '</p>' +
        '<ul class="m-contact">' +
          '<li><span>Email</span><a href="mailto:' + t.email + '">' + t.email + '</a></li>' +
          '<li><span>' + (state.lang === 'zh' ? '所在地' : 'Based in') + '</span><em>' + t.loc + '</em></li>' +
        '</ul>' +
      '</div>' +
    '</section>' +

    '<footer class="m-foot"><p>' + t.footer + '</p></footer>' +
  '</div>';
}

/* ---------------- 渲染：多巴胺风 ---------------- */

function renderPop(t) {
  var tabs = ['about', 'exp', 'works', 'skills', 'contact'].map(function (k, i) {
    return '<button class="p-tab' + (i === 0 ? ' on' : '') + '" data-panel="' + k + '">' + t.nav[k] + '</button>';
  }).join('');

  var stickers = t.stickers.map(function (s, i) {
    return '<span class="p-sticker p-s' + (i + 1) + '">' + s + '</span>';
  }).join('');

  var marquee = t.marquee.concat(t.marquee).map(function (m) {
    return '<span>' + m + '</span><i>✦</i>';
  }).join('');

  var expCards = t.exp.map(function (e) {
    return '<div class="p-card p-job">' +
      '<div class="p-job-top"><h3>' + e.title + '</h3>' +
        (e.live ? '<span class="p-tag p-live">' + (state.lang === 'zh' ? '进行中' : 'Now') + '</span>'
                : '<span class="p-tag">' + e.when + '</span>') + '</div>' +
      '<p class="p-org">' + e.org + (e.live ? ' · ' + e.when : '') + '</p>' +
      '<ul>' + e.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
    '</div>';
  }).join('');

  var workCards = t.works.slice(0, 4).map(function (w, i) {
    return '<article class="p-card p-work p-w' + (i + 1) + '">' +
      '<h3>' + w.title + '</h3><p>' + w.desc + '</p></article>';
  }).join('');

  return '' +
  '<div class="p-wrap">' +
    '<header class="p-top">' +
      '<div class="p-brand">' +
        '<p class="p-hi">' + t.hi + '</p>' +
        '<h1 class="p-name">' + t.name + '<span class="p-en">' + t.en + '</span></h1>' +
      '</div>' +
      '<div class="p-top-right">' +
        '<div class="p-tabs">' + tabs + '</div>' +
      '</div>' +
    '</header>' +

    '<main class="p-panels">' +
      '<section class="p-panel on" data-panel="about">' +
        '<div class="p-inner">' +
          '<div class="p-stickers">' + stickers + '</div>' +
          '<p class="p-shout">' + t.shout + '</p>' +
          '<div class="p-grid2">' +
            '<div class="p-card">' +
              '<h3>' + t.aboutTitle + '</h3>' +
              t.about.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
            '</div>' +
            '<div class="p-card p-accent">' +
              '<h3>' + (state.lang === 'zh' ? '信条' : 'Creed') + '</h3>' +
              '<p class="p-quote">' + t.creed + '</p>' +
              '<div class="p-chips">' + t.chips.map(function (c) { return '<span class="p-chip">' + c + '</span>'; }).join('') + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="p-marquee"><div class="p-marquee-track">' + marquee + '</div></div>' +
        '</div>' +
      '</section>' +

      '<section class="p-panel" data-panel="exp">' +
        '<div class="p-inner"><div class="p-cols3">' + expCards + '</div></div>' +
      '</section>' +

      '<section class="p-panel" data-panel="works">' +
        '<div class="p-inner"><div class="p-grid2 p-works">' + workCards + '</div></div>' +
      '</section>' +

      '<section class="p-panel" data-panel="skills">' +
        '<div class="p-inner">' +
          '<div class="p-card">' + t.skills.map(function (s) {
            return '<div class="p-skill"><span class="p-skill-name">' + s[0] + '</span><span class="p-skill-val">' + s[1] + '</span></div>';
          }).join('') + '</div>' +
          '<div class="p-card p-school">' +
            '<h3>' + t.edu.school + '</h3>' +
            '<p class="p-org">' + t.edu.meta + '</p>' +
            '<p>' + t.edu.points[1] + '</p>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="p-panel" data-panel="contact">' +
        '<div class="p-inner">' +
          '<div class="p-card p-contact">' +
            '<p class="p-contact-line">' + t.contactText + '</p>' +
            '<a class="p-mail" href="mailto:' + t.email + '">' + t.email + '</a>' +
            '<p class="p-loc">' + t.loc + '</p>' +
          '</div>' +
        '</div>' +
      '</section>' +
    '</main>' +

    '<footer class="p-foot"><span>' + t.footer + '</span></footer>' +
  '</div>';
}

/* ---------------- 挂载 ---------------- */

var app = document.getElementById('app');

function render() {
  var t = CONTENT[state.lang];
  document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.setAttribute('data-skin', state.skin);
  document.documentElement.setAttribute('data-theme', state.theme);
  document.title = t.name + (state.lang === 'zh' ? ' | 商务售后 · 数据与 AI 实践' : ' | After-sales · Data & AI');

  app.innerHTML = state.skin === 'minimal' ? renderMinimal(t) : renderPop(t);

  if (state.skin === 'pop') {
    bindTabs();
  } else {
    bindAnchorScroll();
    bindPhotoSwitch();
  }
  syncControls();
}

function bindTabs() {
  var tabs = app.querySelectorAll('.p-tab');
  var panels = app.querySelectorAll('.p-panel');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (x) { x.classList.toggle('on', x === tab); });
      panels.forEach(function (p) {
        var active = p.dataset.panel === tab.dataset.panel;
        p.classList.toggle('on', active);
        if (active) p.scrollTop = 0;
      });
    });
  });
}

function bindPhotoSwitch() {
  var buttons = app.querySelectorAll('[data-photo]');
  var img = app.querySelector('.m-photo');
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      state.photo = b.dataset.photo;
      if (img) img.src = 'photo-' + state.photo + '.jpg';
      buttons.forEach(function (x) { x.classList.toggle('on', x === b); });
    });
  });
}

function bindAnchorScroll() {
  app.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ---------------- 控制条 ---------------- */

function syncControls() {
  var t = CONTENT[state.lang];
  var elMin = document.querySelector('[data-set-skin="minimal"]');
  var elPop = document.querySelector('[data-set-skin="pop"]');
  if (elMin) elMin.textContent = t.ui.minimal;
  if (elPop) elPop.textContent = t.ui.pop;

  document.querySelectorAll('[data-set-skin]').forEach(function (b) {
    b.classList.toggle('on', b.dataset.setSkin === state.skin);
  });
  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.classList.toggle('on', b.dataset.setLang === state.lang);
  });
  document.querySelectorAll('[data-set-theme]').forEach(function (b) {
    b.classList.toggle('on', b.dataset.setTheme === state.theme);
  });
  var sw = document.getElementById('swatches');
  if (sw) sw.style.display = state.skin === 'pop' ? 'flex' : 'none';
}

function setSkin(skin) {
  state.skin = skin;
  writeStore('wb-skin', skin);
  render();
  window.scrollTo(0, 0);
}

function setLang(lang) {
  state.lang = lang;
  writeStore('wb-lang', lang);
  render();
}

function setTheme(theme) {
  state.theme = theme;
  writeStore('wb-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  syncControls();
  var meta = document.querySelector('meta[name="theme-color"]');
  var colors = { lemon: '#f7e93e', peach: '#ffc9b0', mint: '#b8f2d8', violet: '#d9ccff' };
  if (meta) meta.setAttribute('content', colors[theme] || '#f7e93e');
}

document.querySelectorAll('[data-set-skin]').forEach(function (b) {
  b.addEventListener('click', function () { setSkin(b.dataset.setSkin); });
});
document.querySelectorAll('[data-set-lang]').forEach(function (b) {
  b.addEventListener('click', function () { setLang(b.dataset.setLang); });
});
document.querySelectorAll('[data-set-theme]').forEach(function (b) {
  b.addEventListener('click', function () { setTheme(b.dataset.setTheme); });
});

render();
