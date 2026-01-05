import { FileText, Download, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContentPage from "@/components/ContentPage";

const SOP = () => {
  const sopDocuments = [
    { title: "SOP Permohonan Informasi Publik", date: "2024" },
    { title: "SOP Pengajuan Keberatan", date: "2024" },
    { title: "SOP Penyelesaian Sengketa Informasi", date: "2024" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-3">
            <Landmark className="w-4 h-4" />
            SOP Informasi Publik
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SOP PPID
          </h1>

          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Standar Operasional Prosedur (SOP) sebagai pedoman pelaksanaan
            pelayanan informasi publik oleh Pejabat Pengelola Informasi dan
            Dokumentasi (PPID) di lingkungan Kementerian PANRB.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Intro */}
          <p className="text-muted-foreground leading-relaxed text-base">
            Halaman ini memuat dokumen Standar Operasional Prosedur (SOP) yang
            mengatur mekanisme pelayanan informasi publik di Kementerian PANRB.
            SOP disusun untuk menjamin pelayanan informasi yang transparan,
            efektif, dan akuntabel sesuai dengan ketentuan peraturan
            perundang-undangan.
          </p>

          {/* SOP List */}
          <div className="grid gap-4 sm:gap-6">
            {sopDocuments.map((doc, index) => (
              <Card
                key={index}
                className="p-5 sm:p-6 hover:shadow-card transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg leading-snug mb-1">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Dokumen Tahun {doc.date}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 self-start sm:self-center"
                  >
                    <Download className="h-4 w-4" />
                    Unduh
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Notes */}
          <div className="bg-secondary/50 p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold mb-3">Catatan Penting</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seluruh dokumen SOP tersedia dalam format PDF dan dapat diunduh
              oleh publik. Untuk informasi lebih lanjut terkait penerapan SOP
              pelayanan informasi publik, silakan menghubungi PPID Kementerian
              PANRB.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SOP;
