import ppidLogo from '/logos/Logo PanRB.png'; 

const AboutPPID = () => {
  return (
    <section className="pt-20 pb-12 md:pt-19 md:pb-12 bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150" />
              <img
                src={ppidLogo}
                alt="Logo PPID Kementerian PANRB"
                className="relative w-56 md:w-72 lg:w-96 h-auto animate-fade-in"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 text-base font-medium text-primary bg-primary/10 rounded-full mb-5">
                Tentang Kami
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Apa itu PPID?
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg md:text-xl leading-relaxed">
                <strong className="text-foreground">
                  PPID (Pejabat Pengelola Informasi dan Dokumentasi)
                </strong>{' '}
                adalah pejabat yang bertanggung jawab di bidang penyimpanan, 
                pendokumentasian, penyediaan, dan/atau pelayanan informasi di badan publik.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                PPID Kementerian PANRB berkomitmen untuk mewujudkan keterbukaan informasi publik 
                sebagai salah satu ciri penting negara demokratis yang menjunjung tinggi 
                kedaulatan rakyat untuk mewujudkan penyelenggaraan negara yang baik.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                Melalui PPID, masyarakat dapat mengakses informasi publik yang dibutuhkan 
                dengan mudah, cepat, dan transparan sesuai dengan ketentuan yang berlaku.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              {['Transparan', 'Akuntabel', 'Profesional'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-base text-muted-foreground">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPPID;
