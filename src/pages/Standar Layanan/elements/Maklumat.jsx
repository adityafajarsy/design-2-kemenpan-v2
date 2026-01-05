import ContentPage from "@/components/ContentPage";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, FileSignature, Shield } from "lucide-react";

const komitmenLayanan = [
  "Memberikan pelayanan informasi publik secara profesional, transparan, dan akuntabel",
  "Menyediakan informasi yang akurat, lengkap, dan mudah diakses",
  "Menyelesaikan permohonan informasi sesuai dengan waktu yang ditetapkan",
  "Tidak memungut biaya untuk pelayanan informasi publik, kecuali biaya penggandaan",
  "Menjaga kerahasiaan identitas pemohon informasi publik",
  "Memberikan pelayanan yang ramah, sopan, dan tidak diskriminatif",
  "Menyediakan sarana dan prasarana pelayanan yang memadai",
  "Menerima kritik dan saran untuk perbaikan layanan",
];

const Maklumat = () => {
  return (
    <ContentPage title="Maklumat Pelayanan">
      {/* Introduction */}
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Salah satu elemen penting dalam mewujudkan penyelenggaraan negara yang
          terbuka adalah hak publik untuk memperoleh Informasi sesuai dengan
          peraturan perundang-undangan. Hak atas Informasi menjadi sangat
          penting karena makin terbukanya penyelenggaraan negara untuk diawasi
          publik, maka penyelenggaraan negara tersebut akan semakin dapat
          dipertanggungjawabkan. <br /> <br />
          Hak setiap orang untuk memperoleh Informasi sangat relevan dalam
          meningkatkan kualitas keterlibatan masyarakat dalam proses pengambilan
          keputusan publik. Partisipasi masyarakat ini tidak banyak berarti
          tanpa jaminan keterbukaan Informasi Publik.
          <br /> <br />
          Keberadaan Undang-Undang tentang Keterbukaan Informasi Publik sangat
          penting sebagai landasan hukum yang berkaitan dengan: (1) hak setiap
          orang untuk memperoleh Informasi; (2) kewajiban Badan Publik
          menyediakan dan melayani permintaan informasi secara cepat, tepat
          waktu, biaya ringan/proporsional, dan cara sederhana; (3) pengecualian
          bersifat ketat dan terbatas; (4) kewajiban Badan Publik untuk
          membenahi sistem dokumentasi dan pelayanan Informasi.
        </p>
      </div>

      {/* Main Maklumat Card */}
      <Card className="mb-10 overflow-hidden">
        <div className="bg-linear-to-br from-primary to-primary/80 text-primary-foreground p-8 text-center">
          <Award className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">MAKLUMAT PELAYANAN</h2>
          <p className="text-lg opacity-90">PPID Kementerian PANRB</p>
        </div>
        <CardContent className="p-8">
          <div className="prose max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6 text-center italic">
              "Dengan terbentuknya PPID, pemohon informasi publik sesuai dengan haknya dapat memperoleh informasi publik yang dihasilkan oleh Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi sesuai dengan ketentuan dalam UU No.14 Tahun 2008 Tentang Keterbukaan Informasi Publik."
            </p>
            <div className="flex justify-center items-center gap-4 pt-6 border-t">
              <FileSignature className="h-8 w-8 text-primary" />
              <div className="text-center">
                <p className="font-semibold text-foreground">
                  PPID Kementerian PANRB
                </p>
                <p className="text-sm text-muted-foreground">
                  Ditetapkan di Jakarta, Januari 2024
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Commitments */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Shield className="h-7 w-7 text-primary" />
          Komitmen Pelayanan
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {komitmenLayanan.map((komitmen, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{komitmen}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Legal Basis */}
      <Card className="bg-secondary/30">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Dasar Hukum
          </h3>
          <div className="space-y-2 text-muted-foreground">
            <p>
              1. Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi
              Publik
            </p>
            <p>2. Undang-Undang Nomor 25 Tahun 2009 tentang Pelayanan Publik</p>
            <p>
              3. Peraturan Komisi Informasi Nomor 1 Tahun 2010 tentang Standar
              Layanan Informasi Publik
            </p>
            <p>
              4. Peraturan Menteri PANRB Nomor 15 Tahun 2014 tentang Pedoman
              Standar Pelayanan
            </p>
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default Maklumat;
