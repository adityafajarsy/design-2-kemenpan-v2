import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, Users, Shield, Database, MessageSquare, Archive, Headphones, Workflow, ShieldCheck, Tags, Unlock, PenTool } from "lucide-react";

const fungsiPPID = [
  {
    icon: Archive,
    title: "Penyediaan & Pengamanan Informasi",
    desc: "Penyediaan, penyimpanan, pendokumentasian, dan pengamanan informasi publik."
  },
  {
    icon: Headphones,
    title: "Pelayanan Informasi",
    desc: "Pelayanan informasi publik sesuai dengan ketentuan peraturan perundang-undangan."
  },
  {
    icon: FileText,
    title: "Pelayanan Cepat & Sederhana",
    desc: "Pelayanan informasi publik yang cepat, tepat, dan sederhana kepada pemohon."
  },
  {
    icon: Workflow,
    title: "Prosedur Penyebarluasan",
    desc: "Penetapan prosedur operasional penyebarluasan informasi publik."
  },
  {
    icon: ShieldCheck,
    title: "Pengujian Konsekuensi",
    desc: "Pelaksanaan pengujian konsekuensi terhadap informasi yang dikecualikan."
  },
  {
    icon: Tags,
    title: "Klasifikasi Informasi",
    desc: "Pengklasifikasian informasi dan/atau pengubahannya sesuai ketentuan."
  },
  {
    icon: Unlock,
    title: "Informasi Dikecualikan",
    desc: "Penetapan informasi yang dikecualikan setelah berakhirnya jangka waktu pengecualian."
  },
  {
    icon: PenTool,
    title: "Pertimbangan Tertulis",
    desc: "Penetapan pertimbangan tertulis atas setiap kebijakan untuk memenuhi hak atas informasi publik."
  }
];

// const fungsiPPID = [
//   "Perencanaan layanan informasi publik",
//   "Pengorganisasian layanan informasi publik",
//   "Pelaksanaan layanan informasi publik",
//   "Pengawasan layanan informasi publik",
//   "Evaluasi dan pelaporan layanan informasi publik",
//   "Penyusunan daftar informasi publik",
//   "Penetapan informasi yang dikecualikan",
//   "Pengembangan sistem informasi dan dokumentasi"
// ];

const TugasFungsi = () => {
  return (
    <ContentPage title="Tugas dan Fungsi PPID">
      {/* Introduction */}
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Sesuai dengan Keputusan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 220 Tahun 2012 Tanggal 30 Juli 2012 tentang Susunan Pengelola Informasi dan Dokumentasi dimana salah satu tugas Pengelola Informasi dan Dokumentasi (PID) adalah menyediakan akses informasi publik bagi pemohon informasi,
        </p>
      </div>

      {/* Main Tasks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Fungsi Utama PPID</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fungsiPPID.map((tugas, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <tugas.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{tugas.title}</h3>
                    <p className="text-sm text-muted-foreground">{tugas.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Functions */}
      {/* <Card className="bg-linear-to-br from-secondary/50 to-secondary/30">
        <CardHeader>
          <CardTitle className="text-xl">Fungsi PPID</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {fungsiPPID.map((fungsi, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{fungsi}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}

      {/* Legal Basis */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-xl">Dasar Hukum</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>1. Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik</p>
          <p>2. Peraturan Pemerintah Nomor 61 Tahun 2010 tentang Pelaksanaan UU KIP</p>
          <p>3. Peraturan Komisi Informasi Nomor 1 Tahun 2010 tentang Standar Layanan Informasi Publik</p>
          <p>4. Peraturan Menteri PANRB tentang Pengelolaan Informasi dan Dokumentasi</p>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default TugasFungsi;
