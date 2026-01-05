import ContentPage from "@/components/ContentPage";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, CheckCircle2 } from "lucide-react";

const misiList = [
  "Mengoptimalkan pelaksanaan Keterbukaan Informasi Publik yang transparan dan, akuntabel, sebagaimana diamanahkan dalam UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik;",
  "Memberikan Pelayanan Informasi yang Komunikatif, Responsif, Proaktif, Terintegratif, dan Informatif terkait kebijakan, program, dan kinerja Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi;",
  "Memfasilitasi pelayanan informasi publik yang ditujukan ke unit kerja di lingkungan Kementerian PANRB (online dan non-online).",
];

const VisiMisi = () => {
  return (
    <ContentPage title="Visi & Misi PPID">
      {/* Vision Section */}
      <div className="mb-12">
        <Card className="bg-linear-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <CardContent className="p-10 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold">Visi</h2>
            </div>
            <p className="text-xl leading-relaxed font-medium">
              "Menjadi tempat khusus Pelayanan Informasi yang Berakhlak
              (berorientasi pelayanan, akuntabel, kompeten, harmonis, loyal,
              adaptif, dan kolaboratif)"
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-primary/10 rounded-full">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Misi</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {misiList.map((misi, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{misi}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Motto Summary */}
      <Card className="bg-secondary/50">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-center text-black mb-4">
            BERAKHLAK PADA PELAYANAN INFORMASI PUBLIK
          </h3>
          <p className="mt-8 mb-8">
            BERAKHLAK dalam Memberikan pelayanan informasi publik yang bermakna
            bahwa:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  1. Komunikatif dengan stakeholders yang datang atau
                  berkomunikasi dengan petugas,
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  2. Responsif dalam memberikan tanggapan yaitu tanggapan
                  diberikan secara cepat, tepat, dan tanggap,
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  3. Proaktif dalam penyelesaian persoalan yaitu mendorong unit
                  terkait dengan konten informasi agar segera melengkapi data
                  dan informasi sesuai yang diminta pemohon ataupun pelapor,
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  4. Integratif dalam penyelenggaraan Pelayanan yaitu layanan
                  informasi dan pengaduan terpusat di PPID,
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  5. Edukatif yaitu memberikan edukasi kepada masyarakat atau
                  stakeholder serta memberikan informasi yang benar dan tepat
                  sesuai ketentuan yang berlaku serta memberikan sentuhan hati
                  dalam melayani.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Motto Summary */}
      <Card className="bg-secondary/50 mt-12">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Motto Kami</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Sepenuh Hati</p>
                <p className="text-sm text-muted-foreground">
                  Melayani Dengan Hati. Sepenuh hati, Hati-Hati dan Bukan dengan
                  sesuka hati.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Solutif</p>
                <p className="text-sm text-muted-foreground">
                  Datang dengan beribu persoalan, pulang dengan berjuta
                  senyuman.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default VisiMisi;
