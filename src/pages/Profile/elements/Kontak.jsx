import ContentPage from "@/components/ContentPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const kontakInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Jenderal Sudirman No. 69, Jakarta Selatan 12190",
    detail: "Gedung Kementerian PANRB",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "(021) 7398381",
    detail: "Ext. 1234 (PPID)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ppid@kemenpanrb.go.id",
    detail: "Respon dalam 1x24 jam kerja",
  },
  {
    icon: Clock,
    label: "Jam Layanan",
    value: "Senin - Jumat: 08.00 - 16.00 WIB, \n\n\n\n\n Istirahat Senin - jumat : 12:00 - 13:00 WIB",
    detail: "Kecuali hari libur nasional",
  },
];

const Kontak = () => {
  return (
    <ContentPage title="Kontak PPID">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Informasi Kontak
            </h2>
            <p className="text-muted-foreground mb-6">
              Hubungi kami untuk informasi lebih lanjut mengenai layanan
              informasi publik Kementerian PANRB.
            </p>
          </div>

          <div className="space-y-4">
            {kontakInfo.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-semibold text-foreground">
                        {item.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Kirim Email
            </Button>
          </div>
        </div>

      </div>

      {/* Map Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Lokasi Kantor
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-video w-full bg-muted rounded-b-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1333328581975!2d106.79990850899773!3d-6.228531256650064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d0c325f3a3%3A0x426a2dc97d436ff0!2sMinistry%20of%20Administrative%20and%20Bureaucratic%20Reform%20of%20the%20Republic%20of%20Indonesia!5e0!3m2!1sen!2sid!4v1765770798278!5m2!1sen!2sid"
              width="1200"
              height="600"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </CardContent>
      </Card>
    </ContentPage>
  );
};

export default Kontak;
