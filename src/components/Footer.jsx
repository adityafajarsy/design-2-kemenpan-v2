import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import ppidLogo from '/logos/Logo PanRB.png';

const quickLinks = [
  { label: 'Profil PPID', href: '/profil/profil' },
  { label: 'Tugas dan Fungsi', href: '/profil/tugas-dan-fungsi' },
  { label: 'Visi & Misi', href: '/profil/visi-misi' },
  { label: 'Struktur Organisasi', href: 'profil/struktur-organisasi-ppid' },
];

const serviceLinks = [
  { label: 'Permohonan Informasi', href: '/sippid' },
  { label: 'Form Keberatan', href: '/sippid' },
  { label: 'Lacak Permohonan', href: '/sippid' },
  { label: 'FAQ', href: '/faq' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={ppidLogo} alt="PPID Logo" className="h-12 w-auto" />
              <div>
                <p className="font-bold text-lg">PPID</p>
                <p className="text-sm text-primary-foreground/70">Kementerian PANRB</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Pejabat Pengelola Informasi dan Dokumentasi Kementerian Pendayagunaan Aparatur Negara 
              dan Reformasi Birokrasi Republik Indonesia.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Profil</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Layanan</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Jl. Jenderal Sudirman Kav. 69, Jakarta Selatan 12190, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a 
                  href="tel:+622173842501" 
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  (021) 7384 2501
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a 
                  href="mailto:ppid@menpan.go.id" 
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  ppid@menpan.go.id
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Kementerian PANRB. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-primary transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
