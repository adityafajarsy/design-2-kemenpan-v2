import { Calendar, Clock, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const infoCards = [
  {
    icon: <Calendar className="h-10 w-10" />,
    title: 'Informasi Berkala',
    description:
      'Informasi yang wajib disediakan dan diumumkan secara berkala meliputi informasi yang berkaitan dengan profil, kinerja, dan laporan keuangan.',
    href: '/informasi-publik/berkala',
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: 'Informasi Serta Merta',
    description:
      'Informasi yang wajib diumumkan secara serta merta mencakup informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum.',
    href: '/informasi-publik/serta-merta',
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: 'Informasi Setiap Saat',
    description:
      'Informasi yang wajib tersedia setiap saat meliputi seluruh informasi yang berada di bawah penguasaan badan publik.',
    href: '/informasi-publik/setiap-saat',
  },
];

const PublicInfoSection = () => {
  return (
    <section className="pt-20 pb-14 md:pt-22 md:pb-20 bg-surface">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-base font-medium text-primary bg-primary/10 rounded-full mb-5">
            Informasi Publik
          </span>

          <h2 className="text-3xl md:text-3xl 2xl:text-5xl font-bold tracking-tight">
            Daftar Informasi Publik
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-lg 2xl:text-xl text-muted-foreground">
            Akses berbagai kategori informasi publik yang tersedia untuk masyarakat
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {infoCards.map((card, index) => (
            <Link
              key={card.title}
              to={card.href}
              className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 card-hover accent-border-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {card.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg 2xl:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-base md:text-sm 2xl:text-lg leading-relaxed grow mb-6">
                  {card.description}
                </p>
                
                {/* CTA */}
                <div className="flex items-center gap-3 text-primary font-medium text-sm 2xl:text-md">
                  <span>Lihat Detail</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PublicInfoSection;
