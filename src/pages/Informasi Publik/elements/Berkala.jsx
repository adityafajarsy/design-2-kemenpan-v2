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
import { FileText, Download } from "lucide-react";

const Berkala = () => {
  const dataKategoriA = [
    {
      title: "Pelayanan Informasi PPID Pelaksana",
      items: ["Profil KemenPANRB 2024", "Struktur Organisasi 2024"],
    },
    {
      title: "Ringkasan Informasi tentang Program dan Kegiatan",
      items: ["Rencana Kerja 2024", "Laporan Kinerja Triwulan I-IV 2024"],
    },
    {
      title: "Ringkasan Informasi tentang Kinerja",
      items: ["LAKIP 2023", "LAKIP 2024"],
    },
  ];

  const dataKategoriB = [
    {
      title: "Informasi tentang Pengelolaan Keuangan",
      items: ["Laporan Keuangan 2023", "Laporan Keuangan 2024"],
    },
    {
      title: "Informasi tentang Pengadaan Barang dan Jasa",
      items: ["Rencana Umum Pengadaan 2024"],
    },
  ];

  const dataKategoriC = [
    {
      title: "Peraturan, Keputusan, dan/atau Kebijakan",
      items: [
        "Permenpan RB Nomor 1 Tahun 2024",
        "Permenpan RB Nomor 2 Tahun 2024",
        "Keputusan Menteri Tahun 2024",
      ],
    },
  ];

  return (
    <ContentPage title="Informasi Berkala">
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
              <BreadcrumbPage>Informasi Berkala</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Informasi Berkala adalah informasi yang wajib disediakan dan diumumkan secara berkala oleh Badan Publik sesuai dengan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik. Informasi ini mencakup profil, program, kegiatan, kinerja, dan pengelolaan keuangan yang diperbarui secara rutin.
          </p>
        </div>

        {/* Kategori A */}
        <div className="space-y-4">
          <div className="bg-accent/10 border-l-4 border-accent px-6 py-3 rounded-r">
            <h2 className="text-xl font-bold text-foreground">
             A - 	Informasi tentang profil Kementerian PANRB
            </h2>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-semibold text-foreground">Judul Informasi</TableHead>
                  <TableHead className="font-semibold text-foreground text-right w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataKategoriA.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-secondary/30 transition-colors">
                    <TableCell className="py-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-foreground mb-2">{item.title}</p>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {item.items.map((subItem, subIdx) => (
                              <li key={subIdx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors cursor-pointer">
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Kategori B */}
        <div className="space-y-4">
          <div className="bg-accent/10 border-l-4 border-accent px-6 py-3 rounded-r">
            <h2 className="text-xl font-bold text-foreground">
              B - Informasi Pengelolaan Keuangan dan Pengadaan
            </h2>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-semibold text-foreground">Judul Informasi</TableHead>
                  <TableHead className="font-semibold text-foreground text-right w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataKategoriB.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-secondary/30 transition-colors">
                    <TableCell className="py-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-foreground mb-2">{item.title}</p>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {item.items.map((subItem, subIdx) => (
                              <li key={subIdx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Kategori C */}
        <div className="space-y-4">
          <div className="bg-accent/10 border-l-4 border-accent px-6 py-3 rounded-r">
            <h2 className="text-xl font-bold text-foreground">
              C - Peraturan dan Kebijakan
            </h2>
          </div>

          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-semibold text-foreground">Judul Informasi</TableHead>
                  <TableHead className="font-semibold text-foreground text-right w-32">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataKategoriC.map((item, idx) => (
                  <TableRow key={idx} className="hover:bg-secondary/30 transition-colors">
                    <TableCell className="py-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-foreground mb-2">{item.title}</p>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {item.items.map((subItem, subIdx) => (
                              <li key={subIdx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                        <Download className="h-4 w-4" />
                        Download
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

export default Berkala;
