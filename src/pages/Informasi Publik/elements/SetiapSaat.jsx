import ContentPage from "@/components/ContentPage";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { FileText, Eye } from "lucide-react";

const SetiapSaat = () => {
  const dataDokumenPublik = [
    {
      title: "Daftar Informasi Publik",
      description: "Katalog lengkap informasi publik yang tersedia",
      category: "Dokumen Umum",
    },
    {
      title: "Prosedur Permohonan Informasi",
      description: "Panduan lengkap cara mengajukan permohonan informasi publik",
      category: "Dokumen Umum",
    },
    {
      title: "Formulir Permohonan Informasi",
      description: "Template formulir untuk mengajukan permohonan informasi",
      category: "Dokumen Umum",
    },
  ];

  const dataLayanan = [
    {
      title: "Standar Operasional Prosedur (SOP) Pelayanan",
      description: "Prosedur standar dalam memberikan pelayanan kepada masyarakat",
      category: "Layanan",
    },
    {
      title: "Standar Pelayanan",
      description: "Standar kualitas dan waktu pelayanan informasi publik",
      category: "Layanan",
    },
    {
      title: "Maklumat Pelayanan",
      description: "Komitmen pelayanan PPID kepada pemohon informasi",
      category: "Layanan",
    },
  ];

  const dataKontak = [
    {
      title: "Daftar Pejabat Pengelola Informasi dan Dokumentasi",
      description: "Informasi kontak dan struktur organisasi PPID",
      category: "Kontak & Informasi",
    },
    {
      title: "Jadwal dan Agenda Kegiatan",
      description: "Kalender kegiatan dan acara yang dapat dihadiri publik",
      category: "Kontak & Informasi",
    },
    {
      title: "Informasi Pengaduan Masyarakat",
      description: "Cara dan mekanisme penyampaian pengaduan atau saran",
      category: "Kontak & Informasi",
    },
  ];

  return (
    <ContentPage title="Informasi Setiap Saat">
      <div className="space-y-6">
        {/* Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Beranda</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Informasi Setiap Saat</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Informasi Setiap Saat adalah informasi yang wajib tersedia setiap saat dan dapat diakses oleh publik tanpa perlu mengajukan permohonan khusus. Informasi ini mencakup dokumen-dokumen umum, prosedur layanan, formulir, dan berbagai informasi pendukung lainnya yang dapat diakses kapan saja oleh masyarakat.
          </p>
        </div>

        {/* Kategori: Dokumen Publik */}
        <div className="space-y-4">
          <div className="bg-accent/10 border-l-4 border-accent px-6 py-3 rounded-r">
            <h2 className="text-xl font-bold text-foreground">
              Dokumen dan Informasi Umum
            </h2>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-semibold text-foreground">Judul Dokumen</TableHead>
                  <TableHead className="font-semibold text-foreground w-48">Kategori</TableHead>
                  <TableHead className="font-semibold text-foreground text-right w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataDokumenPublik.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-secondary/30 transition-colors">
                    <TableCell className="py-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <div className="space-y-1">
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {item.category}
                    </TableCell>
                    <TableCell className="text-right">
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors cursor-pointer">
                        <Eye className="h-4 w-4" />
                        Lihat
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Kategori: Layanan */}
        <div className="space-y-4">
          <div className="bg-accent/10 border-l-4 border-accent px-6 py-3 rounded-r">
            <h2 className="text-xl font-bold text-foreground">
              Standar Layanan dan Prosedur
            </h2>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-semibold text-foreground">Judul Dokumen</TableHead>
                  <TableHead className="font-semibold text-foreground w-48">Kategori</TableHead>
                  <TableHead className="font-semibold text-foreground text-right w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataLayanan.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-secondary/30 transition-colors">
                    <TableCell className="py-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <div className="space-y-1">
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {item.category}
                    </TableCell>
                    <TableCell className="text-right">
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                        <Eye className="h-4 w-4" />
                        Lihat
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Kategori: Kontak & Informasi */}
        <div className="space-y-4">
          <div className="bg-accent/10 border-l-4 border-accent px-6 py-3 rounded-r">
            <h2 className="text-xl font-bold text-foreground">
              Kontak dan Informasi Pendukung
            </h2>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-semibold text-foreground">Judul Dokumen</TableHead>
                  <TableHead className="font-semibold text-foreground w-48">Kategori</TableHead>
                  <TableHead className="font-semibold text-foreground text-right w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataKontak.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-secondary/30 transition-colors">
                    <TableCell className="py-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <div className="space-y-1">
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {item.category}
                    </TableCell>
                    <TableCell className="text-right">
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                        <Eye className="h-4 w-4" />
                        Lihat
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </ContentPage>
  );
};

export default SetiapSaat;
