import ppidLogo from '/logos/Logo PanRB.png';

const AboutPPID = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150" />
              <img
                src={ppidLogo}
                alt="Logo PPID Kementerian PANRB"
                className="relative w-48 md:w-64 lg:w-80 h-auto animate-fade-in"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
                Tentang Kami
              </span>
              <h2 className="section-title">Apa itu PPID?</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base md:text-lg leading-relaxed">
                <strong className="text-foreground">PPID (Pejabat Pengelola Informasi dan Dokumentasi)</strong> adalah 
                pejabat yang bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan, dan/atau pelayanan 
                informasi di badan publik.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                PPID Kementerian PANRB berkomitmen untuk mewujudkan keterbukaan informasi publik sebagai salah satu 
                ciri penting negara demokratis yang menjunjung tinggi kedaulatan rakyat untuk mewujudkan 
                penyelenggaraan negara yang baik.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Melalui PPID, masyarakat dapat mengakses informasi publik yang dibutuhkan dengan mudah, cepat, 
                dan transparan sesuai dengan ketentuan yang berlaku.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Transparan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Akuntabel</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Profesional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPPID;
