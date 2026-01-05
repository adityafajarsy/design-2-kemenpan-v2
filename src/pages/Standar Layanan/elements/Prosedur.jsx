import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  ArrowRight,
} from "lucide-react";

const langkahProsedur = [
  {
    step: 1,
    icon: FileText,
    title: "Ajukan Permohonan",
    desc: "Pemohon mengisi formulir permohonan informasi secara lengkap dan benar",
    detail:
      "Dapat dilakukan secara online melalui website atau datang langsung ke kantor PPID",
  },
  {
    step: 2,
    icon: Send,
    title: "Registrasi Permohonan",
    desc: "Petugas PPID melakukan registrasi dan memberikan tanda terima",
    detail: "Pemohon mendapatkan nomor registrasi untuk tracking permohonan",
  },
  {
    step: 3,
    icon: Clock,
    title: "Proses Verifikasi",
    desc: "PPID memverifikasi kelengkapan dan kejelasan permohonan",
    detail: "Waktu verifikasi maksimal 3 hari kerja",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Penyampaian Informasi",
    desc: "Informasi disampaikan kepada pemohon sesuai dengan permintaan",
    detail:
      "Maksimal 10 hari kerja sejak permohonan diterima, dapat diperpanjang 7 hari kerja",
  },
];

const persyaratan = [
  "Kartu Tanda Penduduk (KTP) atau identitas lain yang sah",
  "Surat kuasa (jika dikuasakan kepada pihak lain)",
  "Alasan permohonan informasi publik",
  "Alamat/nomor telepon yang dapat dihubungi",
];

const Prosedur = () => {
  return (
    <ContentPage title="Prosedur Memperoleh Informasi">
      {/* Introduction */}
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Setiap orang berhak memperoleh informasi publik sesuai dengan
          ketentuan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan
          Informasi Publik. Berikut adalah prosedur untuk memperoleh informasi
          publik di Kementerian PANRB.
        </p>
      </div>

      {/* Procedure Steps */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Langkah-langkah Permohonan
        </h2>
        <div className="space-y-6">
          {langkahProsedur.map((langkah, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="bg-primary p-6 md:w-32 flex flex-col items-center justify-center text-primary-foreground">
                  <span className="text-3xl font-bold mb-2">
                    {langkah.step}
                  </span>
                  <langkah.icon className="h-8 w-8" />
                </div>
                <CardContent className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {langkah.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{langkah.desc}</p>
                  <p className="text-sm text-primary">{langkah.detail}</p>
                </CardContent>
                {index < langkahProsedur.length - 1 && (
                  <div className="hidden md:flex items-center px-4">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            Persyaratan Permohonan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {persyaratan.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Time Frame */}
      <Card className="mb-8 bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Jangka Waktu Penyelesaian
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">
                10 Hari Kerja
              </p>
              <p className="text-sm text-muted-foreground">
                Waktu standar penyelesaian permohonan
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">
                + 7 Hari Kerja
              </p>
              <p className="text-sm text-muted-foreground">
                Perpanjangan (jika diperlukan dengan pemberitahuan tertulis)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Form */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Unduh Hak Memperoleh Informasi
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/src/assets/documents/Hak-Memperoleh-Informasi-OK.pdf"
              download="Hak Memperoleh Informasi OK.pdf"
            >
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Hak Permohonan Informasi
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default Prosedur;
