import { FileEdit, AlertCircle, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const services = [
  {
    icon: <FileEdit className="h-8 w-8" />,
    title: 'Form Permohonan Informasi',
    description:
      'Ajukan permohonan informasi publik secara online melalui formulir yang telah disediakan.',
    href: '#',
    buttonText: 'Ajukan Permohonan',
  },
  {
    icon: <AlertCircle className="h-8 w-8" />,
    title: 'Form Keberatan',
    description:
      'Sampaikan keberatan atas tanggapan permohonan informasi yang tidak sesuai harapan.',
    href: '#',
    buttonText: 'Ajukan Keberatan',
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: 'Lacak Permohonan',
    description:
      'Pantau status dan perkembangan permohonan informasi yang telah Anda ajukan.',
    href: '#',
    buttonText: 'Lacak Sekarang',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Layanan
          </span>
          <h2 className="section-title">Layanan PPID</h2>
          <p className="section-subtitle mt-2 max-w-2xl mx-auto">
            Berbagai layanan untuk memudahkan akses informasi publik
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 card-hover text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <Button asChild className="w-full group/btn">
                <Link to={service.href}>
                  {service.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
