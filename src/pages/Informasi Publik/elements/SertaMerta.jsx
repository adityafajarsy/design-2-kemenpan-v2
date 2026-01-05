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
import { AlertTriangle, Eye } from "lucide-react";

const SertaMerta = () => {
  const dataInformasiMendesak = [
    {
      title: "Peringatan Dini Bencana",
      description: "Informasi terkait potensi bencana yang memerlukan tindakan cepat",
      date: "15 Januari 2025",
    },
    {
      title: "Pengumuman Darurat COVID-19",
      description: "Update kebijakan penanganan pandemi dan protokol kesehatan",
      date: "10 Januari 2025",
    },
    {
      title: "Penarikan Produk atau Layanan",
      description: "Pemberitahuan penarikan produk yang berpotensi membahayakan",
      date: "5 Januari 2025",
    },
  ];

  const dataKeselamatanPublik = [
    {
      title: "Informasi Keamanan Siber",
      description: "Peringatan tentang ancaman keamanan data dan sistem informasi",
      date: "20 Januari 2025",
    },
    {
      title: "Pengumuman Gangguan Layanan Publik",
      description: "Informasi terkait gangguan layanan yang mempengaruhi masyarakat luas",
      date: "18 Januari 2025",
    },
  ];

  return (
    <ContentPage title="Informasi Serta Merta">
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
              <BreadcrumbPage>Informasi Serta Merta</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Informasi Serta Merta adalah informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum, yang wajib diumumkan dan disebarluaskan secara serta merta oleh Badan Publik. Informasi ini mencakup peringatan dini, keadaan darurat, dan informasi penting lainnya yang memerlukan respons segera dari masyarakat.
          </p>
        </div>

        {/* Kategori: Informasi Mendesak */}
        <div className="space-y-4">
          <div className="bg-destructive/10 border-l-4 border-destructive px-6 py-3 rounded-r">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Informasi Mendesak dan Keadaan Darurat
            </h2>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-semibold text-foreground">Judul Informasi</TableHead>
                  <TableHead className="font-semibold text-foreground w-40">Tanggal</TableHead>
                  <TableHead className="font-semibold text-foreground text-right w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataInformasiMendesak.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-secondary/30 transition-colors">
                    <TableCell className="py-4">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {item.date}
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

        {/* Kategori: Keselamatan Publik */}
        <div className="space-y-4">
          <div className="bg-accent/10 border-l-4 border-accent px-6 py-3 rounded-r">
            <h2 className="text-xl font-bold text-foreground">
              Informasi Keselamatan Publik
            </h2>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-semibold text-foreground">Judul Informasi</TableHead>
                  <TableHead className="font-semibold text-foreground w-40">Tanggal</TableHead>
                  <TableHead className="font-semibold text-foreground text-right w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataKeselamatanPublik.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-secondary/30 transition-colors">
                    <TableCell className="py-4">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {item.date}
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

export default SertaMerta;
