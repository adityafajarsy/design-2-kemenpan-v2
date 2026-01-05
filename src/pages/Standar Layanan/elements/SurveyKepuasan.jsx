import ContentPage from "@/components/ContentPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const unsurSKM = [
  "Persyaratan",
  "Sistem, Mekanisme, dan Prosedur",
  "Waktu Penyelesaian",
  "Biaya/Tarif",
  "Produk Layanan",
  "Kompetensi Pelaksana",
  "Perilaku Pelaksana",
  "Penanganan Pengaduan",
  "Sarana dan Prasarana",
];

const laporanSKM = [
  {
    id: 1,
    judul:
      "Laporan Survei Kepuasan Masyarakat Kementerian PANRB Semester II Tahun 2024",
    tahun: 2024,
    periode: "Semester II",
    jenis: "SKM",
    link: "#",
  },
  {
    id: 2,
    judul:
      "Laporan Survei Kepuasan Masyarakat Kementerian PANRB Semester I Tahun 2024",
    tahun: 2024,
    periode: "Semester I",
    jenis: "SKM",
    link: "#",
  },
  {
    id: 3,
    judul:
      "Laporan Survei Kepuasan Masyarakat Kementerian PANRB Semester II Tahun 2023",
    tahun: 2023,
    periode: "Semester II",
    jenis: "SKM",
    link: "#",
  },
  {
    id: 4,
    judul:
      "Laporan Survei Kepuasan Masyarakat Kementerian PANRB Semester I Tahun 2023",
    tahun: 2023,
    periode: "Semester I",
    jenis: "SKM",
    link: "#",
  },
  {
    id: 5,
    judul: "Laporan Survei Kepuasan Masyarakat Kementerian PANRB Tahun 2022",
    tahun: 2022,
    periode: "Tahunan",
    jenis: "SKM",
    link: "#",
  },
  {
    id: 6,
    judul: "Laporan Kepuasan Pelayanan Informasi Publik Triwulan IV Tahun 2021",
    tahun: 2021,
    periode: "Triwulan IV",
    jenis: "IKM",
    link: "#",
  },
  {
    id: 7,
    judul:
      "Laporan Kepuasan Pelayanan Informasi Publik Triwulan III Tahun 2021",
    tahun: 2021,
    periode: "Triwulan III",
    jenis: "IKM",
    link: "#",
  },
  {
    id: 8,
    judul: "Laporan Kepuasan Pelayanan Informasi Publik Triwulan II Tahun 2021",
    tahun: 2021,
    periode: "Triwulan II",
    jenis: "IKM",
    link: "#",
  },
  {
    id: 9,
    judul: "Laporan Kepuasan Pelayanan Informasi Publik Triwulan I Tahun 2021",
    tahun: 2021,
    periode: "Triwulan I",
    jenis: "IKM",
    link: "#",
  },
];

const SurveyKepuasan = () => {
  return (
    <ContentPage
      title="Laporan Kepuasan Pelayanan Informasi"
      description="Publikasi hasil Survei Kepuasan Masyarakat (SKM) atas pelayanan informasi publik di Kementerian PANRB."
    >
      {/* Ringkasan */}
      <div className="space-y-4 mb-10 text-muted-foreground leading-relaxed">
        <p>
          Survei Kepuasan Masyarakat di Kementerian Pendayagunaan Aparatur
          Negara dan Reformasi Birokrasi (PANRB) dilakukan secara periodik
          setiap semester.
        </p>
        <p>
          Pada Tahun 2024, survei dilakukan terhadap <b>5.696 responden</b>.
          Nilai Indeks Kepuasan Masyarakat (IKM) yang diperoleh sebesar
          <b> 3,65</b> dengan nilai SKM <b>91,13</b>, dan termasuk kategori
          <b> Sangat Baik</b>.
        </p>
      </div>

      {/* Unsur Penilaian */}
      <Card className="mb-10">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">
            Unsur Penilaian Survei Kepuasan Masyarakat
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            {unsurSKM.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Tabel Laporan */}
      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-foreground">
              <tr>
                <th className="px-4 py-3 text-left w-12">No</th>
                <th className="px-4 py-3 text-left">Judul</th>
                <th className="px-4 py-3 text-center w-32">Tautan</th>
              </tr>
            </thead>
            <tbody>
              {laporanSKM.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-t transition-colors hover:bg-muted/40"
                >
                  {/* No */}
                  <td className="px-4 py-3 text-center text-sm text-muted-foreground w-12">
                    {index + 1}
                  </td>

                  {/* Judul */}
                  <td className="px-4 py-3">
                    <p className="text-sm md:text-base text-foreground leading-relaxed">
                      {item.judul}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {item.periode} • {item.tahun}
                    </span>
                  </td>

                  {/* Aksi */}
                  <td className="px-4 py-3 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-2"
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <FileText className="h-4 w-4" />
                        Lihat
                      </a>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default SurveyKepuasan;
