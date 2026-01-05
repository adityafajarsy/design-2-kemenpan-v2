const ContentPage = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-linear-to-r from-primary to-accent py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
              {title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            {children || (
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Halaman ini berisi informasi mengenai {title}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Informasi rinci mengenai kebijakan, program, dan tata kelola akan ditampilkan di sini.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                </p>
                <div className="bg-secondary p-6 rounded-lg border border-border mt-8">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Informasi Tambahan</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Untuk informasi lebih lanjut atau pertanyaan terkait {title}, silakan hubungi PPID Kementerian PANRB melalui kontak yang tersedia atau ajukan permohonan informasi melalui layanan yang disediakan.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContentPage;
