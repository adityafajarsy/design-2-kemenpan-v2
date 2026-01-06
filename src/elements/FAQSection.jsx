import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'Bagaimana cara mengajukan permohonan informasi publik?',
    answer:
      'Anda dapat mengajukan permohonan informasi publik melalui formulir online yang tersedia di website ini, atau datang langsung ke kantor PPID Kementerian PANRB dengan membawa identitas diri yang sah. Isi formulir permohonan dengan lengkap, termasuk alasan permohonan informasi.',
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk memproses permohonan?',
    answer:
      'Sesuai dengan UU Keterbukaan Informasi Publik, permohonan informasi akan diproses dalam waktu paling lambat 10 hari kerja sejak permohonan diterima. Jangka waktu tersebut dapat diperpanjang paling lambat 7 hari kerja dengan pemberitahuan tertulis kepada pemohon.',
  },
  {
    question: 'Dokumen apa saja yang diperlukan untuk mengajukan permohonan?',
    answer:
      'Untuk mengajukan permohonan informasi publik, Anda perlu menyiapkan: (1) Kartu identitas yang masih berlaku (KTP/SIM/Paspor), (2) Formulir permohonan yang telah diisi lengkap, (3) Surat kuasa jika permohonan diajukan oleh kuasa pemohon.',
  },
  {
    question: 'Apakah ada biaya untuk mengakses informasi publik?',
    answer:
      'Akses informasi publik tidak dipungut biaya (gratis). Namun, jika pemohon membutuhkan salinan dokumen, biaya penggandaan akan dibebankan sesuai dengan standar biaya yang berlaku dan kemampuan ekonomi pemohon.',
  },
  {
    question: 'Bagaimana jika permohonan informasi saya ditolak?',
    answer:
      'Jika permohonan informasi ditolak, Anda dapat mengajukan keberatan secara tertulis kepada Atasan PPID dalam waktu 30 hari kerja sejak menerima pemberitahuan penolakan. Jika keberatan tidak dipenuhi, Anda dapat mengajukan sengketa informasi ke Komisi Informasi.',
  },
  {
    question: 'Jenis informasi apa saja yang dapat diminta kepada PPID?',
    answer:
      'Anda dapat meminta informasi yang termasuk dalam kategori: Informasi Berkala, Informasi Serta Merta, dan Informasi Setiap Saat. Informasi yang dikecualikan tidak dapat diberikan sesuai UU yang berlaku.',
  },
  {
    question: 'Bagaimana cara melacak status permohonan informasi?',
    answer:
      'Anda dapat melacak status permohonan informasi melalui menu "Lacak Permohonan" di website ini dengan memasukkan nomor registrasi.',
  },
  {
    question: 'Apakah saya bisa mengajukan permohonan secara anonim?',
    answer:
      'Tidak, pemohon informasi publik wajib mencantumkan identitas diri yang jelas dan valid sesuai UU No. 14 Tahun 2008.',
  },
];

const FAQSection = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-muted/30">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-base font-medium text-primary bg-primary/10 rounded-full mb-5">
            FAQ
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Temukan jawaban atas pertanyaan umum seputar layanan PPID
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Visual / Suasana */}
          <div className="hidden lg:flex lg:col-span-4 justify-center sticky top-32">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative bg-card border border-border rounded-2xl p-10 shadow-sm text-center">
                <HelpCircle className="h-20 w-20 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">
                  Butuh Bantuan?
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Kami rangkum pertanyaan yang paling sering ditanyakan
                  agar Anda mendapatkan informasi dengan cepat dan jelas.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-6">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="
                    bg-card
                    border border-border
                    rounded-xl
                    px-8
                    data-[state=open]:border-primary/50
                    transition-colors
                  "
                >
                  <AccordionTrigger className="
                    text-left
                    font-semibold
                    text-lg md:text-xl
                    text-foreground
                    hover:text-primary
                    py-6
                    hover:no-underline
                  ">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="
                    text-muted-foreground
                    text-base md:text-lg
                    pb-6
                    leading-relaxed
                  ">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
