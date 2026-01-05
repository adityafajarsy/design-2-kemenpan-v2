import ContentPage from "@/components/ContentPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, Eye } from "lucide-react";

const laporanTahunan = [
  {
    tahun: "2024",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2024",
    status: "Dalam Proses",
    ukuran: "-",
    tanggal: "Maret 2025"
  },
  {
    tahun: "2023",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2023",
    status: "Tersedia",
    ukuran: "5.8 MB",
    tanggal: "15 Maret 2024"
  },
  {
    tahun: "2022",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2022",
    status: "Tersedia",
    ukuran: "4.9 MB",
    tanggal: "20 Maret 2023"
  },
  {
    tahun: "2021",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2021",
    status: "Tersedia",
    ukuran: "4.2 MB",
    tanggal: "18 Maret 2022"
  },
  {
    tahun: "2020",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2020",
    status: "Tersedia",
    ukuran: "3.8 MB",
    tanggal: "22 Maret 2021"
  },
  {
    tahun: "2019",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2019",
    status: "Tersedia",
    ukuran: "3.8 MB",
    tanggal: "22 Maret 2021"
  },
  {
    tahun: "2018",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2018",
    status: "Tersedia",
    ukuran: "3.8 MB",
    tanggal: "22 Maret 2021"
  },
  {
    tahun: "2017",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2017",
    status: "Tersedia",
    ukuran: "3.8 MB",
    tanggal: "22 Maret 2021"
  },
  {
    tahun: "2016",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2016",
    status: "Tersedia",
    ukuran: "3.8 MB",
    tanggal: "22 Maret 2021"
  },
  {
    tahun: "2015",
    judul: "Laporan Tahunan PPID Kementerian PANRB Tahun 2015",
    status: "Tersedia",
    ukuran: "3.8 MB",
    tanggal: "22 Maret 2021"
  }
];

const Laporan = () => {
  return (
    <ContentPage title="Laporan Tahunan Layanan Info Publik">
      {/* Introduction */}
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Laporan Tahunan PPID Kementerian PANRB merupakan dokumen yang memuat ringkasan 
          pelayanan informasi publik selama satu tahun, termasuk statistik permohonan, 
          capaian kinerja, dan rencana pengembangan layanan ke depan.
        </p>
      </div>

      {/* Featured Report */}
      <Card className="mb-10 bg-linear-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-6 bg-white/10 rounded-2xl">
              <FileText className="h-16 w-16" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm opacity-80 mb-2">Laporan Terbaru</p>
              <h2 className="text-2xl font-bold mb-2">Laporan Tahunan PPID 2023</h2>
              <p className="opacity-90 mb-4">
                Laporan komprehensif mengenai pelayanan informasi publik Kementerian PANRB 
                selama tahun 2023, meliputi capaian, tantangan, dan strategi ke depan.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button variant="secondary" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Lihat Online
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent border-white/30 hover:bg-white/10">
                  <Download className="h-4 w-4" />
                  Unduh PDF (5.8 MB)
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* All Reports */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Arsip Laporan Tahunan</h2>
        {laporanTahunan.map((laporan, index) => (
          <Card key={index} className={`hover:shadow-md transition-shadow ${laporan.status === "Dalam Proses" ? "bg-muted/50" : ""}`}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl ${laporan.status === "Tersedia" ? "bg-primary/10" : "bg-muted"}`}>
                    <FileText className={`h-8 w-8 ${laporan.status === "Tersedia" ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl font-bold text-primary">{laporan.tahun}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        laporan.status === "Tersedia" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {laporan.status}
                      </span>
                    </div>
                    <h3 className="font-medium text-foreground mb-1">{laporan.judul}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {laporan.tanggal}
                      </span>
                      {laporan.ukuran !== "-" && (
                        <span>Ukuran: {laporan.ukuran}</span>
                      )}
                    </div>
                  </div>
                </div>
                {laporan.status === "Tersedia" && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="h-4 w-4" />
                      Lihat
                    </Button>
                    <Button size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Unduh
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ContentPage>
  );
};

export default Laporan;
