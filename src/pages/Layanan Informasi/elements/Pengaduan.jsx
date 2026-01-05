import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle, FileText, AlertCircle, CheckCircle2, Clock, FileCheck } from "lucide-react";

const kanalPengaduan = [
  {
    icon: Phone,
    title: "Telepon",
    value: "(021) 7398381",
    desc: "Senin - Jumat, 08.00 - 16.00 WIB",
    color: "bg-blue-500"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "0812-3456-7890",
    desc: "Respon cepat 24 jam",
    color: "bg-green-500"
  },
  {
    icon: Mail,
    title: "Email",
    value: "pengaduan@kemenpanrb.go.id",
    desc: "Respon 1x24 jam kerja",
    color: "bg-red-500"
  }
];

const alurPengaduan = [
  { step: 1, title: "Sampaikan Pengaduan", desc: "Isi formulir atau hubungi kanal pengaduan" },
  { step: 2, title: "Verifikasi", desc: "Tim kami memverifikasi pengaduan Anda" },
  { step: 3, title: "Tindak Lanjut", desc: "Pengaduan diproses oleh unit terkait" },
  { step: 4, title: "Penyelesaian", desc: "Anda menerima informasi hasil tindak lanjut" }
];

const Pengaduan = () => {
  return (
    <ContentPage title="Layanan Pengaduan Masyarakat">
      {/* Introduction */}
      <div className="mb-10">
        <div className="bg-linear-to-r from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Sampaikan Pengaduan Anda</h2>
              <p className="text-muted-foreground">
                Layanan pengaduan masyarakat Kementerian PANRB siap menerima aspirasi, keluhan, 
                dan laporan Anda terkait pelayanan informasi publik. Setiap pengaduan akan 
                ditindaklanjuti secara profesional dan transparan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Card className="border-primary/30 bg-primary/5 mb-14">
        <CardContent className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-2 ">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                <img src="/src/assets/logo lapor.png" alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Kanal Pengaduan Masyarakat
                </h3>
                <p className="text-xs text-muted-foreground">
                  SP4N - LAPOR! adalah layanan penyampaian semua aspirasi dan pengaduan masyarakat Indonesia 
                </p>
              </div>
            </div>
            <a
              href="https://www.lapor.go.id/" target="_blank"
              className="px-6 py-2.5 bg-red-600 text-primary-foreground rounded-lg hover:bg-red-800/90 transition-colors font-medium flex items-center gap-2"
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
              Website LAPOR
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Contact Channels */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Bisa juga Melalui Kanal berikut:</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {kanalPengaduan.map((kanal, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${kanal.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <kanal.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-1">{kanal.title}</h3>
                <p className="text-primary font-semibold mb-2">{kanal.value}</p>
                <p className="text-sm text-muted-foreground">{kanal.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <Card className="mb-12 bg-secondary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Alur Pengaduan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            {alurPengaduan.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < alurPengaduan.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-0 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Complaint Form */}
      {/* <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Formulir Pengaduan Online
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nama">Nama Lengkap *</Label>
                <Input id="nama" placeholder="Masukkan nama lengkap Anda" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nik">NIK</Label>
                <Input id="nik" placeholder="16 digit NIK" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="email@contoh.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telepon">Nomor Telepon *</Label>
                <Input id="telepon" placeholder="08xxxxxxxxxx" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="kategori">Kategori Pengaduan *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori pengaduan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="layanan">Pelayanan Informasi Publik</SelectItem>
                  <SelectItem value="keberatan">Keberatan atas Penolakan Informasi</SelectItem>
                  <SelectItem value="sengketa">Sengketa Informasi</SelectItem>
                  <SelectItem value="lainnya">Lainnya</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="judul">Judul Pengaduan *</Label>
              <Input id="judul" placeholder="Tuliskan judul pengaduan Anda" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="isi">Isi Pengaduan *</Label>
              <Textarea 
                id="isi" 
                placeholder="Jelaskan secara detail pengaduan Anda..." 
                rows={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lampiran">Lampiran (opsional)</Label>
              <Input id="lampiran" type="file" className="cursor-pointer" />
              <p className="text-xs text-muted-foreground">Format: PDF, JPG, PNG. Maksimal 5MB</p>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Dengan mengirimkan formulir ini, Anda menyetujui bahwa data yang diberikan 
                adalah benar dan bersedia untuk dihubungi terkait tindak lanjut pengaduan.
              </p>
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">
              Kirim Pengaduan
            </Button>
          </form>
        </CardContent>
      </Card> */}
    </ContentPage>
  );
};

export default Pengaduan;
