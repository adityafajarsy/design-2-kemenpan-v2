import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  LucideHome,
  HomeIcon,
  Home,
  HouseWifi,
} from "lucide-react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import ppidLogo from "/logos/Logo PanRB.png";

const navItems = [
  {
    label: "Profil",
    dropdown: [
      { label: "Tugas dan Fungsi", href: "/profil/tugas-dan-fungsi" },
      {
        label: "Nilai-nilai KemenPANRB",
        href: "/profil/nilai-nilai-kemenpanrb",
      },
      { label: "Kode Etik", href: "/profil/kode-etik" },
      { label: "Profil", href: "/profil/profil" },
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      {
        label: "Struktur Organisasi PPID",
        href: "/profil/struktur-organisasi-ppid",
      },
      { label: "Kontak", href: "/profil/kontak" },
    ],
  },
  {
    label: "Informasi Publik",
    dropdown: [
      { label: "Informasi Berkala", href: "/informasi-publik/berkala" },
      { label: "Informasi Serta Merta", href: "/informasi-publik/serta-merta" },
      { label: "Informasi Setiap Saat", href: "/informasi-publik/setiap-saat" },
      { label: "Regulasi", href: "/regulasi" },
      { label: "SOP", href: "/sop" },
    ],
  },
  {
    label: "Layanan Informasi",
    dropdown: [
      {
        label: "Layanan Pengaduan Masyarakat",
        href: "/layanan-informasi/layanan-pengaduan-masyarakat",
      },
      {
        label: "Laporan Ringkasan Layanan Akses Info Publik",
        href: "/layanan-informasi/laporan-ringkasan",
      },
      {
        label: "Laporan Tahunan Layanan Info Publik",
        href: "/layanan-informasi/laporan-tahunan",
      },
      { label: "Giat Menteri", href: "/layanan-informasi/giat-menteri" },
    ],
  },
  {
    label: "Standar Layanan",
    dropdown: [
      {
        label: "Prosedur Memperoleh Informasi",
        href: "/standar-layanan/prosedur-memperoleh-informasi",
      },
      {
        label: "Informasi Umum Layanan",
        href: "/standar-layanan/informasi-umum-layanan",
      },
      {
        label: "Maklumat Pelayanan",
        href: "/standar-layanan/maklumat-pelayanan",
      },
      {
        label: "Pencegahan Korupsi dan Pakta Integritas",
        href: "/standar-layanan/pencegahan-korupsi-pakta-integritas",
      },
      { label: "Survey Kepuasan", href: "/standar-layanan/survey-kepuasan" },
      { label: "Tata Cara", href: "/standar-layanan/tata-cara" },
    ],
  },
  {
    label: "PBJ",
    dropdown: [
      {
        label: "Dokumen Pengadaan Barang dan Jasa",
        href: "/pbj/dokumen-barang-dan-jasa",
      },
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
        <div className="flex items-center justify-between h-16 md:h-20 2xl:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={ppidLogo} alt="PPID Logo" className="h-10 md:h-14 2xl:h-14" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to={'/'}>
              <button className="relative text-foreground hover:bg-gray-100 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 hover:text-primary cursor-pointer flex items-center lg:text-[15px] 2xl:text-xl gap-1 px-3 py-2 font-medium transition-colors rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(46,147,211,1)"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM8 15V17H16V15H8Z"></path></svg>
              </button>
            </Link>
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <button
                    className="nav-hover-btn flex items-center lg:text-[15px] 2xl:text-xl gap-1 px-3 py-2 font-medium transition-colors rounded-md"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.href || "#"}
                    className="nav-hover-btn px-3 py-2 text-md 2xl:text-xl lg:text-[16px]font-medium transition-colors rounded-md"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full -left-18 min-w-60
                      bg-card border border-border rounded-lg shadow-lg py-2
                            transition-all duration-200
                            ${
                              openDropdown === item.label
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible -translate-y-2"
                            }`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
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
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[90vh] pb-4" : "max-h-0"
          }`}
        >
          <div className="space-y-1 text-md">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2 text-md font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        openDropdown === item.label ? "max-h-96" : "max-h-0"
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
                    to={item.href || "#"}
                    className="block px-3 py-2 text-md font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
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
