import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, FileCheck, Users, CheckCircle, XCircle } from "lucide-react";

const prinsipAntiKorupsi = [
  {
    icon: Shield,
    title: "Integritas",
    desc: "Menjunjung tinggi kejujuran dan kebenaran dalam setiap tindakan"
  },
  {
    icon: FileCheck,
    title: "Transparansi",
    desc: "Keterbukaan dalam proses pelayanan dan pengambilan keputusan"
  },
  {
    icon: Users,
    title: "Akuntabilitas",
    desc: "Pertanggungjawaban atas setiap tugas dan wewenang yang diberikan"
  }
];

const larangan = [
  "Menerima atau meminta imbalan dalam bentuk apapun",
  "Memperlambat atau mempercepat pelayanan untuk kepentingan pribadi",
  "Memberikan perlakuan istimewa kepada pihak tertentu",
  "Menyalahgunakan informasi untuk kepentingan pribadi atau golongan",
  "Melakukan diskriminasi dalam pelayanan"
];

const hak = [
  "Mendapatkan pelayanan yang sama tanpa diskriminasi",
  "Mendapatkan informasi yang akurat dan lengkap",
  "Mengajukan keberatan jika tidak puas dengan pelayanan",
  "Melaporkan dugaan penyimpangan atau korupsi",
  "Mendapatkan perlindungan sebagai pelapor (whistleblower)"
];

const PencegahanKorupsi = () => {
  return (
    <ContentPage title="Pencegahan Korupsi dan Pakta Integritas">
      {/* Introduction */}
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Kementerian PANRB berkomitmen menyelenggarakan pelayanan informasi publik yang 
          bersih dari praktik korupsi, kolusi, dan nepotisme. Setiap pegawai PPID telah 
          menandatangani Pakta Integritas sebagai bentuk komitmen tersebut.
        </p>
      </div>

      <div className="mb-10">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <a 
                    href="/documents/inpres-nomor-2-tahun-2014.pdf"
                    download="Inpres nomer 2 pen"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-lg leading-tight block mb-2"
                  >
                    Inpres No. 2 Tahun 2014 tentang Aksi Pencegahan dan Pemberantasan Korupsi Tahun 2014
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <a 
                    href="/documents/permenpanrb-49-2011.pdf"
                    download
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-lg leading-tight block mb-2"
                  >
                    Permenpanrb No. 49 Tahun 2011 tentang Pedoman Umum Pakta Integritas di Lingkungan Kementerian/Lembaga dan Pemerintah Daerah
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-6">Prinsip Anti Korupsi</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {prinsipAntiKorupsi.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Card className="border-destructive/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Larangan bagi Petugas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {larangan.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              Hak Pemohon Informasi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {hak.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Saluran Pelaporan</h3>
          <p className="text-muted-foreground mb-4">
            Jika Anda menemukan indikasi pelanggaran atau penyimpangan dalam pelayanan informasi publik, 
            silakan laporkan melalui:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg">
              <p className="font-medium text-foreground">Inspektorat</p>
              <p className="text-sm text-muted-foreground">Ditjen@kemenpanrb.go.id</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="font-medium text-foreground">WBS Online</p>
              <p className="text-sm text-muted-foreground">wbs.kemenpanrb.go.id</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="font-medium text-foreground">Hotline</p>
              <p className="text-sm text-muted-foreground">0800-1500-333</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default PencegahanKorupsi;
