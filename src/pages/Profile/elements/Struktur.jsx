import ContentPage from "@/components/ContentPage";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, User } from "lucide-react";

const strukturData = {
  pengarah: {
    nama: "Menteri PANRB",
    jabatan: "Pengarah",
    inisial: "MP",
  },
  atasanPPID: {
    nama: "Sekretaris Kementerian PANRB",
    jabatan: "Atasan PPID",
    inisial: "SK",
  },
  ppid: {
    nama: "Kepala Biro Hukum, Komunikasi, dan Informasi Publik",
    jabatan: "PPID",
    inisial: "PD",
  },
  timPengelola: [
    {
      nama: "Tim Pengelola Pelayanan Informasi",
      inisial: "PI",
      deskripsi: "Mengelola permintaan dan pelayanan informasi publik",
    },
    {
      nama: "Tim Pengelola Data dan Dokumentasi",
      inisial: "DD",
      deskripsi: "Mengelola data dan dokumentasi informasi",
    },
    {
      nama: "Tim Keberatan dan Sengketa Informasi",
      inisial: "PS",
      deskripsi: "Menangani pengaduan keberatan dan sengketa informasi",
    },
  ],
};

const Struktur = () => {
  return (
    <ContentPage title="Struktur Organisasi PPID">
      {/* Introduction */}
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed mb-2">
          Susunan Organisasi Pengelola Informasi dan Dokumentasi Kementerian
          Pendayagunaan Aparatur Negara dan Reformasi Birokrasi
        </p>
        <p className="text-sm text-muted-foreground">
          KepmenPANRB No.220 Tahun 2012 Tentang Susunan Pengelola Layanan
          Informasi dan Dokumentasi
        </p>
      </div>

      {/* Organization Chart */}
      <div className="space-y-1">
        {/* Pengarah */}
        <div className="flex flex-col items-center">
          <Card className="w-full max-w-sm bg-primary text-white shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center border-4 border-white/30">
                <User className="h-10 w-10" />
              </div>
              <h3 className="font-bold text-xl mb-1">
                {strukturData.pengarah.jabatan}
              </h3>
              <p className="text-sm opacity-90">{strukturData.pengarah.nama}</p>
            </CardContent>
          </Card>
          <div className="w-1 h-12 bg-linear-to-b from-primary to-accent"></div>
          <div className="w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-200 border-t-accent"></div>
        </div>

        {/* Atasan PPID */}
        <div className="flex flex-col items-center pt-2">
          <Card className="w-full max-w-sm bg-accent text-white shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center border-4 border-white/30">
                <User className="h-10 w-10" />
              </div>
              <h3 className="font-bold text-xl mb-1">
                {strukturData.atasanPPID.jabatan}
              </h3>
              <p className="text-sm opacity-90">
                {strukturData.atasanPPID.nama}
              </p>
            </CardContent>
          </Card>
          <div className="w-1 h-12 bg-linear-to-b from-accent to-accent"></div>
          <div className="w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-20 border-t-accent"></div>
        </div>

        {/* PPID */}
        <div className="flex flex-col items-center pt-2">
          <Card className="w-full max-w-sm bg-accent text-white shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center border-4 border-white/30">
                <User className="h-10 w-10" />
              </div>
              <h3 className="font-bold text-xl mb-1">
                {strukturData.ppid.jabatan}
              </h3>
              <p className="text-sm opacity-90">{strukturData.ppid.nama}</p>
            </CardContent>
          </Card>
          <div className="w-1 h-12 bg-linear-to-b from-accent to-teal-700"></div>
          <div className="w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-20 border-t-teal-700"></div>
        </div>

        {/* Connector Line */}
        <div className="flex justify-center pt-2">
          <div className="w-full max-w-4xl">
            <div className="h-1 bg-teal-700 relative">
              <div className="absolute left-0 top-0 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-12 border-r-teal-700 -translate-x-full"></div>
              <div className="absolute right-0 top-0 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-teal-700 translate-x-full"></div>
            </div>
            <div className="flex justify-between">
              <div className="w-1 h-8 bg-teal-700"></div>
              <div className="w-1 h-8 bg-teal-700"></div>
              <div className="w-1 h-8 bg-teal-700"></div>
            </div>
            <div className="flex justify-between">
              <div className="w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-15 border-t-teal-700"></div>
              <div className="w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-15 border-t-teal-700"></div>
              <div className="w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-15 border-t-teal-700"></div>
            </div>
          </div>
        </div>

        {/* Tim Pengelola */}
        <div className="flex flex-col items-center pt-4">
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
            {strukturData.timPengelola.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-100 border-2 border-teal-600 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center border-4 border-primary">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm leading-tight">
                    {item.nama}
                  </h4>
                  <p className="text-xs text-gray-600">{item.deskripsi}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Information Card */}
      <Card className="mt-12 bg-linear-to-r from-blue-50 to-teal-50 border-2 border-blue-200">
        <CardContent className="p-6">
          <h4 className="font-bold text-foreground mb-4 text-lg">
            Keterangan Struktur
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <div>
                  <p className="font-semibold text-gray-800">Pengarah</p>
                  <p className="text-gray-600">
                    Memberikan arahan kebijakan PPID
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5"></div>
                <div>
                  <p className="font-semibold text-gray-800">Atasan PPID</p>
                  <p className="text-gray-600">
                    Bertanggung jawab atas kebijakan dan pengawasan
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5"></div>
                <div>
                  <p className="font-semibold text-gray-800">PPID</p>
                  <p className="text-gray-600">
                    Mengkoordinasikan pelayanan informasi publik
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-600 mt-1.5"></div>
                <div>
                  <p className="font-semibold text-gray-800">Tim Pengelola</p>
                  <p className="text-gray-600">
                    Melaksanakan tugas operasional pelayanan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default Struktur;
