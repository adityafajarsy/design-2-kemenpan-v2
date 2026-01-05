import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileText, TrendingUp, Users, Clock, CheckCircle } from "lucide-react";

const statistikLayanan = [
  { icon: FileText, label: "Total Permohonan", value: "1,248", trend: "+12%" },
  { icon: CheckCircle, label: "Selesai Diproses", value: "1,156", trend: "+15%" },
  { icon: Clock, label: "Dalam Proses", value: "92", trend: "-8%" },
  { icon: Users, label: "Pemohon Unik", value: "876", trend: "+20%" }
];

const laporanBulanan = [
  { bulan: "Januari 2024", diterima: 98, selesai: 95, ditolak: 3, waktuRata: "5 hari" },
  { bulan: "Februari 2024", diterima: 112, selesai: 108, ditolak: 4, waktuRata: "4 hari" },
  { bulan: "Maret 2024", diterima: 105, selesai: 102, ditolak: 3, waktuRata: "5 hari" },
  { bulan: "April 2024", diterima: 124, selesai: 119, ditolak: 5, waktuRata: "4 hari" },
  { bulan: "Mei 2024", diterima: 118, selesai: 115, ditolak: 3, waktuRata: "4 hari" },
  { bulan: "Juni 2024", diterima: 132, selesai: 128, ditolak: 4, waktuRata: "5 hari" }
];

const daftarLaporan = [
  { judul: "Laporan Semester 1 Tahun 2025", ukuran: "2.4 MB" },
  { judul: "Laporan Semester 2 Tahun 2024", ukuran: "2.3 MB" },
  { judul: "Laporan Semester 1 Tahun 2024", ukuran: "2.2 MB" },
  { judul: "Laporan Semester 2 Tahun 2023", ukuran: "2.1 MB" },
  { judul: "Laporan Semester 1 Tahun 2023", ukuran: "2.0 MB" },
  { judul: "Laporan Semester 2 Tahun 2022", ukuran: "1.9 MB" },
  { judul: "Laporan Semester 1 Tahun 2022", ukuran: "1.8 MB" },
  { judul: "Laporan Semester 2 Tahun 2021", ukuran: "1.7 MB" },
  { judul: "Laporan Semester 1 Tahun 2021", ukuran: "1.6 MB" },
  { judul: "Laporan Semester 2 Tahun 2020", ukuran: "1.5 MB" },
  { judul: "Laporan Semester 1 Tahun 2020", ukuran: "1.4 MB" },
  { judul: "Laporan Tahun 2019", ukuran: "3.2 MB" },
  { judul: "Laporan Tahun 2018", ukuran: "3.0 MB" },
  { judul: "Laporan Tahun 2017", ukuran: "2.8 MB" },
  { judul: "Laporan Tahun 2016", ukuran: "2.0 MB" },
  { judul: "Laporan Tahun 2015", ukuran: "4.8 MB" },
];

const Ringkasan = () => {
  return (
    <ContentPage title="Laporan Ringkasan Layanan Akses Info Publik">
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Laporan ringkasan ini menyajikan data statistik pelayanan informasi publik 
          Kementerian PANRB secara periodik. Data ini disusun sebagai bentuk akuntabilitas 
          dan transparansi pengelolaan layanan informasi publik.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {statistikLayanan.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="h-8 w-8 text-primary" />
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                  {stat.trend}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Monthly Report Table */}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Rekapitulasi Bulanan 2024
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export Excel
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/5">
                <TableHead>Periode</TableHead>
                <TableHead className="text-center">Permohonan Diterima</TableHead>
                <TableHead className="text-center">Selesai</TableHead>
                <TableHead className="text-center">Ditolak</TableHead>
                <TableHead className="text-center">Waktu Rata-rata</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {laporanBulanan.map((data, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{data.bulan}</TableCell>
                  <TableCell className="text-center">{data.diterima}</TableCell>
                  <TableCell className="text-center text-green-600 font-medium">{data.selesai}</TableCell>
                  <TableCell className="text-center text-red-600">{data.ditolak}</TableCell>
                  <TableCell className="text-center">{data.waktuRata}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Download Section */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Unduh Laporan Lengkap</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {daftarLaporan.map((laporan, index) => (
            <Button key={index} variant="outline" className="gap-2 h-auto py-4 flex-col">
              <FileText className="h-6 w-6 text-primarybg-black" />
              <span>{laporan.judul}</span>
              <span className="text-xs text-muted-foreground">{laporan.ukuran}</span>
            </Button>

            ))}
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default Ringkasan;
