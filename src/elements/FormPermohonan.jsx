import { Link } from "react-router-dom";
import { FileText, AlertCircle, Search, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const PermohonanSection = () => {
  const permohonanItems = [
    {
      title: "Form Permohonan Informasi",
      description: "Ajukan permohonan informasi publik kepada PPID Kementerian PANRB sesuai dengan ketentuan yang berlaku.",
      icon: FileText,
      href: "/sippid",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
    },
    {
      title: "Form Pengajuan Keberatan",
      description: "Ajukan keberatan atas tanggapan permohonan informasi yang tidak sesuai atau tidak memuaskan.",
      icon: AlertCircle,
      href: "/sippid",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
    },
    {
      title: "Lacak",
      description: "Lacak status permohonan informasi atau pengajuan keberatan yang telah Anda ajukan.",
      icon: Search,
      href: "/sippid",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-8 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Layanan Permohonan
          </h2>
          <p className="text-base text-gray-600">
            Akses layanan permohonan informasi dan pengajuan keberatan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {permohonanItems.map((item, index) => (
            <Link key={index} to={item.href}>
              <Card className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300 group h-full">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                    Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PermohonanSection;