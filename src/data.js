import {
  FileText,
  Zap,
  Clock,
  ShoppingCart,
  FileCheck,
  ClipboardList,
  Package,
} from "lucide-react";

import panRB from "/logos/Logo PanRB.png";
import KPK from "/logos/logo-kpk.png";
import JDIH from "/logos/jdih.png";
import LAPOR from "/logos/logo_span_Lapor.png"
import KOMDIGI from "/logos/komdigi-logo-png_seeklogo-607178.png"
import Ombudsman from "/logos/Logo_Ombudsman_Republik_Indonesia_(2018).svg.png"
import Kemenpan from "/logos/Logo Garuda.png"

export const informasiPublikItems = [
  {
    icon: FileText,
    title: "Informasi Berkala",
    description:
      "Informasi yang wajib disediakan dan diumumkan secara berkala minimal 6 bulan sekali",
    href: "/informasi-publik/berkala",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Zap,
    title: "Informasi Serta Merta",
    description:
      "Informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum",
    href: "/informasi-publik/serta-merta",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Clock,
    title: "Informasi Setiap Saat",
    description:
      "Informasi yang wajib disediakan dan diumumkan secara serta merta",
    href: "/informasi-publik/setiap-saat",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export const pengadaanItems = [
  {
    icon: ClipboardList,
    title: "Perencanaan",
    description: "Dokumen perencanaan pengadaan barang dan jasa",
  },
  {
    icon: FileCheck,
    title: "Pemilihan",
    description: "Proses pemilihan penyedia barang dan jasa",
  },
  {
    icon: Package,
    title: "Pelaksanaan",
    description: "Tahap pelaksanaan pengadaan",
  },
  {
    icon: ShoppingCart,
    title: "Dokumen Pengadaan",
    description: "Dokumen yang terbuka bagi publik",
  },
];

export const newsItems = [
  {
    title: "Peningkatan Transparansi Informasi Publik 2025",
    excerpt:
      "Kementerian PANRB terus berkomitmen meningkatkan transparansi pelayanan informasi publik untuk masyarakat melalui berbagai program digitalisasi.",
    date: "20 Jan 2025",
    tags: ["#PPID", "#KeterbukaanInformasi"],
    image:
      "https://admin103.digivestasi.com/upload/posts/purbaya-yakin-ekonomi-indonesia-tembus-6-dalam-waktu-dekat-68c0481e57eb6.webp",
  },
  {
    title: "Workshop Pelayanan Informasi Digital untuk ASN",
    excerpt:
      "PPID Kementerian PANRB menyelenggarakan workshop digitalisasi layanan informasi untuk aparatur sipil negara.",
    date: "15 Jan 2025",
    tags: ["#PPID", "#Digitalisasi"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    title: "Laporan Kinerja PPID Tahun 2024 Menunjukkan Peningkatan",
    excerpt:
      "Capaian kinerja PPID Kementerian PANRB menunjukkan peningkatan signifikan dalam kepuasan masyarakat.",
    date: "10 Jan 2025",
    tags: ["#PPID", "#LaporanKinerja"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

export const faqItems = [
  {
    question: "Bagaimana cara mengajukan permohonan informasi?",
    answer:
      "PPID (Pejabat Pengelola Informasi dan Dokumentasi) adalah pejabat yang bertanggung jawab dalam pengelolaan dan pelayanan informasi publik di lingkungan Kementerian PANRB. Masyarakat menyampaikan surat permohonan tertulis, ditujukan ke alamat : Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Kepala Biro Data, Komunikasi dan Informasi Publik/ Deputi Bidang …(sesuai kebutuhan informasi), Jl. Jend. Sudirman Kav. 69 – Jakarta Selatan 12190; atau, Hadir langsung di Kantor Kementerian PANRB (sesuai alamat diatas), dengan menunjukkan identitas pribadi dan mengisi buku tamu. *Ket: Informasi/ data yang diminta dalam kewenangan Kementerian PANRB",
  },
  {
    question: "Waktu layanan informasi?",
    answer:
      "Hari Senin s/d Kamis, Jam 08.00 – 16.00 WIB Hari Jumat, Jam 08:00 – 16:30 WIB",
  },
  {
    question: "Berapa biaya untuk memperoleh informasi?",
    answer: "Tidak dipungut biaya / gratis",
  },
  {
    question:
      "Berapa lama pemberian tanggapan PPID atas permohonan informasi publik??",
    answer:
      "Proses penyelesaian untuk memenuhi permintaan pemohon informasi publik dilakukan setelah pemohon informasi publik memenuhi persyaratan yang telah ditentukan;Waktu penyelesaian dilaksanakan paling lambat 10 (sepuluh) hari kerja sejak diterimanya permintaan, Pejabat Pengelola Informasi dan Dokumentasi (PPID) akan menyampaikan pemberitahuan yang berisikan informasi yang diminta berada dibawah penguasaannya atau tidak. Dan PPID dapat memperpanjang waktu paling lambat 7 (tujuh) hari kerja.Penyampaian/pendistribusian/penyerahan informasi publik kepada pemohon informasi public dilakukan secara langsung, melalui email, fax ataupun jasa pos;",
  },
  {
    question: "Bagaimana cara menyampaikan pengaduan masyarakat?",
    answer:
      "Melalui aplikasi Layanan Pengaduan dan Aspirasi Rakyat Online (LAPOR!) dengan cara: Akses website lapor.go.id; SMS ke 1708, X @lapor1708; dan, Aplikasi Android",
  },
];

export const profilMenu = [
  { title: "Tugas dan Fungsi", href: "/profil/tugas-dan-fungsi" },
  { title: "Nilai-nilai KemenPANRB", href: "/profil/nilai-nilai-kemenpanrb" },
  { title: "Kode Etik", href: "/profil/kode-etik" },
  { title: "Profil", href: "/profil/profil" },
  { title: "Visi & Misi", href: "/profil/visi-misi" },
  { title: "Struktur Organisasi PPID", href: "/profil/struktur-organisasi-ppid" },
  { title: "Kontak", href: "/profil/kontak" },
];

export const informasiPublikMenu = [
  { title: "Informasi Berkala", href: "/informasi-publik/berkala" },
  { title: "Informasi Serta Merta", href: "/informasi-publik/serta-merta" },
  { title: "Informasi Setiap Saat", href: "/informasi-publik/setiap-saat" },
];

export const layananInformasiMenu = [
  {
    title: "Layanan Pengaduan Masyarakat",
    href: "/layanan-informasi/layanan-pengaduan-masyarakat",
  },
  {
    title: "Laporan Ringkasan Layanan Akses Info Publik",
    href: "/layanan-informasi/laporan-ringkasan",
  },
  {
    title: "Laporan Tahunan Layanan Info Publik",
    href: "/layanan-informasi/laporan-tahunan",
  },
  { title: "Giat Menteri", href: "/layanan-informasi/giat-menteri" },
];

export const standarLayananMenu = [
  {
    title: "Prosedur Memperoleh Informasi",
    href: "/standar-layanan/prosedur-memperoleh-informasi",
  },
  {
    title: "Informasi Umum Layanan",
    href: "/standar-layanan/informasi-umum-layanan",
  },
  { title: "Maklumat Pelayanan", href: "/standar-layanan/maklumat-pelayanan" },
  {
    title: "Pencegahan Korupsi dan Pakta Integritas",
    href: "/standar-layanan/pencegahan-korupsi-pakta-integritas",
  },
  { title: "Survey Kepuasan", href: "/standar-layanan/survey-kepuasan" },
  { title: "Tata Cara", href: "/standar-layanan/tata-cara" },
];

export const partners = [
  {
    name: "Kementerian PANRB",
    abbr: "PANRB",
    logo: panRB,
    url: "https://www.menpan.go.id",
  },
  {
    name: "Komisi Pemberantasan Korupsi",
    abbr: "KPK",
    logo: KPK,
    url: "https://www.kpk.go.id",
  },
  {
    name: "JDIH Nasional",
    abbr: "JDIH",
    logo: JDIH,
    url: "https://jdih.go.id",
  },
  {
    name: "SP4N LAPOR!",
    abbr: "LAPOR",
    logo: LAPOR,
    url: "https://www.lapor.go.id",
  },
  {
    name: "Ombudsman RI",
    abbr: "ORI",
    logo: Ombudsman,
    url: "https://www.ombudsman.go.id",
  },
  {
    name: "Kementerian PANRB",
    abbr: "KemenPANRB",
    logo: Kemenpan,
    url: "https://www.menpan.go.id",
  },
  {
    name: "Komdigi",
    abbr: "Komdigi",
    logo: KOMDIGI,
    url: "https://kominfo.go.id",
  },
];