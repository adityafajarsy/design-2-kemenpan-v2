import ContentPage from "@/components/ContentPage";
import { Card, CardContent } from "@/components/ui/card";

const Profil = () => {
  return (
    <ContentPage title="Profil PPID Kementerian PANRB">
      <div className="mb-12">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Di era globalisasi, informasi merupakan kebutuhan pokok bagi setiap
          orang dalam rangka pengembangan pribadi dan lingkungan sosialnya serta
          merupakan bagian penting bagi ketahanan nasional. Hak memperoleh
          informasi merupakan hak asasi manusia dan keterbukaan informasi publik
          merupakan salah satu ciri penting negara demokratis yang menjunjung
          tinggi kedaulatan rakyat untuk mewujudkan penyelenggaraan Negara yang
          Baik.
        </p>
      </div>
      <Card className="bg-linear-to-br from-primary/10 to-primary/5">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Tentang Kami
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Pemberlakuan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan
              Informasi Publik (KIP) pada tanggal 30 April 2010 merupakan
              momentum penting dalam mendorong keterbukaan di Indonesia,
              khususnya di Kementerian Pendayagunaan Aparatur Negara dan
              Reformasi Birokrasi. Undang-Undang ini telah memberikan landasan
              hukum terhadap hak setiap orang untuk memperoleh informasi publik
              di mana setiap Badan Publik mempunyai kewajiban dalam menyediakan
              dan melayani permohonan informasi publik secara cepat, tepat
              waktu, biaya ringan dan dengan cara yang sederhana. Sesuai
              ketentuan dalam pasal 14 ayat (1.c) PP Nomor 61 Tahun 2010 tentang
              pelaksanaan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan
              Informasi Publik, dimana disebutkankan bahwa salah satu tugas PPID
              adalah pelayanan Informasi Publik yang cepat, tepat, dan
              sederhana.
            </p>
            <p>
              Terkait dengan tugas tersebut, Kementerian Pendayagunaan Aparatur
              Negara dan Reformasi Birokrasi telah menetapkan Pengelolaan
              Informasi dan Dokumentasi di lingkungan Kementerian Pendayagunaan
              Aparatur Negara dan Reformasi Birokrasi melalui Pedoman Menteri
              PANRB Nomor 2 Tahun 2024 tentang Pengelolaan Pelayanan Informasi
              dan Dokumentasi di Lingkungan Kementerian PANRB dan Keputusan
              Menteri PANRB Nomor 220 Tahun 2012 tentang Susunan Pengelola
              Layanan Informasi dan Dokumentasi di Lingkungan Kementerian PANRB.
              Dengan adanya pedoman ini, diharapkan implementasi Undang-Undang
              Keterbukaan Informasi Publik dapat berjalan efektif dan hak-hak
              publik terhadap informasi yang berkualitas secara nyata dapat
              terpenuhi.
            </p>
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default Profil;
