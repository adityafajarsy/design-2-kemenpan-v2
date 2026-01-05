import { FileText, ExternalLink, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const regulasiData = [
  {
    title: "Undang-Undang No. 14 Tahun 2008",
    subtitle: "Tentang Keterbukaan Informasi Publik",
    year: "2008",
    link: "#",
  },
  {
    title: "Peraturan Pemerintah No. 61 Tahun 2010",
    subtitle: "Tentang Pelaksanaan UU No. 14 Tahun 2008",
    year: "2010",
    link: "#",
  },
  {
    title: "Peraturan Komisi Informasi Pusat No. 1 Tahun 2021",
    subtitle: "Tentang Standar Layanan Informasi Publik",
    year: "2021",
    link: "#",
  },
  {
    title: "Pedoman Menteri PANRB No. 2 Tahun 2024",
    subtitle:
      "Tentang Pengelolaan Layanan Informasi dan Dokumentasi di Lingkungan Kementerian PANRB",
    year: "2024",
    link: "#",
  },
  {
    title: "Keputusan Menteri PANRB No. 222 Tahun 2025",
    subtitle: "Tentang Standar Pelayanan di Kementerian PANRB",
    year: "2025",
    link: "#",
  },
  {
    title: "Keputusan Menteri PANRB No. 125 Tahun 2025",
    subtitle:
      "Tentang Pengelola Layanan Informasi dan Dokumentasi di Lingkungan Kementerian PANRB",
    year: "2025",
    link: "#",
  },
  {
    title: "Keputusan Sekretaris Menteri PANRB No. 41 Tahun 2025",
    subtitle:
      "Tentang Tim Pengelolaan Pengaduan dan Pelayanan Informasi di Lingkungan Kementerian PANRB",
    year: "2025",
    link: "#",
  },
];

const RegulasiPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-3">
            <Landmark className="w-4 h-4" />
            Regulasi Informasi Publik
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Regulasi PPID
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Dasar hukum dan landasan operasional Pejabat Pengelola Informasi dan
            Dokumentasi (PPID) Kementerian PANRB.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {regulasiData.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-foreground leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.subtitle}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">
                      Tahun {item.year}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1"
                      asChild
                    >
                      <a href={item.link} target="_blank" rel="noreferrer">
                        Lihat
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default RegulasiPage;
