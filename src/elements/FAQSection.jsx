import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
      'Anda dapat meminta informasi yang termasuk dalam kategori: Informasi Berkala (laporan keuangan, program kerja), Informasi Serta Merta (informasi darurat), dan Informasi Setiap Saat (peraturan, kebijakan). Informasi yang dikecualikan tidak dapat diberikan sesuai UU yang berlaku.',
  },
  {
    question: 'Bagaimana cara melacak status permohonan informasi?',
    answer:
      'Anda dapat melacak status permohonan informasi melalui menu "Lacak Permohonan" di website ini. Masukkan nomor registrasi yang Anda terima saat mengajukan permohonan untuk melihat perkembangan dan status permohonan Anda.',
  },
  {
    question: 'Apakah saya bisa mengajukan permohonan secara anonim?',
    answer:
      'Tidak, pemohon informasi publik wajib mencantumkan identitas diri yang jelas dan valid. Hal ini sesuai dengan ketentuan dalam UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik yang mengatur tentang hak dan kewajiban pemohon informasi.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
          <p className="section-subtitle mt-2 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar layanan PPID
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
