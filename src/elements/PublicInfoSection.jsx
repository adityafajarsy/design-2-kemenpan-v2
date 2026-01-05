import { Calendar, Clock, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const infoCards = [
  {
    icon: <Calendar className="h-8 w-8" />,
    title: 'Informasi Berkala',
    description:
      'Informasi yang wajib disediakan dan diumumkan secara berkala meliputi informasi yang berkaitan dengan profil, kinerja, dan laporan keuangan.',
    href: '#informasi-berkala',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Informasi Serta Merta',
    description:
      'Informasi yang wajib diumumkan secara serta merta mencakup informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum.',
    href: '#informasi-serta-merta',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Informasi Setiap Saat',
    description:
      'Informasi yang wajib tersedia setiap saat meliputi seluruh informasi yang berada di bawah penguasaan badan publik.',
    href: '#informasi-setiap-saat',
  },
];

const PublicInfoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Informasi Publik
          </span>
          <h2 className="section-title">Daftar Informasi Publik</h2>
          <p className="section-subtitle mt-2 max-w-2xl mx-auto">
            Akses berbagai kategori informasi publik yang tersedia untuk masyarakat
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {infoCards.map((card, index) => (
            <Link
              key={card.title}
              to={card.href}
              className="group bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 card-hover accent-border-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed grow mb-4">
                  {card.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
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
