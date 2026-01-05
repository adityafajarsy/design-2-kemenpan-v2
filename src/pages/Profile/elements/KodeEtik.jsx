import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, AlertTriangle, Award, FileCheck } from "lucide-react";

const kodeEtikList = [
  {
    nomor: 1,
    judul: "Integritas",
    deskripsi:
      "Menjunjung tinggi kejujuran, kebenaran, dan keadilan dalam menjalankan tugas",
  },
  {
    nomor: 2,
    judul: "Profesionalisme",
    deskripsi:
      "Melaksanakan tugas sesuai dengan keahlian, pengetahuan, dan keterampilan yang dimiliki",
  },
  {
    nomor: 3,
    judul: "Netralitas",
    deskripsi:
      "Tidak berpihak dan bebas dari pengaruh kepentingan pribadi, golongan, atau politik",
  },
  {
    nomor: 4,
    judul: "Tanggung Jawab",
    deskripsi:
      "Bertanggung jawab atas segala tindakan dan keputusan dalam pelaksanaan tugas",
  },
  {
    nomor: 5,
    judul: "Kerahasiaan",
    deskripsi:
      "Menjaga kerahasiaan informasi yang dikecualikan sesuai peraturan perundang-undangan",
  },
  {
    nomor: 6,
    judul: "Transparansi",
    deskripsi:
      "Memberikan informasi yang benar, lengkap, dan tidak menyesatkan kepada pemohon",
  },
];

const larangan = [
  "Menerima gratifikasi dalam bentuk apapun terkait pelayanan informasi publik",
  "Menyalahgunakan wewenang untuk kepentingan pribadi atau golongan",
  "Memberikan informasi yang menyesatkan atau tidak benar",
  "Menunda-nunda pelayanan tanpa alasan yang sah",
  "Membeda-bedakan pemohon informasi publik",
  "Membocorkan informasi yang dikecualikan",
];

const KodeEtik = () => {
  return (
    <ContentPage title="Kode Etik PPID">
      {/* Introduction */}
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Kode Etik PPID merupakan pedoman perilaku yang wajib ditaati oleh
          seluruh pengelola informasi dan dokumentasi di lingkungan Kementerian
          PANRB dalam memberikan pelayanan informasi publik kepada masyarakat.
        </p>
      </div>

      {/* Ethics Code */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Scale className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">
            Nilai-Nilai Etika
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kodeEtikList.map((item) => (
            <Card
              key={item.nomor}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    {item.nomor}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.judul}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Prohibitions */}
      <Card className="mb-8 border-destructive/30 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-destructive">
            <AlertTriangle className="h-6 w-6" />
            Larangan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {larangan.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-destructive/20 text-destructive text-sm flex items-center justify-center shrink-0">
                  ✕
                </span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sanctions & Legal Basis */}
      {/* Sanctions & Legal Basis */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              Sanksi Pelanggaran
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>Pelanggaran terhadap kode etik dapat dikenakan sanksi berupa:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Teguran lisan</li>
              <li>Teguran tertulis</li>
              <li>Pemberhentian dari tugas sebagai pengelola PPID</li>
              <li>Sanksi sesuai peraturan kepegawaian yang berlaku</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileCheck className="h-5 w-5 text-primary" />
              Dasar Hukum
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>Kode etik ini disusun berdasarkan:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>UU No. 14 Tahun 2008 tentang KIP</li>
              <li>PP No. 61 Tahun 2010</li>
              <li>Peraturan KI No. 1 Tahun 2010</li>
              <li>Peraturan Menteri PANRB</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Download PDF */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Unduh Dokumen Kode Etik
                </h3>
                <p className="text-sm text-muted-foreground">
                  Download versi lengkap Kode Etik PPID dalam format PDF
                </p>
              </div>
            </div>
            <a
              href="/src/assets/documents/Kode Etik Permenpan.pdf"
              download="Kode Etik Permenpan.pdf"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Unduh PDF
            </a>
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default KodeEtik;
