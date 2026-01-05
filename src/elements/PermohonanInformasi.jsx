import { useState } from "react";
import { FileText, AlertCircle, Search, Upload, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PermohonanPage = () => {
  const [activeTab, setActiveTab] = useState("form");

  const tabs = [
    { id: "form", label: "Form Permohonan Informasi", icon: FileText },
    { id: "keberatan", label: "Pengajuan Keberatan", icon: AlertCircle },
    { id: "lacak", label: "Lacak Permohonan", icon: Search },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-linear-to-r from-primary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Layanan Permohonan Informasi
          </h1>
          <p className="text-center text-white/90">
            PPID Kementerian PANRB
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === "form" && <FormPermohonan />}
        {activeTab === "keberatan" && <FormKeberatan />}
        {activeTab === "lacak" && <LacakPermohonan />}
      </div>
    </div>
  );
};

// Form Permohonan Informasi Component
const FormPermohonan = () => {
  const [formData, setFormData] = useState({
    jenisPemohon: "",
    nik: "",
    nama: "",
    email: "",
    telepon: "",
    pekerjaan: "",
    alamat: "",
    informasiDiminta: "",
    tujuanPenggunaan: "",
    caraMemperoleh: "melihat",
    mendapatkanSalinan: "softcopy",
    caraMendapatkan: "langsung",
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission
  };

  return (
    <Card className="max-w-5xl mx-auto p-8 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Form Permohonan Informasi Publik
        </h2>
        <p className="text-gray-600 mt-2">
          Silakan lengkapi formulir di bawah ini untuk mengajukan permohonan informasi publik
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Jenis Pemohon */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="jenisPemohon" className="text-gray-700 font-medium">
              Jenis Pemohon <span className="text-red-500">*</span>
            </Label>
            <Select value={formData.jenisPemohon} onValueChange={(value) => handleInputChange("jenisPemohon", value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Pilih jenis pemohon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="perorangan">Perorangan</SelectItem>
                <SelectItem value="kelompok">Kelompok Orang</SelectItem>
                <SelectItem value="organisasi">Organisasi/Lembaga</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="nik" className="text-gray-700 font-medium">
              NIK/No.Identitas Pribadi <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nik"
              placeholder="Masukkan NIK"
              className="mt-2"
              value={formData.nik}
              onChange={(e) => handleInputChange("nik", e.target.value)}
            />
          </div>
        </div>

        {/* Nama & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="nama" className="text-gray-700 font-medium">
              Nama Lengkap <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nama"
              placeholder="Nama Pemohon"
              className="mt-2"
              value={formData.nama}
              onChange={(e) => handleInputChange("nama", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="contoh@email.com"
              className="mt-2"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        </div>

        {/* Telepon & Pekerjaan */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="telepon" className="text-gray-700 font-medium">
              No. Telp/HP <span className="text-red-500">*</span>
            </Label>
            <Input
              id="telepon"
              placeholder="08123456789"
              className="mt-2"
              value={formData.telepon}
              onChange={(e) => handleInputChange("telepon", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="pekerjaan" className="text-gray-700 font-medium">
              Pekerjaan <span className="text-red-500">*</span>
            </Label>
            <Input
              id="pekerjaan"
              placeholder="PNS/Wirausaha/Mahasiswa"
              className="mt-2"
              value={formData.pekerjaan}
              onChange={(e) => handleInputChange("pekerjaan", e.target.value)}
            />
          </div>
        </div>

        {/* Upload KTP */}
        <div>
          <Label className="text-gray-700 font-medium">
            Upload KTP Pribadi <span className="text-red-500">*</span>
          </Label>
          <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-2">
              Klik untuk upload atau drag & drop file
            </p>
            <p className="text-xs text-gray-500">
              Format: JPG, PNG, PDF (Max. 2MB)
            </p>
          </div>
        </div>

        {/* Alamat */}
        <div>
          <Label htmlFor="alamat" className="text-gray-700 font-medium">
            Alamat <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="alamat"
            placeholder="Masukkan alamat lengkap"
            className="mt-2 min-h-[100px]"
            value={formData.alamat}
            onChange={(e) => handleInputChange("alamat", e.target.value)}
          />
        </div>

        {/* Informasi Yang Diminta */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <Label htmlFor="informasiDiminta" className="text-gray-700 font-medium text-lg">
            Informasi Yang Diminta <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="informasiDiminta"
            placeholder="Jelaskan informasi yang Anda butuhkan secara detail"
            className="mt-3 min-h-[120px] bg-white"
            value={formData.informasiDiminta}
            onChange={(e) => handleInputChange("informasiDiminta", e.target.value)}
          />
        </div>

        {/* Tujuan Penggunaan */}
        <div>
          <Label htmlFor="tujuanPenggunaan" className="text-gray-700 font-medium">
            Tujuan Penggunaan Informasi <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="tujuanPenggunaan"
            placeholder="Jelaskan tujuan penggunaan informasi"
            className="mt-2 min-h-[100px]"
            value={formData.tujuanPenggunaan}
            onChange={(e) => handleInputChange("tujuanPenggunaan", e.target.value)}
          />
        </div>

        {/* Cara Memperoleh Informasi */}
        <div>
          <Label className="text-gray-700 font-medium mb-3 block">
            Cara Memperoleh Informasi <span className="text-red-500">*</span>
          </Label>
          <RadioGroup value={formData.caraMemperoleh} onValueChange={(value) => handleInputChange("caraMemperoleh", value)} className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="melihat" id="melihat" />
              <Label htmlFor="melihat" className="font-normal cursor-pointer">Melihat</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="membaca" id="membaca" />
              <Label htmlFor="membaca" className="font-normal cursor-pointer">Membaca</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mendengarkan" id="mendengarkan" />
              <Label htmlFor="mendengarkan" className="font-normal cursor-pointer">Mendengarkan</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mencatat" id="mencatat" />
              <Label htmlFor="mencatat" className="font-normal cursor-pointer">Mencatat</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Mendapatkan Salinan */}
        <div>
          <Label className="text-gray-700 font-medium mb-3 block">
            Mendapatkan Salinan Informasi <span className="text-red-500">*</span>
          </Label>
          <RadioGroup value={formData.mendapatkanSalinan} onValueChange={(value) => handleInputChange("mendapatkanSalinan", value)} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="softcopy" id="softcopy" />
              <Label htmlFor="softcopy" className="font-normal cursor-pointer">Softcopy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hardcopy" id="hardcopy" />
              <Label htmlFor="hardcopy" className="font-normal cursor-pointer">Hardcopy</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Cara Mendapatkan Salinan */}
        <div>
          <Label className="text-gray-700 font-medium mb-3 block">
            Cara Mendapatkan Salinan Informasi <span className="text-red-500">*</span>
          </Label>
          <RadioGroup value={formData.caraMendapatkan} onValueChange={(value) => handleInputChange("caraMendapatkan", value)} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="langsung" id="langsung" />
              <Label htmlFor="langsung" className="font-normal cursor-pointer">Mengambil Langsung</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="faksimili" id="faksimili" />
              <Label htmlFor="faksimili" className="font-normal cursor-pointer">Faksimili</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email" className="font-normal cursor-pointer">Email</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Submit Button */}
        <div className="pt-6 border-t">
          <Button
            type="submit"
            className="w-full md:w-auto bg-primary hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold"
          >
            <Send className="mr-2 h-5 w-5" />
            Kirim Permohonan
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Dengan mengirim formulir ini, Anda menyetujui syarat dan ketentuan yang berlaku
          </p>
        </div>
      </form>
    </Card>
  );
};

// Form Keberatan Component
const FormKeberatan = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-linear-to-br from-cyan-400 to-cyan-500 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
        <div className="text-center mb-8">
          <AlertCircle className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Pengajuan Keberatan</h2>
          <p className="text-white/90">
            Ajukan keberatan atas tanggapan permohonan informasi
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <Label htmlFor="nomorPermohonan" className="text-white font-medium">
              Nomor Permohonan <span className="text-yellow-300">*</span>
            </Label>
            <Input
              id="nomorPermohonan"
              placeholder="Nomor yang diberikan saat pengajuan permohonan informasi"
              className="mt-2 bg-white/95"
            />
          </div>

          <div>
            <Label htmlFor="jenisPemohonKeberatan" className="text-white font-medium">
              Jenis Pemohon <span className="text-yellow-300">*</span>
            </Label>
            <Select>
              <SelectTrigger className="mt-2 bg-white/95">
                <SelectValue placeholder="Pilih jenis pemohon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="perorangan">Perorangan</SelectItem>
                <SelectItem value="kelompok">Kelompok Orang</SelectItem>
                <SelectItem value="organisasi">Organisasi/Lembaga</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="namaPemohonKeberatan" className="text-white font-medium">
              Nama Pemohon <span className="text-yellow-300">*</span>
            </Label>
            <Input
              id="namaPemohonKeberatan"
              placeholder="Nama Pemohon"
              className="mt-2 bg-white/95"
            />
          </div>

          <div>
            <Label htmlFor="teleponKeberatan" className="text-white font-medium">
              No. Telp/HP <span className="text-yellow-300">*</span>
            </Label>
            <Input
              id="teleponKeberatan"
              placeholder="08123456789"
              className="mt-2 bg-white/95"
            />
          </div>

          <div>
            <Label htmlFor="emailKeberatan" className="text-white font-medium">
              Email <span className="text-yellow-300">*</span>
            </Label>
            <Input
              id="emailKeberatan"
              type="email"
              placeholder="contoh@email.com"
              className="mt-2 bg-white/95"
            />
          </div>

          <div>
            <Label htmlFor="alasanKeberatan" className="text-white font-medium">
              Alasan Keberatan <span className="text-yellow-300">*</span>
            </Label>
            <Textarea
              id="alasanKeberatan"
              placeholder="Jelaskan alasan keberatan Anda"
              className="mt-2 min-h-[150px] bg-white/95"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-6 text-base font-bold shadow-lg"
          >
            <Send className="mr-2 h-5 w-5" />
            Kirim Keberatan
          </Button>
        </form>
      </div>
    </div>
  );
};

// Lacak Permohonan Component
const LacakPermohonan = () => {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-linear-to-br from-teal-400 to-cyan-500 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Illustration */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full p-8 mb-6">
              <Search className="h-24 w-24 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Lacak Permohonan
            </h2>
            <p className="text-white/90 text-lg">
              Cek status permohonan informasi atau keberatan Anda
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <form className="space-y-4">
              <div>
                <Label htmlFor="nikLacak" className="text-gray-700 font-medium">
                  NIK/No.Identitas Pemohon <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nikLacak"
                  placeholder="Masukkan NIK"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="nomorLacak" className="text-gray-700 font-medium">
                  Nomor Permohonan <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nomorLacak"
                  placeholder="Nomor Permohonan"
                  className="mt-2"
                />
              </div>

              <Button
                type="button"
                onClick={() => setShowResult(!showResult)}
                className="w-full bg-primary hover:bg-red-800 text-white py-5 font-semibold"
              >
                <Search className="mr-2 h-5 w-5" />
                Cari Permohonan
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Result Section */}
      {showResult && (
        <Card className="mt-8 p-8 border-2 border-green-200 bg-green-50">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Status Permohonan
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-green-200">
                  <span className="text-gray-600 font-medium">Nomor Permohonan:</span>
                  <span className="text-gray-900 font-semibold">PPID-2024-001234</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-200">
                  <span className="text-gray-600 font-medium">Tanggal Pengajuan:</span>
                  <span className="text-gray-900">19 Desember 2024</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-200">
                  <span className="text-gray-600 font-medium">Status:</span>
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Diproses
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-medium">Estimasi Selesai:</span>
                  <span className="text-gray-900">26 Desember 2024</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Catatan:</strong> Permohonan Anda sedang dalam proses verifikasi. 
                  Anda akan menerima notifikasi melalui email jika ada update status.
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default PermohonanPage;