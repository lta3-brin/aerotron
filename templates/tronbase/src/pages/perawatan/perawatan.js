import { defineComponent } from 'vue'
import { openURL } from 'quasar'

const fasilitas = [
  {
    gambar: "https://bit.ly/3ikHf8T",
    nama: "Indonesian Low Speed Tunnel",
    singkatan: "ILST",
    deskripsi: "Terowongan angin sirkuit tertutup dengan luas penampang seksi uji 3 m x 4 m dan panjang 10 m. Dilengkapi external balance dengan 7 high precision load cells untuk pengukuran gaya dan momen secara akurat. Pada fasilitas ini kecepatan angin saat keadaan kosong ~110 m/s.",
    status: "https://docs.google.com/spreadsheets/d/1luHqm3ZwTXO9Q1ahdVL06E1nS9hB1qMwM-CHYyIl1-8/edit#gid=0",
    kegiatan: "/dokumentasiILST"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Fasilitas%2FIWET.jpg?alt=media&token=b44b54a6-fd5a-496f-b34e-edbf8ab95d68",
    nama: "Industrial Wind Engineering Tunnel",
    singkatan: "IWET",
    deskripsi: "Terowongan angin jenis sirkuit terbuka yang digunakan untuk pengujian non-pesawat, seperti model jembatan, model gedung dan model uji lainnya. Dengan spesifikasi geometri dari seksi uji yaitu 1.5 m x 2 m dengan kecepatan aliran angin sekitar 2 m/s sampai dengan 20 m/s.",
    status: "https://docs.google.com/spreadsheets/d/1j76fbzz1F2vcv9JXHBuq_yjgIX6PiaHqn9AKN3CJo3g/edit?usp=sharingAS",
    kegiatan: "/dokumentasiIWET"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Fasilitas%2FESWT.jpg?alt=media&token=90cdcceb-86af-412c-aeb3-319f88860e53",
    nama: "Educational Small Wind Tunnel",
    singkatan: "ESWT",
    deskripsi: "Terowongan angin jenis sirkuit terbuka dengan spesifikasi geometri luas penampang dari bagian seksi uji yaitu berukuran 0,5 m x 0,5 m. Kecepatan aliran angin operasional maksimum adalah 30 m/s. Fasilitas ini digunakan untuk mengkalibrasi anemometer, tabung pitot dan penelitian lain seperti pengujian aerodinamika model kereta api, kendaraan roda empar, dll.",
    status: "https://docs.google.com/spreadsheets/d/1_zL4trXk5saZDzs_tuWseaRbG4d0QdEU2T6CYoP8j_s/edit?usp=sharing",
    kegiatan: "/dokumentasiESWT"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Fasilitas%2FAREAS.jpg?alt=media&token=3d2fb614-e6d4-44ee-9265-274b76b2c842",
    nama: "Acoustic and Aeroacoustic Laboratorium",
    singkatan: "AREAS",
    deskripsi: "Fasilitas ini merupakan hemi-anechoic chamber dengan dimensi 5.2 m x 5 m x 3 m dan memiliki kebisingan latar sebesar 18 dB dan cut-off frequency 100 Hz. Pengukuran yang dilakukan pada ruangan ini sesuai dengan ISO 3745:2012. Fasilitas ini dilengkapi dengan peralatan LAN XI, ½” inc free-field Microphone, Sound level meter dan Acoustic Robot Arm (ARA).",
    status: "https://docs.google.com/spreadsheets/d/11Zmbpgd2CX1f8COcNEhlPd2TxA4lnc1dQOSYxwR_TIg/edit#gid=0",
    kegiatan: "/dokumentasiAREAS"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Fasilitas%2FVIENTA.jpg?alt=media&token=200a919b-5802-48af-8ce2-2a90b38df56e",
    nama: "Vibration and Environmental Test",
    singkatan: "VIENTA",
    deskripsi: "Vibrator shaker pada VIENTA memiliki rentang frekuensi 5 Hz s/d 3 kHz dengan max object displacement 63,5 mm, dan berat maksimum 610 kg. Kemudian pada Climate Chamber suhu ruangan uji dapat bervariasi -75˚C s/d 180˚C dan kelembapan dapat diatur mulai 10% s/d 95%. Vienta memiliki CSI 2130 Machinery Health Analyzer untuk analisis dan pengukuran getaran.",
    status: "https://docs.google.com/spreadsheets/d/1j5NXSHUl62ClFAUy18X6lPuopmNhVZf1xsa0rXMCD2w/edit?usp=sharing",
    kegiatan: "/dokumentasiVIENTA"
  },
  {
    gambar: "https://firebasestorage.googleapis.com/v0/b/aerotron-8f312.appspot.com/o/Penunjang_1.jpeg?alt=media&token=965b2bcc-7888-4834-ab35-c3ab8abbad52",
    nama: "Fasilitas Penunjang",
    singkatan: "SUPPORT FACILITIES",
    deskripsi: "Merupakan fasilitas penunjang pengoperasian fasilitas pengujian. Seperti fasilitas Sistem Tenaga Listrik, mencakup peralatan dari sisi hulu sampai ke hilir. Kemudian juga fasilitas Pencahayaan, baik pencahayaan pada fasilitas pengujian maupun sekitarnya. Kemudian juga fasilitas komunikasi Telepon dan peralatan-peralatan pendukung lainnya",
    status: "https://docs.google.com/spreadsheets/d/1TcZdwcQRJiHafV2qzXWu5F5dNIR4jxlEj_IuY0IEPN8/edit?usp=sharing",
    kegiatan: "/dokumentasiPenunjang"
  }
]


export default defineComponent({
  name: 'HalamanPerawatan',

  setup() {
    return {
      fasilitas,
      kunjungiStatus(url) {
        openURL(url, null, { noopener: true, noreferrer: true })
      } 
    }
  }
})