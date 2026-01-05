import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import news1 from '/images/news-1.jpg';
import news2 from '/images/news-2.jpg';
import news3 from '/images/news-3.jpg';


const newsArticles = [
  {
    id: 1,
    image: news1,
    date: '20 Desember 2024',
    title: 'KemenPANRB Tingkatkan Transparansi Layanan Publik',
    excerpt:
      'Kementerian PANRB terus berupaya meningkatkan transparansi dalam penyelenggaraan layanan publik melalui berbagai inovasi digital.',
    href: '#',
  },
  {
    id: 2,
    image: news2,
    date: '18 Desember 2024',
    title: 'Workshop Transformasi Digital Pelayanan Informasi',
    excerpt:
      'PPID KemenPANRB menggelar workshop transformasi digital untuk meningkatkan kualitas pelayanan informasi kepada masyarakat.',
    href: '#',
  },
  {
    id: 3,
    image: news3,
    date: '15 Desember 2024',
    title: 'Penghargaan Keterbukaan Informasi Publik 2024',
    excerpt:
      'KemenPANRB meraih penghargaan dalam kategori Badan Publik dengan Keterbukaan Informasi Terbaik tahun 2024.',
    href: '#',
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              Berita
            </span>
            <h2 className="section-title">Berita Terbaru</h2>
            <p className="section-subtitle mt-2">
              Informasi dan kegiatan terkini dari PPID Kementerian PANRB
            </p>
          </div>
          <Button variant="outline" asChild className="w-fit">
            <Link to="/semua-berita" className="group">
              Semua Berita
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsArticles.map((article, index) => (
            <Link
              key={article.id}
              to="/detail-berita"
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                
                <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                  Baca Selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
