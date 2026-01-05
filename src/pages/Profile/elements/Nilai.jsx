import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Brain, Users, Star, RefreshCw, Handshake } from "lucide-react";

const nilaiBerakhlak = [
  {
    huruf: "Ber",
    nama: "Berorientasi Pelayanan",
    icon: Heart,
    deskripsi: "Komitmen memberikan pelayanan prima demi kepuasan masyarakat",
    penerapan: [
      "Memahami dan memenuhi kebutuhan masyarakat",
      "Ramah, cekatan, solutif, dan dapat diandalkan",
      "Melakukan perbaikan tiada henti"
    ]
  },
  {
    huruf: "A",
    nama: "Akuntabel",
    icon: Shield,
    deskripsi: "Bertanggung jawab atas kepercayaan yang diberikan",
    penerapan: [
      "Melaksanakan tugas dengan jujur dan bertanggung jawab",
      "Menggunakan kekayaan negara secara bertanggung jawab",
      "Tidak menyalahgunakan kewenangan jabatan"
    ]
  },
  {
    huruf: "K",
    nama: "Kompeten",
    icon: Brain,
    deskripsi: "Terus belajar dan mengembangkan kapabilitas",
    penerapan: [
      "Meningkatkan kompetensi diri untuk menjawab tantangan",
      "Membantu orang lain belajar",
      "Melaksanakan tugas dengan kualitas terbaik"
    ]
  },
  {
    huruf: "H",
    nama: "Harmonis",
    icon: Users,
    deskripsi: "Saling peduli dan menghargai perbedaan",
    penerapan: [
      "Menghargai setiap orang apapun latar belakangnya",
      "Suka menolong orang lain",
      "Membangun lingkungan kerja yang kondusif"
    ]
  },
  {
    huruf: "L",
    nama: "Loyal",
    icon: Star,
    deskripsi: "Berdedikasi dan mengutamakan kepentingan bangsa dan negara",
    penerapan: [
      "Memegang teguh ideologi Pancasila dan UUD 1945",
      "Setia kepada NKRI serta pemerintahan yang sah",
      "Menjaga nama baik sesama ASN dan institusi"
    ]
  },
  {
    huruf: "A",
    nama: "Adaptif",
    icon: RefreshCw,
    deskripsi: "Terus berinovasi dan antusias menghadapi perubahan",
    penerapan: [
      "Cepat menyesuaikan diri menghadapi perubahan",
      "Terus berinovasi dan mengembangkan kreativitas",
      "Bertindak proaktif"
    ]
  },
  {
    huruf: "K",
    nama: "Kolaboratif",
    icon: Handshake,
    deskripsi: "Membangun kerja sama yang sinergis",
    penerapan: [
      "Memberi kesempatan kepada berbagai pihak untuk berkontribusi",
      "Terbuka dalam bekerja sama untuk hasil lebih baik",
      "Menggerakkan pemanfaatan berbagai sumber daya"
    ]
  }
];

const NilaiNilai = () => {
  return (
    <ContentPage title="Nilai-nilai KemenPANRB">
      <div className="mb-10">
        <div className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">BerAKHLAK</h2>
          <p className="text-lg opacity-90">
            Core Values ASN yang menjadi pedoman perilaku dalam memberikan pelayanan publik. 
            Nilai-nilai ini mencerminkan komitmen Kementerian PANRB dalam membangun aparatur 
            sipil negara yang profesional dan berintegritas.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {nilaiBerakhlak.map((nilai, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className="bg-primary/10 p-6 md:w-48 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-primary mb-2">{nilai.huruf}</span>
                <nilai.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 p-6">
                <CardTitle className="text-xl mb-2">{nilai.nama}</CardTitle>
                <p className="text-muted-foreground mb-4">{nilai.deskripsi}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Penerapan:</p>
                  {nilai.penerapan.map((item, i) => (
                    <p key={i} className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/30">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ContentPage>
  );
};

export default NilaiNilai;
