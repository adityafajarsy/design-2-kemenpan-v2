import ContentPage from "@/components/ContentPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Play } from "lucide-react";

const kegiatan = [
  {
    id: 1,
    judul:
      "Taping Video Ucapan HUT Kota Palu, Kota Ternate, dan Video Dukungan Proyek Perubahan Kepala BSK",
    tanggal: "15 Desember 2024",
    lokasi: "Gedung Kementerian PANRB, Jakarta",
    deskripsi:
      "Menteri PANRB mewakili Video Ucapan HUT Kota Palu, Ternate dan Video dukungan proyek Kepala BSK.",
    peserta: "45 K/L",
    gambar:
      "https://www.menpan.go.id/site/images/berita_foto_backup/2025/Desember/20251212_-_Rapat_Konsolidasi_Penataan_Bidang_Kelembagaan_dan_Tata_Laksana_Instansi_Pusat6.jpeg",
  },
  {
    id: 2,
    judul: "Pertemuan dengan Kepala Badan Gizi Nasional terkait SDM",
    tanggal: "10 Desember 2024",
    lokasi: "Istana Negara, Jakarta",
    deskripsi:
      "Menteri PANRB mengadakan pertemuan dengan kepala Badan Gizi Nasional Terkait SDM.",
    peserta: "200 undangan",
    gambar:
      "https://www.menpan.go.id/site/images/berita_foto_backup/2025/Desember/20251208_-_Rapat_RPerpres_Pemerintah_Digital_10.jpg",
  },
  {
    id: 3,
    judul: "Pertemuan dengan Plh Deputi SDM Aparatur",
    tanggal: "5 Desember 2024",
    lokasi: "MPP Surabaya, Jawa Timur",
    deskripsi:
      "Menteri PANRB melakukan pertemuan dengan Plh Deputi SDM Aparatur.",
    peserta: "Pemda Surabaya",
    gambar:
      "https://www.menpan.go.id/site/images/berita_foto_backup/2025/Desember/20251211_-_Bilateral_Meeting_dengan_Director_of_Public_Governance_OECD_18.jpeg",
  },
  {
    id: 4,
    judul: "Pemberian Penghargaan Pelayanan Publik 2024",
    tanggal: "28 November 2024",
    lokasi: "Hotel Shangri-La, Jakarta",
    deskripsi:
      "Menteri PANRB memberikan penghargaan kepada unit pelayanan publik terbaik dari seluruh Indonesia.",
    peserta: "300 undangan",
    gambar:
      "https://www.menpan.go.id/site/images/berita_foto_backup/2025/Desember/20251208_-_Rapat_RPerpres_Pemerintah_Digital_10.jpg",
  },
  {
    id: 5,
    judul: "Dialog Publik: ASN BerAKHLAK",
    tanggal: "20 November 2024",
    lokasi: "Balairung UI, Depok",
    deskripsi:
      "Menteri PANRB berdialog dengan mahasiswa dan civitas akademika tentang peran ASN dalam mewujudkan pemerintahan yang bersih.",
    peserta: "500 peserta",
    gambar:
      "https://www.menpan.go.id/site/images/berita_foto_backup/2025/Desember/20251211_-_Bilateral_Meeting_dengan_Director_of_Public_Governance_OECD_13.jpeg",
  },
];

const Giat = () => {
  return (
    <ContentPage title="Giat Menteri">
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Halaman ini menyajikan informasi kegiatan resmi Menteri Pendayagunaan
          Aparatur Negara dan Reformasi Birokrasi dalam rangka pelaksanaan tugas
          dan fungsi kementerian.
        </p>
      </div>

      <Card className="mb-10 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="aspect-video md:aspect-auto bg-muted relative">
            <img
              src={kegiatan[0].gambar}
              alt="Kegiatan Menteri"
              className="w-full h-full object-cover"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full"
            >
              <Play className="h-8 w-8" />
            </Button>
          </div>
          <CardContent className="p-8 flex flex-col justify-center">
            <span className="text-sm text-primary font-medium mb-2">
              Kegiatan Terbaru
            </span>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {kegiatan[0].judul}
            </h2>
            <p className="text-muted-foreground mb-4">
              {kegiatan[0].deskripsi}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                {kegiatan[0].tanggal}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {kegiatan[0].lokasi}
              </span>
            </div>
            <Button className="w-fit gap-2">
              Baca Selengkapnya
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </div>
      </Card>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-foreground">Kegiatan Lainnya</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {kegiatan.slice(1).map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.tanggal}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {item.lokasi}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {item.peserta}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {item.judul}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {item.deskripsi}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary gap-1"
                >
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Button variant="outline" size="lg">
          Lihat Semua Kegiatan
        </Button>
      </div>
    </ContentPage>
  );
};

export default Giat;
