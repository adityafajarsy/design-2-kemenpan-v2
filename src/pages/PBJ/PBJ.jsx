import {
  Scale,
  CalendarCheck,
  ListChecks,
  PlayCircle,
  LayoutDashboard,
  Ban,
  MailQuestion,
} from "lucide-react";

const menus = [
  {
    title: "Regulasi",
    subtitle: "Peraturan Pengadaan",
    icon: Scale,
    bg: "bg-blue-500",
  },
  {
    title: "Perencanaan",
    subtitle: "Rencana Umum Pengadaan",
    icon: CalendarCheck,
    bg: "bg-red-400",
  },
  {
    title: "Pemilihan",
    subtitle: "Proses Pemilihan Penyedia",
    icon: ListChecks,
    bg: "bg-blue-500",
  },
  {
    title: "Pelaksanaan",
    subtitle: "Pelaksanaan Kontrak",
    icon: PlayCircle,
    bg: "bg-red-400",
  },
  {
    title: "Gambaran Umum",
    subtitle: "Dashboard & Statistik",
    icon: LayoutDashboard,
    bg: "bg-blue-500",
  },
  {
    title: "Daftar Hitam",
    subtitle: "Sanksi Penyedia",
    icon: Ban,
    bg: "bg-black",
  },
  {
    title: "Layanan Informasi PBJ",
    subtitle: "Permintaan Informasi Publik",
    icon: MailQuestion,
    bg: "bg-red-400",
  },
];

export default function PBJ() {
  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      {/* Header */}
      <header className="text-center py-10 px-6 animate-zoom-fade">
        <h1 className="text-4xl font-bold text-slate-900">
          Informasi Pengadaan Barang dan Jasa
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-slate-600 text-lg">
          Portal informasi tata kelola pengadaan barang dan jasa pemerintah
        </p>
      </header>

      {/* Tiles */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {menus.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="animate-zoom-fade"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className={`${item.bg} h-44 rounded-lg flex flex-col items-center justify-center
                              transition-transform duration-300 hover:-translate-y-2`}
                >
                  <Icon className="w-16 h-16 text-white mb-3" strokeWidth={1.5} />
                  <span className="text-white font-semibold tracking-wide text-sm uppercase">
                    {item.title}
                  </span>
                </div>

                <p className="mt-3 text-center text-sm font-medium text-slate-700">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
