import { FileEdit, AlertCircle, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FileEdit className="h-10 w-10" />,
    title: 'Form Permohonan ',
    description:
      'Ajukan permohonan informasi publik secara online melalui formulir yang telah disediakan.',
    href: '/sippid',
    buttonText: 'Ajukan Permohonan',
  },
  {
    icon: <AlertCircle className="h-10 w-10" />,
    title: 'Form Keberatan',
    description:
      'Sampaikan keberatan atas tanggapan permohonan informasi yang tidak sesuai harapan.',
    href: '/sippid',
    buttonText: 'Ajukan Keberatan',
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: 'Lacak Permohonan',
    description:
      'Pantau status dan perkembangan permohonan informasi yang telah Anda ajukan.',
    href: '/sippid',
    buttonText: 'Lacak Sekarang',
  },
];

const ServicesSection = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-linear-to-b from-primary/5 via-background to-background">
      
      {/* Decorative background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-base font-medium text-primary bg-primary/10 rounded-full mb-5">
            Layanan
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Layanan PPID
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Berbagai layanan untuk memudahkan akses informasi publik
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 md:p-10 border border-border hover:border-primary/50 shadow-sm hover:shadow-lg transition-all text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent top */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              
              <Button asChild size="lg" className="w-full group/btn">
                <Link to={service.href}>
                  {service.buttonText}
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
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
