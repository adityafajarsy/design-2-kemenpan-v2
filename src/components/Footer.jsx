import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from 'lucide-react';
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
  // desktop >= md
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Logo & Description */}
          <div>
            <div className="flex flex-row items-start gap-3 mb-3">
              <img src={ppidLogo} alt="PPID Logo" className="h-14 w-auto" />
            </div>

            <p className="text-primary-foreground/70 text-base leading-relaxed mb-4">
              Pejabat Pengelola Informasi dan Dokumentasi Kementerian Pendayagunaan
              Aparatur Negara dan Reformasi Birokrasi Republik Indonesia.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2.5 rounded-full
                    bg-primary-foreground/10
                    hover:bg-primary hover:text-primary-foreground
                    transition-colors
                  "
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profil (DESKTOP ONLY) */}
          {isDesktop && (
            <div>
              <h3 className="font-semibold text-xl mb-3">Profil</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/75 hover:text-primary transition-colors text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Layanan (DESKTOP ONLY) */}
          {isDesktop && (
            <div>
              <h3 className="font-semibold text-xl mb-3">Layanan</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/75 hover:text-primary transition-colors text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Kontak */}
          <div>
            <h3 className="font-semibold text-xl mb-3">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/75 text-base leading-relaxed">
                  Jl. Jenderal Sudirman Kav. 69, Jakarta Selatan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+622173842501"
                  className="text-primary-foreground/75 hover:text-primary transition-colors text-base"
                >
                  (021) 7384 2501
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:ppid@menpan.go.id"
                  className="text-primary-foreground/75 hover:text-primary transition-colors text-base"
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
        <div className="section-container py-4">
          <div className="flex flex-col sm:items-center gap-3 text-base text-primary-foreground/60">
            <p>© 2026 Kementerian PANRB. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
