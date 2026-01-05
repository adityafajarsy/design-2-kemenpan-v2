import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import ppidLogo from '/logos/Logo PanRB.png';

const navItems = [
  
  { label: 'Beranda', href: '/' },
  { label: 'SOP', href: '/sop' },
  { label: 'Regulasi', href: '/regulasi' },
  {
    label: 'Profil',
    dropdown: [
      { label: 'Tugas dan Fungsi', href: '/profil/tugas-dan-fungsi' },
      { label: 'Nilai-nilai KemenPANRB', href: '/profil/nilai-nilai-kemenpanrb' },
      { label: 'Kode Etik', href: '/profil/kode-etik' },
      { label: 'Profil', href: '/profil/profil' },
      { label: 'Visi & Misi', href: '/profil/visi-misi' },
      { label: 'Struktur Organisasi PPID', href: '/profil/struktur-organisasi-ppid' },
      { label: 'Kontak', href: '/profil/kontak' },
    ],
  },
  {
    label: 'Informasi Publik',
    dropdown: [
      { label: 'Informasi Berkala', href: '/informasi-publik/berkala' },
      { label: 'Informasi Serta Merta', href: '/informasi-publik/serta-merta' },
      { label: 'Informasi Setiap Saat', href: '/informasi-publik/setiap-saat' },
    ],
  },
  {
    label: 'Layanan Informasi',
    dropdown: [
      { label: 'Layanan Pengaduan Masyarakat', href: '/layanan-informasi/layanan-pengaduan-masyarakat' },
      { label: 'Laporan Ringkasan Layanan Akses Info Publik', href: '/layanan-informasi/laporan-ringkasan' },
      { label: 'Laporan Tahunan Layanan Info Publik', href: '/layanan-informasi/laporan-tahunan' },
      { label: 'Giat Menteri', href: '/layanan-informasi/giat-menteri' },
    ],
  },
  {
    label: 'Standar Layanan',
    dropdown: [
      { label: 'Prosedur Memperoleh Informasi', href: '/standar-layanan/prosedur-memperoleh-informasi' },
      { label: 'Informasi Umum Layanan', href: '/standar-layanan/informasi-umum-layanan' },
      { label: 'Maklumat Pelayanan', href: '/standar-layanan/maklumat-pelayanan' },
      { label: 'Pencegahan Korupsi dan Pakta Integritas', href: '/standar-layanan/pencegahan-korupsi-pakta-integritas' },
      { label: 'Survey Kepuasan', href: '/standar-layanan/survey-kepuasan' },
      { label: 'Tata Cara', href: '/standar-layanan/tata-cara' },
    ],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
    const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY < 0) return;

    const nav = navContainerRef.current;

    if (currentScrollY < 70) {
      setIsNavVisible(true);
      nav.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      nav.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      nav.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -150,
      opacity: isNavVisible ? 1 : 0,
      ease: "power3.out",
      duration: 0.6,
    });
  }, [isNavVisible]);

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav
      ref={navContainerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm navbar-btn border-b-2 border-primary"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-5">
            <img src={ppidLogo} alt="PPID Logo" className="h-10 md:h-14" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <button
                    className="nav-hover-btn flex items-center text-lg gap-1 px-3 py-2 font-medium transition-colors rounded-md"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className="nav-hover-btn px-3 py-2 text-lg font-medium transition-colors rounded-md"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 min-w-60 bg-card border border-border rounded-lg shadow-lg py-2 transition-all duration-200 ${
                      openDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 text-lg text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[90vh] pb-4' : 'max-h-0'
          }`}
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        openDropdown === item.label ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="pl-4 space-y-1 py-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;