import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./components/ErrorElement.jsx";
import Home from "./pages/Home.jsx";
import MainLayout from "./MainLayout";

import TugasFungsi from "./pages/Profile/elements/Tusfungsi";
import NilaiNilai from "./pages/Profile/elements/Nilai";
import KodeEtik from "./pages/Profile/elements/KodeEtik";
import Profil from "./pages/Profile/elements/Profil";
import Visimisi from "./pages/Profile/elements/Visimisi";
import Struktur from "./pages/Profile/elements/Struktur";
import Berkala from "./pages/Informasi Publik/elements/Berkala";
import SertaMerta from "./pages/Informasi Publik/elements/SertaMerta";
import SetiapSaat from "./pages/Informasi Publik/elements/SetiapSaat";
import Giat from "./pages/Layanan Informasi/elements/Giat";
import Pengaduan from "./pages/Layanan Informasi/elements/Pengaduan";
import Ringkasan from "./pages/Layanan Informasi/elements/Ringkasan";
import Laporan from "./pages/Layanan Informasi/elements/Laporan";
import InformasiUmum from "./pages/Standar Layanan/elements/InformasiUmum";
import Maklumat from "./pages/Standar Layanan/elements/Maklumat";
import Pencegahan from "./pages/Standar Layanan/elements/Pencegahan";
import SurveyKepuasan from "./pages/Standar Layanan/elements/SurveyKepuasan";
import Tatacara from "./pages/Standar Layanan/elements/Tatacara";
import SOP from "./pages/SOP";
import Kontak from "./pages/Profile/elements/Kontak";
import Prosedur from "./pages/Standar Layanan/elements/Prosedur";
import Regulasi from "./pages/Regulasi";
import SemuaBerita from "./elements/SemuaBerita";
import PermohonanPage from "./elements/PermohonanInformasi";
import DetailBerita from "./elements/DetailBerita";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/sop",
        element: <SOP />,
      },
      {
        path: "/regulasi",
        element: <Regulasi />,
      },
      {
        path: "/SIPPID",
        element: <PermohonanPage />,
      },

      {
        path: "/semua-berita",
        element: <SemuaBerita />,
      },
      {
        path: "/detail-berita",
        element: <DetailBerita />,
      },

      {
        path: "/profil",
        children: [
          { path: "tugas-dan-fungsi", element: <TugasFungsi /> },
          { path: "nilai-nilai-kemenpanrb", element: <NilaiNilai /> },
          { path: "kode-etik", element: <KodeEtik /> },
          { path: "profil", element: <Profil /> },
          { path: "visi-misi", element: <Visimisi /> },
          { path: "struktur-organisasi-ppid", element: <Struktur /> },
          { path: "kontak", element: <Kontak /> },
        ],
      },
      {
        path: "/informasi-publik",
        children: [
          { path: "berkala", element: <Berkala /> },
          { path: "serta-merta", element: <SertaMerta /> },
          { path: "setiap-saat", element: <SetiapSaat /> },
        ],
      },

      {
        path: "/layanan-informasi",
        children: [
          { path: "layanan-pengaduan-masyarakat", element: <Pengaduan /> },
          { path: "laporan-ringkasan", element: <Ringkasan /> },
          { path: "laporan-tahunan", element: <Laporan /> },
          { path: "giat-menteri", element: <Giat /> },
        ],
      },

      {
        path: "/standar-layanan",
        children: [
          { path: "prosedur-memperoleh-informasi", element: <Prosedur /> },
          { path: "informasi-umum-layanan", element: <InformasiUmum /> },
          { path: "maklumat-pelayanan", element: <Maklumat /> },
          {
            path: "pencegahan-korupsi-pakta-integritas",
            element: <Pencegahan />,
          },
          { path: "survey-kepuasan", element: <SurveyKepuasan /> },
          { path: "tata-cara", element: <Tatacara /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
