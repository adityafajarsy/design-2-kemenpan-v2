import { Calendar, Eye, Share2, Facebook, Twitter, Linkedin, Link2, ChevronRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";

const DetailBerita = () => {
  // Data artikel utama
  const article = {
    title: "Peningkatan Transparansi Informasi Publik 2025",
    date: "20 Januari 2025",
    author: "Tim PPID Kementerian PANRB",
    views: "1,234",
    tags: ["PPID", "Keterbukaan Informasi", "Transparansi"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    content: `
      <p class="lead">Kementerian PANRB terus berkomitmen meningkatkan transparansi pelayanan informasi publik untuk masyarakat melalui berbagai program digitalisasi dan penyederhanaan proses administrasi yang lebih efisien dan efektif.</p>

      <h2>Latar Belakang</h2>
      <p>Dalam era digital yang terus berkembang, transparansi informasi publik menjadi salah satu pilar utama dalam mewujudkan pemerintahan yang akuntabel dan responsif terhadap kebutuhan masyarakat. Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi (PANRB) memahami pentingnya keterbukaan informasi sebagai hak fundamental setiap warga negara.</p>

      <p>Berdasarkan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, setiap badan publik wajib menyediakan dan memberikan informasi publik yang berada di bawah kewenangannya kepada setiap pemohon informasi publik, kecuali informasi yang dikecualikan sesuai dengan ketentuan.</p>

      <h2>Program Strategis 2025</h2>
      <p>Untuk mewujudkan komitmen tersebut, PPID Kementerian PANRB telah menyusun sejumlah program strategis yang akan dilaksanakan sepanjang tahun 2025, antara lain:</p>

      <h3>1. Digitalisasi Penuh Layanan Informasi</h3>
      <p>Program ini mencakup pengembangan portal informasi publik yang lebih user-friendly dan terintegrasi dengan berbagai platform digital. Masyarakat dapat mengakses informasi secara real-time melalui website, aplikasi mobile, dan media sosial resmi Kementerian PANRB.</p>

      <p>Sistem baru ini dilengkapi dengan fitur-fitur canggih seperti pencarian cerdas berbasis AI, chatbot untuk layanan 24/7, dan dashboard interaktif yang memudahkan pemahaman data kompleks.</p>

      <h3>2. Penyederhanaan Prosedur Permohonan</h3>
      <p>Kementerian PANRB akan menerapkan sistem permohonan informasi yang lebih sederhana dan cepat. Proses yang sebelumnya membutuhkan waktu hingga 10 hari kerja, kini ditargetkan dapat diselesaikan dalam 3-5 hari kerja untuk informasi yang tidak memerlukan pertimbangan khusus.</p>

      <h3>3. Peningkatan Kapasitas SDM</h3>
      <p>Program pelatihan dan workshop akan diselenggarakan secara berkala untuk meningkatkan kompetensi petugas PPID di seluruh unit kerja. Pelatihan mencakup aspek teknis pengelolaan informasi, komunikasi publik, hingga manajemen data.</p>

      <h2>Capaian dan Target</h2>
      <p>Sepanjang tahun 2024, PPID Kementerian PANRB telah melayani lebih dari 5.000 permohonan informasi dengan tingkat kepuasan masyarakat mencapai 4.5 dari skala 5. Pada tahun 2025, target yang ditetapkan adalah:</p>

      <ul>
        <li>Meningkatkan jumlah informasi berkala yang dipublikasikan menjadi 100% sesuai standar</li>
        <li>Mengurangi waktu respon permohonan informasi hingga 50%</li>
        <li>Meningkatkan skor kepuasan masyarakat menjadi minimal 4.7</li>
        <li>Mengimplementasikan sistem tracking otomatis untuk setiap permohonan</li>
        <li>Menyelenggarakan minimal 20 kegiatan sosialisasi ke berbagai daerah</li>
      </ul>

      <h2>Komitmen Berkelanjutan</h2>
      <p>Menteri PANRB menegaskan bahwa transparansi bukan hanya sekadar kewajiban hukum, tetapi merupakan bentuk tanggung jawab pemerintah kepada rakyat. "Kami berkomitmen untuk terus berinovasi dan meningkatkan kualitas layanan informasi publik, karena masyarakat yang well-informed adalah kunci dari demokrasi yang sehat," ujar Menteri PANRB dalam konferensi pers awal tahun 2025.</p>

      <p>Kementerian PANRB juga mengajak seluruh stakeholder, termasuk organisasi masyarakat sipil, media massa, dan akademisi untuk bersama-sama mengawal implementasi keterbukaan informasi publik di Indonesia.</p>

      <h2>Penutup</h2>
      <p>Dengan berbagai program dan inisiatif yang telah dirancang, Kementerian PANRB optimis dapat mewujudkan layanan informasi publik yang lebih baik, lebih cepat, dan lebih mudah diakses oleh seluruh masyarakat Indonesia. Transparansi adalah jalan menuju pemerintahan yang lebih baik dan kepercayaan publik yang lebih kuat.</p>

      <p>Untuk informasi lebih lanjut atau mengajukan permohonan informasi, masyarakat dapat mengunjungi portal resmi PPID Kementerian PANRB atau menghubungi layanan customer service yang tersedia.</p>
    `
  };

  // Berita terkait
  const relatedNews = [
    {
      title: "Workshop Pelayanan Informasi Digital untuk ASN",
      date: "15 Januari 2025",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    },
    {
      title: "Laporan Kinerja PPID Tahun 2024 Menunjukkan Peningkatan",
      date: "10 Januari 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      title: "Inovasi Sistem Layanan Informasi Terintegrasi",
      date: "5 Januari 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
  ];

  const handleShare = (platform) => {
    console.log(`Share to ${platform}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Beranda</a>
            <ChevronRight className="h-4 w-4" />
            <a href="/semua-berita" className="hover:text-primary">Berita</a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Detail Berita</span>
          </div>
        </div>
      </div>

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{article.views} views</span>
                </div>
                <span>•</span>
                <span>Oleh {article.author}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, index) => (
                  <span key={index} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-3 pb-6 border-b border-border">
                <span className="text-sm font-medium text-foreground">Bagikan:</span>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => handleShare('copy')}
                >
                  <Link2 className="h-4 w-4" />
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Divider */}
            <div className="border-t border-border my-12" />

            {/* Related News */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Berita Terkait</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedNews.map((news, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-2">{news.date}</p>
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Back to News */}
            <div className="mt-12 text-center">
              <Link to="/semua-berita">
                <Button variant="outline" className="gap-2">
                  <ChevronRight className="h-4 w-4 rotate-180" />
                  Kembali ke Semua Berita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <style>{`
        .prose {
          color: hsl(var(--foreground));
        }
        .prose p {
          margin-bottom: 1.25rem;
          line-height: 1.75;
        }
        .prose .lead {
          font-size: 1.25rem;
          font-weight: 500;
          color: hsl(var(--muted-foreground));
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid hsl(var(--primary));
          display: inline-block;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose ul {
          list-style-type: disc;
          margin-left: 2rem;
          margin-bottom: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.75rem;
          line-height: 1.75;
        }
        .prose strong {
          font-weight: 600;
          color: hsl(var(--foreground));
        }
      `}</style>
    </div>
  );
};

export default DetailBerita;