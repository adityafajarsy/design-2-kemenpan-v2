import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Building, FileText, Send, Clock, CheckCircle, Download, ExternalLink } from "lucide-react";

const langkahOnline = [
  { step: 1, title: "Akses Website", desc: "Buka website e-ppid.kemenpanrb.go.id" },
  { step: 2, title: "Registrasi/Login", desc: "Daftar akun baru atau masuk dengan akun yang sudah ada" },
  { step: 3, title: "Isi Formulir", desc: "Lengkapi formulir permohonan dengan data yang valid" },
  { step: 4, title: "Unggah Dokumen", desc: "Upload dokumen pendukung (KTP, surat kuasa jika ada)" },
  { step: 5, title: "Kirim Permohonan", desc: "Submit permohonan dan catat nomor registrasi" },
  { step: 6, title: "Pantau Status", desc: "Cek status permohonan melalui tracking online" }
];

const langkahOffline = [
  { step: 1, title: "Datang ke Kantor", desc: "Kunjungi PPID Kementerian PANRB pada jam kerja" },
  { step: 2, title: "Ambil Nomor Antrian", desc: "Ambil nomor antrian di lobi pelayanan" },
  { step: 3, title: "Isi Formulir", desc: "Isi formulir permohonan yang disediakan" },
  { step: 4, title: "Serahkan Dokumen", desc: "Serahkan formulir dan fotokopi identitas" },
  { step: 5, title: "Terima Tanda Bukti", desc: "Simpan tanda terima permohonan" },
  { step: 6, title: "Tunggu Pemberitahuan", desc: "Anda akan dihubungi saat informasi siap" }
];

const keberatan = [
  { step: 1, title: "Ajukan Keberatan", desc: "Sampaikan keberatan dalam 30 hari kerja sejak penolakan" },
  { step: 2, title: "Isi Formulir Keberatan", desc: "Lengkapi formulir keberatan dengan alasan yang jelas" },
  { step: 3, title: "Proses Atasan PPID", desc: "Atasan PPID memproses keberatan dalam 30 hari kerja" },
  { step: 4, title: "Keputusan", desc: "Terima keputusan atasan PPID atas keberatan Anda" }
];

const TataCara = () => {
  return (
    <ContentPage title="Tata Cara Permohonan">
      {/* Introduction */}
      <div className="mb-10">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Permohonan informasi publik dapat dilakukan secara online maupun offline. 
          Pilih metode yang paling sesuai dengan kebutuhan Anda dan ikuti langkah-langkah 
          yang telah ditetapkan.
        </p>
      </div>

      {/* Tabs for Online/Offline */}
      <Tabs defaultValue="online" className="mb-10">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="online" className="gap-2">
            <Monitor className="h-4 w-4" />
            Permohonan Online
          </TabsTrigger>
          <TabsTrigger value="offline" className="gap-2">
            <Building className="h-4 w-4" />
            Permohonan Langsung
          </TabsTrigger>
        </TabsList>

        <TabsContent value="online">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary" />
                Langkah Permohonan Online
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {langkahOnline.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Akses e-PPID
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Panduan Online
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="offline">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Langkah Permohonan Langsung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {langkahOffline.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Formulir
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Objection Procedure */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Tata Cara Pengajuan Keberatan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Jika permohonan informasi Anda ditolak atau tidak puas dengan jawaban yang diberikan, 
            Anda dapat mengajukan keberatan kepada Atasan PPID.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {keberatan.map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline Info */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Jangka Waktu Layanan
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">10 Hari</p>
              <p className="text-sm text-muted-foreground">Standar penyelesaian permohonan</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">30 Hari</p>
              <p className="text-sm text-muted-foreground">Batas waktu pengajuan keberatan</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <p className="text-2xl font-bold text-primary mb-1">14 Hari</p>
              <p className="text-sm text-muted-foreground">Pengajuan sengketa ke Komisi Informasi</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default TataCara;
