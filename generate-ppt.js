const PptxGenJS = require("pptxgenjs");

const pptx = new PptxGenJS();

// ============ THEME ============
const THEME = {
  primary: "1B5E20",    // Dark green
  secondary: "2E7D32",  // Green
  accent: "4CAF50",     // Light green
  dark: "1a1a2e",       // Dark navy
  text: "333333",
  lightText: "FFFFFF",
  muted: "757575",
  bg: "F5F5F5",
  white: "FFFFFF",
};

pptx.layout = "LAYOUT_16x9";
pptx.author = "DriveRent Project";
pptx.title = "Sistem Informasi Rental Mobil Berbasis Web";

// ============ HELPER ============
function addSlideNumber(slide, num) {
  slide.addText(`${num} / 8`, {
    x: 6.2, y: 7.0, w: 1.3, h: 0.3,
    fontSize: 9, color: THEME.muted, align: "right",
  });
}

function addSlideTitle(slide, title, subtitle) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.9,
    fill: { color: THEME.primary },
  });
  slide.addText(title, {
    x: 0.5, y: 0.15, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Calibri", bold: true, color: THEME.lightText,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5, y: 0.7, w: 9, h: 0.35,
      fontSize: 11, fontFace: "Calibri", color: "C8E6C9",
    });
  }
}

// ============ SLIDE 1: COVER ============
{
  const slide = pptx.addSlide();
  // Background gradient
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color: THEME.dark },
  });
  // Decorative accent bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 2.8, w: "100%", h: 0.06,
    fill: { color: THEME.accent },
  });
  // Title
  slide.addText("Sistem Informasi Rental Mobil\nBerbasis Web", {
    x: 0.8, y: 1.2, w: 8.4, h: 1.6,
    fontSize: 32, fontFace: "Calibri", bold: true,
    color: THEME.lightText, align: "center",
    lineSpacingMultiple: 1.2,
  });
  // Subtitle
  slide.addText("DriveRent — Website & Dashboard Admin", {
    x: 0.8, y: 3.1, w: 8.4, h: 0.6,
    fontSize: 16, fontFace: "Calibri", color: THEME.accent, align: "center",
  });
  // Author info
  slide.addText([
    { text: "Pemograman Web — SIB4A\n", options: { fontSize: 12, color: "B0BEC5" } },
    { text: "2026", options: { fontSize: 12, color: "B0BEC5" } },
  ], {
    x: 0.8, y: 4.5, w: 8.4, h: 1.0,
    fontFace: "Calibri", align: "center",
  });
  // Bottom bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 6.9, w: "100%", h: 0.6,
    fill: { color: THEME.primary },
  });
}

// ============ SLIDE 2: LATAR BELAKANG ============
{
  const slide = pptx.addSlide();
  addSlideTitle(slide, "Latar Belakang");
  addSlideNumber(slide, 2);

  // Problem box
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.3, w: 4.2, h: 3.5,
    fill: { color: "FFF3E0" },
    rectRadius: 0.1,
    line: { color: "FF9800", width: 1 },
  });
  slide.addText("Permasalahan", {
    x: 0.7, y: 1.4, w: 3.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", bold: true, color: "E65100",
  });
  slide.addText(
    "• Manajemen rental mobil masih dilakukan secara manual\n\n" +
    "• Sulitnya pelanggan dalam mencari informasi ketersediaan armada\n\n" +
    "• Pencatatan transaksi yang tidak terstruktur\n\n" +
    "• Kurangnya sistem monitoring armada secara real-time",
    {
      x: 0.7, y: 1.9, w: 3.8, h: 2.8,
      fontSize: 11, fontFace: "Calibri", color: THEME.text,
      lineSpacingMultiple: 1.1, valign: "top",
    }
  );

  // Solution box
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.3, y: 1.3, w: 4.2, h: 3.5,
    fill: { color: "E8F5E9" },
    rectRadius: 0.1,
    line: { color: THEME.accent, width: 1 },
  });
  slide.addText("Solusi", {
    x: 5.5, y: 1.4, w: 3.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", bold: true, color: THEME.primary,
  });
  slide.addText(
    "• Website rental mobil berbasis web (Next.js)\n\n" +
    "• Dashboard admin untuk pengelolaan armada\n\n" +
    "• Sistem pemesanan via WhatsApp\n\n" +
    "• Tampilan responsif untuk mobile & desktop",
    {
      x: 5.5, y: 1.9, w: 3.8, h: 2.8,
      fontSize: 11, fontFace: "Calibri", color: THEME.text,
      lineSpacingMultiple: 1.1, valign: "top",
    }
  );

  // Target users
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 5.2, w: 9, h: 1.5,
    fill: { color: THEME.white },
    rectRadius: 0.1,
    shadow: { type: "outer", blur: 3, offset: 1, color: "CCCCCC" },
  });
  slide.addText("Target Pengguna", {
    x: 0.7, y: 5.3, w: 3, h: 0.4,
    fontSize: 13, fontFace: "Calibri", bold: true, color: THEME.primary,
  });
  slide.addText(
    "Pelanggan Umum: mencari & menyewa mobil    |    Admin: mengelola armada, pelanggan, dan transaksi",
    {
      x: 0.7, y: 5.7, w: 8.6, h: 0.8,
      fontSize: 11, fontFace: "Calibri", color: THEME.text,
    }
  );
}

// ============ SLIDE 3: TECH STACK ============
{
  const slide = pptx.addSlide();
  addSlideTitle(slide, "Teknologi yang Digunakan");
  addSlideNumber(slide, 3);

  const stacks = [
    { name: "Next.js 16", desc: "Framework React\n(App Router)", color: "000000" },
    { name: "TypeScript", desc: "Bahasa pemrograman\n(Type-safe)", color: "3178C6" },
    { name: "React 19", desc: "UI Library\n(Component-based)", color: "61DAFB" },
    { name: "Tailwind CSS v4", desc: "Utility-first CSS\nFramework", color: "06B6D4" },
    { name: "shadcn/ui", desc: "UI Component\nLibrary", color: "18181B" },
    { name: "Lucide React", desc: "Icon Library\n(SVG icons)", color: "6C63FF" },
  ];

  stacks.forEach((s, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.4 + row * 2.5;

    // Card
    slide.addShape(pptx.ShapeType.rect, {
      x: x, y: y, w: 2.8, h: 2.0,
      fill: { color: THEME.white },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 3, offset: 1, color: "CCCCCC" },
    });
    // Color accent bar
    slide.addShape(pptx.ShapeType.rect, {
      x: x, y: y, w: 2.8, h: 0.08,
      fill: { color: s.color },
    });
    // Name
    slide.addText(s.name, {
      x: x + 0.2, y: y + 0.25, w: 2.4, h: 0.4,
      fontSize: 14, fontFace: "Calibri", bold: true, color: THEME.text,
    });
    // Description
    slide.addText(s.desc, {
      x: x + 0.2, y: y + 0.75, w: 2.4, h: 1.0,
      fontSize: 10, fontFace: "Calibri", color: THEME.muted,
      lineSpacingMultiple: 1.2,
    });
  });
}

// ============ SLIDE 4: FITUR WEBSITE PUBLIC ============
{
  const slide = pptx.addSlide();
  addSlideTitle(slide, "Fitur Website (Public)");
  addSlideNumber(slide, 4);

  const features = [
    { icon: "Navbar", title: "Navbar Responsive", desc: "Navigasi sticky dengan menu Armada, Cara Sewa, Testimoni, Kontak. Tombol WhatsApp CTA. Mobile hamburger menu." },
    { icon: "Hero", title: "Hero Section", desc: "Tagline \"Perjalanan Nyaman, Harga Terjangkau\". CTA buttons: Lihat Armada + Chat WhatsApp. Trust badges: Asuransi, 24 Jam, 4.9 Rating." },
    { icon: "Cars", title: "Daftar Armada", desc: "Grid 6 mobil: Avanza, Brio, Innova Reborn, Civic, Fortuner, Xenia. Info harga/hari, kursi, bahan bakar, transmisi, rating." },
    { icon: "Steps", title: "Cara Sewa (3 Langkah)", desc: "01 Pilih Mobil → 02 Atur Jadwal → 03 Ambil & Nikmati. Visual step-by-step yang intuitif." },
    { icon: "Review", title: "Testimoni Pelanggan", desc: "3 review dari pelanggan: wisatawan, eksekutif, keluarga. Rating bintang 5." },
    { icon: "Footer", title: "Footer & Kontak", desc: "Info kontak (telepon, email, website). Jam operasional: Senin-Sabtu 07-22, Minggu 08-20. Emergency 24 jam." },
  ];

  features.forEach((f, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.3 + row * 1.8;

    // Card bg
    slide.addShape(pptx.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.55,
      fill: { color: THEME.white },
      rectRadius: 0.08,
      shadow: { type: "outer", blur: 2, offset: 1, color: "E0E0E0" },
    });
    // Accent left bar
    slide.addShape(pptx.ShapeType.rect, {
      x: x, y: y, w: 0.06, h: 1.55,
      fill: { color: THEME.accent },
    });
    // Title
    slide.addText(f.title, {
      x: x + 0.2, y: y + 0.1, w: 4.0, h: 0.35,
      fontSize: 12, fontFace: "Calibri", bold: true, color: THEME.primary,
    });
    // Description
    slide.addText(f.desc, {
      x: x + 0.2, y: y + 0.5, w: 4.0, h: 0.95,
      fontSize: 9.5, fontFace: "Calibri", color: THEME.text,
      lineSpacingMultiple: 1.15, valign: "top",
    });
  });
}

// ============ SLIDE 5: FITUR DASHBOARD ADMIN ============
{
  const slide = pptx.addSlide();
  addSlideTitle(slide, "Fitur Dashboard Admin");
  addSlideNumber(slide, 5);

  // Dashboard overview cards
  slide.addText("Dashboard Overview", {
    x: 0.5, y: 1.2, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Calibri", bold: true, color: THEME.primary,
  });

  const stats = [
    { label: "Total Armada", value: "24", sub: "+2 bulan ini", color: "E3F2FD", accent: "1565C0" },
    { label: "Transaksi Hari Ini", value: "8", sub: "+3 dari kemarin", color: "E8F5E9", accent: "2E7D32" },
    { label: "Pelanggan Aktif", value: "156", sub: "+12 bulan ini", color: "F3E5F5", accent: "7B1FA2" },
    { label: "Pendapatan/Bulan", value: "Rp 45JT", sub: "+18% dari lalu", color: "FFF8E1", accent: "F9A825" },
  ];

  stats.forEach((s, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pptx.ShapeType.rect, {
      x: x, y: 1.6, w: 2.1, h: 1.4,
      fill: { color: s.color },
      rectRadius: 0.08,
    });
    slide.addText(s.label, {
      x: x + 0.15, y: 1.65, w: 1.8, h: 0.3,
      fontSize: 9, fontFace: "Calibri", color: THEME.muted,
    });
    slide.addText(s.value, {
      x: x + 0.15, y: 1.95, w: 1.8, h: 0.5,
      fontSize: 22, fontFace: "Calibri", bold: true, color: s.accent,
    });
    slide.addText(s.sub, {
      x: x + 0.15, y: 2.5, w: 1.8, h: 0.3,
      fontSize: 8, fontFace: "Calibri", color: "4CAF50",
    });
  });

  // Modules
  slide.addText("Modul Dashboard", {
    x: 0.5, y: 3.3, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Calibri", bold: true, color: THEME.primary,
  });

  const modules = [
    {
      title: "Manajemen Armada",
      items: "• Tabel data mobil (6 armada)\n• Kolom: nama, tipe, tahun, plat, warna, harga\n• Filter: status (Tersedia/Disewa), tipe (MPV/SUV)\n• CRUD: Tambah, Edit, Hapus",
    },
    {
      title: "Manajemen Pelanggan",
      items: "• Tabel data pelanggan\n• Kolom: nama, email, telepon, alamat\n• Total 156 pelanggan, 142 aktif\n• Filter: status, pencarian",
    },
    {
      title: "Manajemen Transaksi",
      items: "• Tabel transaksi (6 data)\n• Status: Selesai, Berlangsung, Menunggu\n• Ringkasan: total, berlangsung, pendapatan\n• Filter: status, tanggal",
    },
  ];

  modules.forEach((m, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pptx.ShapeType.rect, {
      x: x, y: 3.7, w: 2.85, h: 3.0,
      fill: { color: THEME.white },
      rectRadius: 0.08,
      shadow: { type: "outer", blur: 2, offset: 1, color: "E0E0E0" },
    });
    slide.addShape(pptx.ShapeType.rect, {
      x: x, y: 3.7, w: 2.85, h: 0.4,
      fill: { color: THEME.primary },
      rectRadius: 0.08,
    });
    // Cover bottom corners of header
    slide.addShape(pptx.ShapeType.rect, {
      x: x, y: 3.95, w: 2.85, h: 0.2,
      fill: { color: THEME.primary },
    });
    slide.addText(m.title, {
      x: x + 0.15, y: 3.73, w: 2.55, h: 0.35,
      fontSize: 11, fontFace: "Calibri", bold: true, color: THEME.lightText,
    });
    slide.addText(m.items, {
      x: x + 0.15, y: 4.2, w: 2.55, h: 2.4,
      fontSize: 9, fontFace: "Calibri", color: THEME.text,
      lineSpacingMultiple: 1.3, valign: "top",
    });
  });
}

// ============ SLIDE 6: ARSITEKTUR / STRUKTUR CODE ============
{
  const slide = pptx.addSlide();
  addSlideTitle(slide, "Arsitektur & Struktur Code");
  addSlideNumber(slide, 6);

  // File tree
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.3, w: 4.2, h: 5.5,
    fill: { color: "263238" },
    rectRadius: 0.1,
  });
  slide.addText("Struktur Folder", {
    x: 0.7, y: 1.4, w: 3.8, h: 0.35,
    fontSize: 12, fontFace: "Consolas", bold: true, color: "4CAF50",
  });
  slide.addText(
    "rental-mobil/\n" +
    "├── app/\n" +
    "│   ├── layout.tsx\n" +
    "│   ├── page.tsx\n" +
    "│   ├── globals.css\n" +
    "│   ├── components/\n" +
    "│   │   └── Sidebar.tsx\n" +
    "│   └── dashboard/\n" +
    "│       ├── layout.tsx\n" +
    "│       ├── page.tsx\n" +
    "│       ├── armada/\n" +
    "│       │   └── page.tsx\n" +
    "│       ├── pelanggan/\n" +
    "│       │   └── page.tsx\n" +
    "│       └── transaksi/\n" +
    "│           └── page.tsx\n" +
    "├── components/\n" +
    "│   ├── Navbar.tsx\n" +
    "│   ├── Hero.tsx\n" +
    "│   ├── CarList.tsx\n" +
    "│   ├── HowItWorks.tsx\n" +
    "│   ├── Testimonials.tsx\n" +
    "│   ├── Footer.tsx\n" +
    "│   └── ui/  (shadcn)\n" +
    "├── hooks/\n" +
    "│   └── use-mobile.ts\n" +
    "└── lib/\n" +
    "    └── utils.ts",
    {
      x: 0.7, y: 1.8, w: 3.8, h: 4.8,
      fontSize: 8.5, fontFace: "Consolas", color: "E0E0E0",
      lineSpacingMultiple: 1.15, valign: "top",
    }
  );

  // Architecture diagram
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.0, y: 1.3, w: 4.7, h: 5.5,
    fill: { color: THEME.white },
    rectRadius: 0.1,
    shadow: { type: "outer", blur: 3, offset: 1, color: "CCCCCC" },
  });
  slide.addText("Alur Arsitektur", {
    x: 5.2, y: 1.4, w: 4.3, h: 0.35,
    fontSize: 12, fontFace: "Calibri", bold: true, color: THEME.primary,
  });

  // Architecture boxes
  const archBoxes = [
    { label: "User Interface\n(Landing Page)", y: 2.0, color: "E8F5E9" },
    { label: "Admin Dashboard\n(Sidebar Layout)", y: 3.2, color: "E3F2FD" },
    { label: "React Components\n(Hooks & State)", y: 4.4, color: "FFF3E0" },
    { label: "Hardcoded Mock Data\n(Static Content)", y: 5.6, color: "FCE4EC" },
  ];

  archBoxes.forEach((b) => {
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.4, y: b.y, w: 3.9, h: 0.9,
      fill: { color: b.color },
      rectRadius: 0.08,
      line: { color: "BDBDBD", width: 0.5 },
    });
    slide.addText(b.label, {
      x: 5.5, y: b.y + 0.1, w: 3.7, h: 0.7,
      fontSize: 10, fontFace: "Calibri", color: THEME.text,
      align: "center", valign: "middle",
    });
  });

  // Arrows
  [2.9, 4.1, 5.3].forEach((y) => {
    slide.addText("▼", {
      x: 7.15, y: y, w: 0.5, h: 0.3,
      fontSize: 12, color: THEME.muted, align: "center",
    });
  });
}

// ============ SLIDE 7: SCREENSHOT / DEMO ============
{
  const slide = pptx.addSlide();
  addSlideTitle(slide, "Tampilan Aplikasi");
  addSlideNumber(slide, 7);

  // Public site
  slide.addText("Landing Page (Public)", {
    x: 0.5, y: 1.2, w: 4.2, h: 0.35,
    fontSize: 12, fontFace: "Calibri", bold: true, color: THEME.primary,
  });

  const publicFeatures = [
    "Hero: Gradient gelap dengan tagline",
    "CarList: Grid 6 mobil + harga/hari",
    "HowItWorks: 3 langkah sewa",
    "Testimoni: Review pelanggan bintang 5",
    "Footer: Kontak & jam operasional",
    "Integrasi WhatsApp untuk booking",
  ];

  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.6, w: 4.2, h: 4.8,
    fill: { color: "F5F5F5" },
    rectRadius: 0.1,
    line: { color: "E0E0E0", width: 1 },
  });
  // Browser-like top bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.6, w: 4.2, h: 0.35,
    fill: { color: "E0E0E0" },
  });
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 0.7, y: 1.68, w: 0.18, h: 0.18,
    fill: { color: "FF5F57" },
  });
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 0.95, y: 1.68, w: 0.18, h: 0.18,
    fill: { color: "FFBD2E" },
  });
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 1.2, y: 1.68, w: 0.18, h: 0.18,
    fill: { color: "28CA41" },
  });
  slide.addText("localhost:3000", {
    x: 1.6, y: 1.65, w: 3, h: 0.25,
    fontSize: 8, fontFace: "Calibri", color: "757575",
  });

  publicFeatures.forEach((f, i) => {
    slide.addText(`✓  ${f}`, {
      x: 0.8, y: 2.2 + i * 0.65, w: 3.6, h: 0.5,
      fontSize: 10, fontFace: "Calibri", color: THEME.text,
      valign: "middle",
    });
  });

  // Dashboard
  slide.addText("Admin Dashboard", {
    x: 5.3, y: 1.2, w: 4.2, h: 0.35,
    fontSize: 12, fontFace: "Calibri", bold: true, color: THEME.primary,
  });

  const dashFeatures = [
    "Sidebar: Navigasi modul admin",
    "Overview: 4 kartu statistik",
    "Armada: CRUD + filter/search",
    "Pelanggan: Data & statistik",
    "Transaksi: Status tracking",
    "Tabel responsif dengan sorting",
  ];

  slide.addShape(pptx.ShapeType.rect, {
    x: 5.3, y: 1.6, w: 4.2, h: 4.8,
    fill: { color: "F5F5F5" },
    rectRadius: 0.1,
    line: { color: "E0E0E0", width: 1 },
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.3, y: 1.6, w: 4.2, h: 0.35,
    fill: { color: "E0E0E0" },
  });
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 5.5, y: 1.68, w: 0.18, h: 0.18,
    fill: { color: "FF5F57" },
  });
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 5.75, y: 1.68, w: 0.18, h: 0.18,
    fill: { color: "FFBD2E" },
  });
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 6.0, y: 1.68, w: 0.18, h: 0.18,
    fill: { color: "28CA41" },
  });
  slide.addText("localhost:3000/dashboard", {
    x: 6.4, y: 1.65, w: 3, h: 0.25,
    fontSize: 8, fontFace: "Calibri", color: "757575",
  });

  dashFeatures.forEach((f, i) => {
    slide.addText(`✓  ${f}`, {
      x: 5.6, y: 2.2 + i * 0.65, w: 3.6, h: 0.5,
      fontSize: 10, fontFace: "Calibri", color: THEME.text,
      valign: "middle",
    });
  });

  // Note at bottom
  slide.addText("* Jalankan 'npm run dev' lalu buka browser untuk melihat tampilan aktual", {
    x: 0.5, y: 6.6, w: 9, h: 0.4,
    fontSize: 9, fontFace: "Calibri", italic: true, color: THEME.muted,
  });
}

// ============ SLIDE 8: KESIMPULAN & SARAN ============
{
  const slide = pptx.addSlide();
  addSlideTitle(slide, "Kesimpulan & Saran");
  addSlideNumber(slide, 8);

  // Kesimpulan
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.3, w: 4.2, h: 5.2,
    fill: { color: "E8F5E9" },
    rectRadius: 0.1,
  });
  slide.addText("Kesimpulan", {
    x: 0.7, y: 1.4, w: 3.8, h: 0.4,
    fontSize: 16, fontFace: "Calibri", bold: true, color: THEME.primary,
  });
  slide.addText(
    "1. Berhasil membangun sistem rental mobil berbasis web menggunakan Next.js 16, TypeScript, dan Tailwind CSS v4\n\n" +
    "2. Tersedia dua area utama:\n   • Landing page untuk pelanggan\n   • Dashboard admin untuk pengelolaan\n\n" +
    "3. Fitur lengkap:\n   • Pencarian & pemesanan mobil\n   • Manajemen armada (CRUD)\n   • Manajemen pelanggan\n   • Tracking transaksi\n\n" +
    "4. Desain responsif & modern dengan shadcn/ui\n\n" +
    "5. Integrasi WhatsApp untuk alur pemesanan",
    {
      x: 0.7, y: 1.9, w: 3.8, h: 4.4,
      fontSize: 10.5, fontFace: "Calibri", color: THEME.text,
      lineSpacingMultiple: 1.2, valign: "top",
    }
  );

  // Saran
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.3, y: 1.3, w: 4.2, h: 5.2,
    fill: { color: "FFF3E0" },
    rectRadius: 0.1,
  });
  slide.addText("Saran Pengembangan", {
    x: 5.5, y: 1.4, w: 3.8, h: 0.4,
    fontSize: 16, fontFace: "Calibri", bold: true, color: "E65100",
  });
  slide.addText(
    "1. Backend & Database\n   Tambahkan API (Node.js/Express atau Next.js API Routes) dan database (PostgreSQL/MySQL) untuk data real\n\n" +
    "2. Autentikasi\n   Implementasi login/register untuk admin dan pelanggan\n\n" +
    "3. Payment Gateway\n   Integrasi Midtrans/Xendit untuk pembayaran online\n\n" +
    "4. Mobile App\n   Kembangkan versi mobile menggunakan React Native atau Flutter\n\n" +
    "5. Notifikasi\n   Email/SMS notifikasi untuk status pemesanan\n\n" +
    "6. Review & Rating\n   Fitur ulasan dari pelanggan secara langsung",
    {
      x: 5.5, y: 1.9, w: 3.8, h: 4.4,
      fontSize: 10, fontFace: "Calibri", color: THEME.text,
      lineSpacingMultiple: 1.15, valign: "top",
    }
  );
}

// ============ GENERATE FILE ============
const outputPath = __dirname + "/rental-mobil-presentation.pptx";
pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`PPT berhasil dibuat: ${outputPath}`);
  })
  .catch((err) => {
    console.error("Gagal membuat PPT:", err);
  });
