import ContentPage from "@/components/ContentPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  FileText,
  Users,
  Building,
Download,
} from "lucide-react";

const infoLayanan = [
  {
    icon: Clock,
    title: "Jam Operasional",
    items: [
      "Senin - Kamis: 08.00 - 16.00 WIB",
      "Jumat: 08.00 - 16.30 WIB",
      "Istirahat: 12.00 - 13.00 WIB",
      "Sabtu, Minggu & Libur Nasional: Tutup",
    ],
  },
  {
    icon: MapPin,
    title: "Lokasi Pelayanan",
    items: [
      "Gedung Kementerian PANRB",
      "Jl. Jenderal Sudirman No. 69",
      "Jakarta Selatan 12190",
      "Lantai 1 - Lobi Utama",
    ],
  },
  {
    icon: Phone,
    title: "Kontak Layanan",
    items: [
      "Telepon: (021) 7398381 ext. 1234",
      "Fax: (021) 7398382",
      "WhatsApp: 0812-3456-7890",
      "Hotline: 1500-333",
    ],
  },
  {
    icon: Mail,
    title: "Layanan Digital",
    items: [
      "Email: ppid@kemenpanrb.go.id",
      "Website: ppid.kemenpanrb.go.id",
      "Formulir Online: e-ppid.kemenpanrb.go.id",
      "Tracking: status.ppid.kemenpanrb.go.id",
    ],
  },
];

const jenisLayanan = [
  {
    icon: FileText,
    title: "Permohonan Informasi Publik",
    desc: "Layanan untuk mengajukan permohonan informasi publik secara langsung atau online",
  },
  {
    icon: Users,
    title: "Konsultasi Layanan",
    desc: "Layanan konsultasi terkait prosedur dan persyaratan permohonan informasi",
  },
  {
    icon: Building,
    title: "Kunjungan Studi",
    desc: "Layanan penerimaan kunjungan studi banding dari instansi lain",
  },
  {
    icon: Globe,
    title: "Akses Informasi Online",
    desc: "Layanan akses informasi publik melalui website resmi PPID",
  },
];

const InformasiUmum = () => {
  return (
    <ContentPage title="Informasi Umum Layanan">
      {/* Introduction */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-4">
          Standar Pelayanan Kementerian PANRB:
        </h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Keputusan Menteri PANRB No. 222 Tahun 2025 tentang Standar Pelayanan di Kementerian PANRB
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/src/assets/documents/Kepmenpanrb-No-222-Tahun-2025-tentang-Standar-Pelayanan-di-Kementerian-PANRB.pdf"
              download="Kepmenpanrb-No-222-Tahun-2025-tentang-Standar-Pelayanan-di-Kementerian-PANRB.pdf"
            >
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Standar Pelayanan di Kemenpanrb
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Service Information Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12 mt-8">
        {infoLayanan.map((info, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                {info.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {info.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service Types */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Jenis Layanan
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {jenisLayanan.map((layanan, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <layanan.icon className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {layanan.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {layanan.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Fee Information */}
      <Card className="bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-900">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Biaya Layanan
          </h3>
          <p className="text-muted-foreground mb-4">
            Pelayanan informasi publik di Kementerian PANRB{" "}
            <strong>tidak dipungut biaya (GRATIS)</strong>. Biaya hanya
            dikenakan untuk penggandaan dokumen sesuai dengan tarif yang
            berlaku.
          </p>
          <div className="bg-background p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Tarif Penggandaan:</strong>
              <br />
              • Fotokopi: Rp 500/lembar
              <br />
              • CD/DVD: Rp 10.000/keping
              <br />• Flash Disk: Disediakan sendiri oleh pemohon
            </p>
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default InformasiUmum;
