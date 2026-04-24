(function () {
  var STORAGE_KEY = "meridian-lang";

  var STRINGS = {
    en: {
      meta_description:
        "Meridian Forwarding — Global freight forwarding, customs clearance, and supply chain solutions. Air, ocean, and road logistics tailored to your business.",
      page_title: "Meridian Forwarding | Global Freight & Logistics",
      skip_link: "Skip to content",
      logo_aria: "Meridian Forwarding home",
      logo_forwarding: "Forwarding",
      lang_group_aria: "Language",
      nav_aria: "Primary",
      menu: "Menu",
      nav_services: "Services",
      nav_why: "Why us",
      nav_process: "Process",
      nav_quote: "Get a quote",
      transport_strip_aria: "Freight service modes: ocean, air, road, and customs",
      transport_strip_label: "Modes we cover",
      strip_ocean: "Ocean",
      strip_air: "Air",
      strip_road: "Road",
      strip_customs: "Customs",
      hero_img_alt: "Cargo vessel loaded with shipping containers alongside a container terminal",
      hero_photo_caption: "Ocean remains where most global tonnage moves — we align sailings, space, and handovers.",
      media_band_headline: "Cargo in motion. Teams on the clock.",
      media_band_eyebrow: "Field operations",
      media_band_sub:
        "From quay to warehouse door, we choreograph carriers, documentation, and exceptions so your stock levels stay trustworthy.",
      media_stats_aria: "How we run active shipments",
      media_stat_1: "Named desk & 24/7 escalation",
      media_stat_2: "Documented SOPs & handoffs",
      media_stat_3: "Single owner per file end-to-end",
      card_img_ocean_alt: "Stacked shipping containers at a port",
      card_img_air_alt: "Aircraft used for air freight operations",
      card_img_road_alt: "Commercial truck on a highway for road freight",
      card_img_customs_alt: "Warehouse and distribution handling",
      why_img_alt: "Aerial view of a busy container terminal",
      photo_credit_html:
        'Photos from <a href="https://unsplash.com" rel="noopener noreferrer" target="_blank">Unsplash</a> (Unsplash License).',
      hero_eyebrow: "International freight & customs",
      hero_title_1: "Move cargo with clarity,",
      hero_title_2: "speed, and control.",
      hero_lead:
        "End-to-end forwarding for growing brands — air, ocean, and road — with proactive tracking and compliance built in from day one.",
      hero_cta_primary: "Request a quote",
      hero_cta_secondary: "Explore services",
      sr_coverage: "Coverage",
      sr_support: "Support",
      sr_focus: "Focus",
      stat_lanes: "trade lanes",
      stat_desk: "operations desk",
      stat_iso_strong: "ISO-minded",
      stat_processes: "processes",
      panel_shipment: "Shipment",
      panel_transit: "In transit",
      panel_route: "LAX → RTM · Ocean FCL",
      panel_meta: "ETA Apr 18 · Customs pre-filed",
      panel_next: "Next milestone",
      panel_milestone: "Port discharge & devanning",
      sec_services_eyebrow: "What we do",
      sec_services_title: "Logistics that scales with your supply chain",
      sec_services_desc:
        "From first mile to final delivery, we coordinate carriers, documentation, and exceptions so your team stays focused on the business.",
      card_ocean_title: "Ocean freight",
      card_ocean_text:
        "FCL and LCL programs with predictable sailing schedules and space commitments on key lanes.",
      card_air_title: "Air freight",
      card_air_text:
        "Express and economy uplift options for high-value and time-sensitive cargo, with full visibility.",
      card_road_title: "Road & distribution",
      card_road_text:
        "Regional trucking, cross-border moves, and last-mile coordination across North America and beyond.",
      card_customs_title: "Customs & compliance",
      card_customs_text:
        "Classification support, filings, and audit-ready records aligned with your internal controls.",
      why_eyebrow: "Why Meridian",
      why_title: "Built for operators who need answers, not excuses",
      why_desc:
        "We combine structured processes with direct access to specialists — so when something shifts at origin or destination, you hear it first and get options fast.",
      why_li1: "Named contacts for your account, not anonymous queues",
      why_li2: "Exception playbooks for delays, rollovers, and inspections",
      why_li3: "Reporting that fits finance and operations, not generic templates",
      quote_body:
        "“We switched to a forwarding partner that treats visibility as a default — not an add-on. That single change reduced our internal follow-up time dramatically.”",
      quote_footer: "— Operations Director, <cite>Industrial goods</cite>",
      proc_eyebrow: "How it works",
      proc_title: "From booking to proof of delivery",
      proc_desc:
        "A disciplined path from commercial booking through in-transit control to customs release — so accountability stays visible at every milestone.",
      step1_title: "Scope & routing",
      step1_text: "We align on cargo, incoterms, timelines, and compliance needs.",
      step2_title: "Booking & docs",
      step2_text: "Carrier allocation, paperwork, and milestones locked in your dashboard.",
      step3_title: "In transit",
      step3_text: "Proactive monitoring, rerouting when needed, and clear escalation paths.",
      step4_title: "Arrival & release",
      step4_text: "Customs, handover, and POD — with data you can plug into your ERP.",
      cta_eyebrow: "Get started",
      cta_title: "Tell us about your next shipment",
      cta_desc:
        "Share lanes, volumes, and timelines — we'll respond with a clear proposal and timeline. No generic rate sheets.",
      label_email_word: "Email",
      label_phone_word: "Phone",
      form_company: "Company",
      form_work_email: "Work email",
      form_mode: "Mode",
      mode_select: "Select",
      mode_ocean: "Ocean",
      mode_air: "Air",
      mode_road: "Road",
      mode_multimodal: "Multimodal",
      form_lane: "Origin → Destination",
      lane_placeholder: "e.g. Los Angeles → Rotterdam",
      form_details: "Cargo & timeline",
      details_placeholder: "Weight, volume, commodity, readiness date…",
      form_submit: "Submit inquiry",
      form_note:
        "This demo form does not send data yet — hook it to your backend or form service when ready.",
      form_thanks: "Thanks — we'll be in touch",
      form_panel_title: "Shipment inquiry",
      form_panel_sub: "Typical response within one business day for active trade lanes.",
      footer_tagline: "International freight forwarding with a modern operations mindset.",
      footer_company_h: "Company",
      footer_services: "Services",
      footer_about: "About",
      footer_contact: "Contact",
      footer_compliance_h: "Compliance",
      footer_terms: "Terms",
      footer_privacy: "Privacy",
      footer_cookies: "Cookie policy",
      footer_rights: "All rights reserved.",
      footer_reach_h: "Reach us",
      footer_office: "Los Angeles · Transpacific & Americas lanes",
      footer_hours: "Desk: Mon–Fri 09:00–18:00 PST",
    },
    tr: {
      meta_description:
        "Meridian Forwarding — Küresel freight forwarding, gümrük ve tedarik zinciri çözümleri. İşletmenize uygun hava, deniz ve kara lojistiği.",
      page_title: "Meridian Forwarding | Küresel Taşımacılık ve Lojistik",
      skip_link: "İçeriğe geç",
      logo_aria: "Meridian Forwarding ana sayfa",
      logo_forwarding: "Forwarding",
      lang_group_aria: "Dil",
      nav_aria: "Ana menü",
      menu: "Menü",
      nav_services: "Hizmetler",
      nav_why: "Neden biz",
      nav_process: "Süreç",
      nav_quote: "Teklif alın",
      transport_strip_aria: "Yük hizmet modları: deniz, hava, kara ve gümrük",
      transport_strip_label: "Kapsadığımız modlar",
      strip_ocean: "Deniz",
      strip_air: "Hava",
      strip_road: "Kara",
      strip_customs: "Gümrük",
      hero_img_alt: "Konteyner terminali yanında yüklü bir kargo gemisi",
      hero_photo_caption:
        "Küresel tonajın çoğunun hâlâ denizden geçtiği gerçeğiyle uyumlu — seferleri, kontenjanjı ve devirleri birlikte planlarız.",
      media_band_headline: "Yük hareket halinde. Ekip saatinde.",
      media_band_eyebrow: "Saha operasyonları",
      media_band_sub:
        "Rıhtımdan depo kapısına taşıyıcıları, evrakı ve istisnaları eşzamanlı yönetir; stoklarınızın güvenilir kalmasını sağlarız.",
      media_stats_aria: "Aktif sevkiyatları nasıl yürütüyoruz",
      media_stat_1: "İsimli hat ve 7/24 eskalasyon",
      media_stat_2: "Dokümante SOP ve devirler",
      media_stat_3: "Dosya başına tek sorumlu uçtan uca",
      card_img_ocean_alt: "Limanda istiflenmiş konteynerler",
      card_img_air_alt: "Hava kargo operasyonları için uçak",
      card_img_road_alt: "Kara yükü için otoyolda ticari kamyon",
      card_img_customs_alt: "Depo ve dağıtım operasyonu",
      why_img_alt: "Yoğun bir konteyner terminalinin havadan görünümü",
      photo_credit_html:
        'Fotoğraflar <a href="https://unsplash.com" rel="noopener noreferrer" target="_blank">Unsplash</a> üzерinden (Unsplash Lisansı).',
      hero_eyebrow: "Uluslararası taşımacılık ve gümrük",
      hero_title_1: "Yükünüzü şeffaflıkla taşıyın,",
      hero_title_2: "hız ve kontrolle.",
      hero_lead:
        "Büyüyen markalar için uçtan uca forwarding — hava, deniz ve kara — proaktif takip ve uyum ilk günden itibaren dahil.",
      hero_cta_primary: "Teklif isteyin",
      hero_cta_secondary: "Hizmetleri inceleyin",
      sr_coverage: "Kapsam",
      sr_support: "Destek",
      sr_focus: "Odak",
      stat_lanes: "ticari hat",
      stat_desk: "operasyon hattı",
      stat_iso_strong: "ISO odaklı",
      stat_processes: "süreçler",
      panel_shipment: "Sevkiyat",
      panel_transit: "Yolda",
      panel_route: "LAX → RTM · Deniz FCL",
      panel_meta: "Tahmini varış 18 Nis · Gümrük ön bildirimi tamam",
      panel_next: "Sonraki aşama",
      panel_milestone: "Limanda boşaltma ve konteyner boşaltma",
      sec_services_eyebrow: "Neler yapıyoruz",
      sec_services_title: "Tedarik zincirinizle birlikte ölçeklenen lojistik",
      sec_services_desc:
        "İlk milden son teslimata kadar taşıyıcıları, evrakı ve istisnaları koordine ederiz; ekibiniz işine odaklanır.",
      card_ocean_title: "Deniz taşımacılığı",
      card_ocean_text:
        "Öngörülebilir sefer programları ve önemli hatlarda kontenjan taahhüdüyle FCL ve LCL programları.",
      card_air_title: "Hava taşımacılığı",
      card_air_text:
        "Yüksek değerli ve zamana duyarlı yükler için ekspres ve ekonomi seçenekleri; tam görünürlük.",
      card_road_title: "Kara ve dağıtım",
      card_road_text:
        "Bölgesel kamyonlama, sınır ötesi sevkiyatlar ve Kuzey Amerika ve ötesinde son kilometre koordinasyonu.",
      card_customs_title: "Gümrük ve uyum",
      card_customs_text:
        "Sınıflandırma desteği, beyannameler ve iç kontrollerinize uyumlu denetime hazır kayıtlar.",
      why_eyebrow: "Neden Meridian",
      why_title: "Mazeret değil, cevap arayan operasyonlar için",
      why_desc:
        "Yapılandırılmış süreçleri uzmanlara doğrudan erişimle birleştiriyoruz — menşede veya varışta bir şey değiştiğinde önce siz duyarsınız ve hızlıca seçenek alırsınız.",
      why_li1: "Hesabınız için isimli kontaklar; anonim kuyruklar değil",
      why_li2: "Gecikme, aktarma ve muayeneler için hazır istisna senaryoları",
      why_li3: "Finans ve operasyona uygun raporlama; jenerik şablonlar değil",
      quote_body:
        "“Görünürlüğü ek özellik değil, varsayılan olarak gören bir forwarding ortağına geçtik. Bu tek değişiklik iç takip süremizi önemli ölçüde düşürdü.”",
      quote_footer: "— Operasyonlar Direktörü, <cite>Endüstriyel ürünler</cite>",
      proc_eyebrow: "Nasıl çalışır",
      proc_title: "Rezervasyondan teslimat kanıtına",
      proc_desc:
        "Ticari rezervasyondan yoldaki kontrole ve gümrük salıvermesine kadar disiplinli bir yol — hesap verebilirlik her kilometre taşında görünür kalır.",
      step1_title: "Kapsam ve routing",
      step1_text: "Yük, Incoterms, zaman çizelgeleri ve uyum ihtiyaçlarını netleştiriyoruz.",
      step2_title: "Rezervasyon ve evrak",
      step2_text: "Taşıyıcı tahsisi, evrak ve kilometre taşları panonuzda kilitlenir.",
      step3_title: "Yolda",
      step3_text: "Proaktif izleme, gerektiğinde yeniden yönlendirme ve net eskalasyon yolları.",
      step4_title: "Varış ve salıverme",
      step4_text: "Gümrük, devir ve POD — ERP’nize aktarabileceğiniz verilerle.",
      cta_eyebrow: "Başlayın",
      cta_title: "Bir sonraki sevkiyatınızı anlatın",
      cta_desc:
        "Hatları, hacimleri ve zaman çizelgelerini paylaşın — net bir teklif ve takvimle dönüş yapalım. Jenerik tarife tabloları yok.",
      label_email_word: "E-posta",
      label_phone_word: "Telefon",
      form_company: "şirket",
      form_work_email: "İş e-postası",
      form_mode: "Mod",
      mode_select: "Seçin",
      mode_ocean: "Deniz",
      mode_air: "Hava",
      mode_road: "Kara",
      mode_multimodal: "Multimodal",
      form_lane: "Menşe → Varış",
      lane_placeholder: "örn. Los Angeles → Rotterdam",
      form_details: "Yük ve zaman çizelgesi",
      details_placeholder: "Ağırlık, hacim, emtia, hazır olma tarihi…",
      form_submit: "Talebi gönder",
      form_note:
        "Bu demo form henüz veri göndermez — hazır olduğunuzda backend veya form servisinize bağlayın.",
      form_thanks: "Teşekkürler — en kısa sürede dönüş yapacağız",
      form_panel_title: "Sevkiyat talebi",
      form_panel_sub: "Aktif ticari hatlar için tipik yanıt süresi bir iş günü içindedir.",
      footer_tagline: "Modern operasyon anlayışıyla uluslararası freight forwarding.",
      footer_company_h: "şirket",
      footer_services: "Hizmetler",
      footer_about: "Hakkımızda",
      footer_contact: "İletişim",
      footer_compliance_h: "Uyum",
      footer_terms: "Koşullar",
      footer_privacy: "Gizlilik",
      footer_cookies: "Çerez politikası",
      footer_rights: "Tüm hakları saklıdır.",
      footer_reach_h: "Bize ulaşın",
      footer_office: "Los Angeles merkez · Transpacifik ve Amerika hatları",
      footer_hours: "Hat: Pt–Cum 09:00–18:00 PST",
    },
  };

  var currentLang = "en";

  function getStrings(lang) {
    return STRINGS[lang] || STRINGS.en;
  }

  function applyLang(lang) {
    if (lang !== "en" && lang !== "tr") {
      lang = "en";
    }
    currentLang = lang;
    var L = getStrings(lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && L[key] !== undefined) {
        el.textContent = L[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key && L[key] !== undefined) {
        el.innerHTML = L[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key && L[key] !== undefined) {
        el.setAttribute("aria-label", L[key]);
      }
    });

    var meta = document.querySelector('meta[data-i18n-meta="description"]');
    if (meta && L.meta_description) {
      meta.setAttribute("content", L.meta_description);
    }

    var titleEl = document.querySelector("title[data-i18n-title]");
    if (titleEl && L.page_title) {
      titleEl.textContent = L.page_title;
    }

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key && L[key] !== undefined) {
        el.setAttribute("placeholder", L[key]);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (key && L[key] !== undefined) {
        el.setAttribute("alt", L[key]);
      }
    });

    var selectEl = document.getElementById("lang-select");
    if (selectEl) {
      selectEl.value = lang;
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function detectInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "tr") {
        return saved;
      }
    } catch (e) {
      /* ignore */
    }
    var nav = typeof navigator !== "undefined" ? navigator.language || navigator.userLanguage : "";
    if (nav && String(nav).toLowerCase().indexOf("tr") === 0) {
      return "tr";
    }
    return "en";
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    var syncHeaderScroll = function () {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 16);
    };
    syncHeaderScroll();
    window.addEventListener("scroll", syncHeaderScroll, { passive: true });
  }

  applyLang(detectInitialLang());

  var langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.addEventListener("change", function () {
      applyLang(langSelect.value);
    });
  }

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.querySelector(".quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var L = getStrings(currentLang);
      var thanks = L.form_thanks || STRINGS.en.form_thanks;
      if (btn) {
        btn.textContent = thanks;
        btn.disabled = true;
        setTimeout(function () {
          btn.disabled = false;
          form.reset();
          applyLang(currentLang);
        }, 2800);
      }
    });
  }
})();
