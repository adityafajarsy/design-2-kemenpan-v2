import { ChevronRight, Calendar, Tag, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

const SemuaBerita = () => {
  const allNews = [
    {
      title: "Peningkatan Transparansi Informasi Publik 2025",
      excerpt:
        "Kementerian PANRB terus berkomitmen meningkatkan transparansi pelayanan informasi publik untuk masyarakat melalui berbagai program digitalisasi dan penyederhanaan proses administrasi.",
      date: "20 Januari 2025",
      tags: ["#PPID", "#KeterbukaanInformasi"],
      views: "1,234",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      title: "Workshop Pelayanan Informasi Digital untuk ASN",
      excerpt:
        "PPID Kementerian PANRB menyelenggarakan workshop digitalisasi layanan informasi untuk aparatur sipil negara dengan menghadirkan narasumber dari berbagai instansi pemerintah.",
      date: "15 Januari 2025",
      tags: ["#PPID", "#Digitalisasi"],
      views: "987",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    },
    {
      title: "Laporan Kinerja PPID Tahun 2024 Menunjukkan Peningkatan",
      excerpt:
        "Capaian kinerja PPID Kementerian PANRB menunjukkan peningkatan signifikan dalam kepuasan masyarakat terhadap layanan informasi publik dengan skor 4.5 dari 5.",
      date: "10 Januari 2025",
      tags: ["#PPID", "#LaporanKinerja"],
      views: "2,156",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "Inovasi Sistem Layanan Informasi Terintegrasi",
      excerpt:
        "Peluncuran sistem layanan informasi terintegrasi yang memudahkan masyarakat mengakses berbagai dokumen dan data publik secara online dengan lebih cepat dan efisien.",
      date: "5 Januari 2025",
      tags: ["#Inovasi", "#LayananPublik"],
      views: "1,543",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Sosialisasi Hak Publik atas Informasi di Kampus",
      excerpt:
        "PPID Kementerian PANRB menggelar roadshow sosialisasi hak publik atas informasi di berbagai kampus untuk meningkatkan kesadaran generasi muda tentang keterbukaan informasi.",
      date: "28 Desember 2024",
      tags: ["#Sosialisasi", "#GenerasiMuda"],
      views: "876",
      image:
        "https://images.unsplash.com/photo-1764866557879-059e1db80a50?w=800&h=600&fit=cro",
    },
    {
      title: "Penghargaan PPID Terbaik Tingkat Nasional 2024",
      excerpt:
        "PPID Kementerian PANRB meraih penghargaan sebagai PPID terbaik tingkat nasional tahun 2024 atas komitmen dalam memberikan layanan informasi yang berkualitas kepada masyarakat.",
      date: "20 Desember 2024",
      tags: ["#Penghargaan", "#PPID"],
      views: "3,245",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop",
    },
  ];

  const popularTags = [
    "PPID",
    "Keterbukaan Informasi",
    "Digitalisasi",
    "Layanan Publik",
    "Transparansi",
    "Inovasi",
    "Reformasi Birokrasi",
  ];

  const trendingNews = [
    { title: "Panduan Lengkap Permohonan Informasi Publik", views: "5,432" },
    { title: "Mengenal Lebih Dekat PPID Kementerian PANRB", views: "4,321" },
    { title: "Tutorial Akses Dokumen Digital PPID", views: "3,876" },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-12 bg-linear-to-r from-primary/10 via-accent/5 to-primary/10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Semua Berita
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Update terbaru dan informasi lengkap seputar PPID Kementerian
              PANRB
            </p>
            <div className="max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Cari berita..."
                className="h-12"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {allNews.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-64 h-48 md:h-auto relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                        <span>•</span>
                        <span>{item.views} views</span>
                      </div>
                      <div className="flex gap-2 mb-3">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link to="/detail-berita">
                        <h3 className="font-bold text-xl mb-3 text-foreground hover:text-primary transition-colors cursor-pointer">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <Link to="/detail-berita">
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary"
                        >
                          Baca Selengkapnya{" "}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Pagination */}
              <div className="flex justify-center gap-2 pt-8">
                <Button variant="outline" size="sm" disabled>
                  Sebelumnya
                </Button>
                <Button variant="default" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Selanjutnya
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">
                    Sedang Trending
                  </h3>
                </div>
                <div className="space-y-4">
                  {trendingNews.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                      <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.views} views
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Tags */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">
                    Tag Populer
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 bg-linear-to-br from-primary/10 to-accent/10">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Berlangganan Newsletter
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Dapatkan update berita terbaru langsung ke email Anda
                </p>
                <Input type="email" placeholder="Email Anda" className="mb-3" />
                <Button className="w-full">Berlangganan</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SemuaBerita;
