export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type OpenWhenLetter = {
  title: string;
  preview: string;
  letter: string;
};

export type PlaylistSong = {
  title: string;
  artist: string;
  reason: string;
};

export type BucketListItem = {
  title: string;
  description: string;
};

export type DailyLoveNote = {
  title: string;
  message: string;
};

export const loveData = {
  herName: "Dhea Aprila",
  hero: {
    title: "Dhea Aprila Hi Hakim",
    subtitle: "Sebuah tempat kecil yang dibuat khusus buat kamu.",
    cta: "Mulai Membaca",
  },
  openingMessage:
    "Aku membuat tempat kecil ini untuk kita. Tempat yang menyimpan kenangan, cerita, hal-hal yang aku suka darimu, dan semua harapan tentang masa depan yang ingin kita jalani bersama. Karena ada beberapa perasaan yang rasanya pantas punya tempatnya sendiri.",
  timeline: [
    {
      date: "24 Oktober 2022",
      title: "Pertama bertemu",
      description:
        "Awal kecil yang ternyata menjadi salah satu bagian paling berarti dalam hidup kita.",
    },
    {
      date: "23 Oktober 2022",
      title: "Pertama chat",
      description:
        "Percakapan sederhana yang membuat waktu biasa terasa lebih hangat dan menyenangkan.",
    },
    {
      date: "27 Oktober 2022",
      title: "Kencan pertama",
      description: "Hari ketika aku sadar betapa nyamannya berada di sisimu",
    },
    {
      date: "19 Juni 2025",
      title: "Kenangan favorit",
      description:
        "Salah satu momen yang sering aku putar ulang di kepala karena rasanya tetap hangat setiap kali diingat.",
    },
    {
      date: "Hari ini",
      title: "Hari ini",
      description:
        "Masih memilihmu, masih bersyukur memilikimu, dan masih menantikan banyak hal indah di depan.",
    },
  ] satisfies TimelineItem[],
  thingsILove: [
    "Senyummu, terutama saat muncul sebelum kamu sendiri menyadarinya.",
    "Caramu peduli sangat dalam, bahkan pada hal-hal yang paling kecil.",
    "Candaanmu yang bisa mengubah suasana menjadi lebih ringan.",
    "Kesabaranmu, kelembutanmu, dan ketenangan yang kamu bawa.",
    "Kebiasaan-kebiasaan kecilmu yang random, yang membuatmu terasa benar-benar kamu.",
  ],
  dailyCapsule: {
    eyebrow: "Fitur favorit",
    title: "Kapsul untuk hari ini",
    description:
      "Ini bisa kamu buka, terutama saat kamu butuh diingatkan bahwa kamu selalu punya ruang hangat di hati aku.",
    closedLabel: "Satu pesan kecil untuk hari ini",
    closedTitle: "Untukmu",
    openedTitle: "Terbuka",
    closedMessage: "Klik tombol di bawah untuk membuka pesan.",
    openButton: "Buka kapsul",
    lockedButton: "Kapsul terbuka",
    lockedHint:
      "Kapsul ini akan menyiapkan pesan baru setelah waktunya selesai.",
    loadingMessage: "Menyiapkan kapsul hari ini...",
    emptyMessage: "Belum ada pesan di kapsul ini.",
    todayLabel: "hari ini",
    openedAtLabel: "Dibuka pada",
    countdownLabel: "Bisa dibuka lagi dalam",
    counterLabel: "Pesan",
    counterJoiner: "dari",
    notes: [
      {
        title: "Untuk pagi yang pelan",
        message:
          "Semoga hari ini memperlakukanmu dengan lembut. Kalau ada yang terasa berat, ingat bahwa kamu tidak harus menyelesaikan semuanya sendirian.",
      },
      {
        title: "Untuk saat kamu ragu",
        message:
          "Aku ingin kamu tahu bahwa caramu berusaha sudah sangat berarti. Bahkan ketika kamu merasa belum cukup, di mataku kamu tetap luar biasa.",
      },
      {
        title: "Untuk malam yang panjang",
        message:
          "Kalau malam terasa terlalu ramai di kepala, semoga pesan ini jadi jeda kecil. Tarik napas pelan. Kamu dicintai, bahkan dalam diam.",
      },
      {
        title: "Untuk senyum kecilmu",
        message:
          "Ada bagian dari hariku yang selalu jadi lebih baik hanya karena mengingat senyummu. Sederhana, tapi efeknya besar sekali.",
      },
      {
        title: "Untuk kamu yang aku pilih",
        message:
          "Dari banyak hal yang bisa aku syukuri, kehadiranmu selalu punya tempat sendiri. Aku memilihmu dengan tenang, bukan terburu-buru.",
      },
      {
        title: "Untuk hari yang melelahkan",
        message:
          "Istirahatlah tanpa merasa bersalah. Kamu sudah cukup banyak memberi hari ini. Sekarang biarkan dirimu menerima tenang.",
      },
    ] satisfies DailyLoveNote[],
  },
  gallery: [
    {
      src: "/images/mylove2.jpeg",
      alt: "Foto kenangan pertama yang bisa diganti",
      caption: "Pemandangan yang selalu membuatku tersenyum.",
    },
    {
      src: "/images/mylove1.jpeg",
      alt: "Foto kenangan kedua yang bisa diganti",
      caption: "Muka bahagia yang selalu membuatku tenang.",
    },
    {
      src: "/images/mylove3.jpeg",
      alt: "Foto kenangan ketiga yang bisa diganti",
      caption: "Manusia yang selalu membuatku merasa di rumah.",
    },
  ] satisfies GalleryItem[],
  openWhenLetters: [
    {
      title: "Buka saat kamu merasa rindu",
      preview: "Momen sunyi ketika jarak terasa sedikit terlalu keras.",
      letter:
        "Aku lebih dekat daripada yang jarak buat terlihat. Bayangkan tanganku menggenggam tanganmu, suaraku memanggil namamu, dan semua momen sederhana yang selalu mengingatkanku bahwa aku beruntung bisa menyayangimu.",
    },
    {
      title: "Buka saat kamu lagi sedih",
      preview: "Hari-hari yang terasa lebih berat dari biasanya.",
      letter:
        "Kamu tidak harus selalu terlihat baik-baik saja untuk tetap dicintai. Istirahat sebentar, tarik napas pelan, dan ingat bahwa aku akan tetap bangga dalam setiap versi diri kamu, termasuk saat kamu lelah dan rapuh.",
    },
    {
      title: "Buka saat kamu lelah",
      preview: "Saat dunia terasa meminta terlalu banyak darimu.",
      letter:
        "Tolong lembutlah pada dirimu sendiri. Kamu sudah memberi begitu banyak, dan kamu juga pantas mendapatkan kelembutan. Semoga malam ini memberimu tenang, istirahat yang cukup, dan rasa seolah sedang dipeluk.",
    },
    {
      title: "Buka saat kamu butuh diingatkan",
      preview: "Hari ketika kamu lupa betapa berharganya kamu untukku.",
      letter:
        "Kamu dicintai dengan cara yang bahkan masih aku pelajari untuk mengatakannya dengan tepat. Kamu berarti untukku dalam cara yang tenang, tetap, dan sehari-hari, cara yang perlahan terasa seperti rumah.",
    },
  ] satisfies OpenWhenLetter[],
  playlist: [
    {
      title: "Kota Ini Tak Sama Tanpamu",
      artist: "Nadhif Basalamah",
      reason: "Hubungan jarak jauh membuat setiap sudut kota ini terasa asing.",
    },
    {
      title: "Di Akhir Perang",
      artist: "Nadin Amizah",
      reason:
        "Suatu saat kita akan sampai di momen di mana semua perjuangan kita akan berakhir.",
    },
    {
      title: "Sampai Menutup Mata",
      artist: "Acha Septriasa",
      reason:
        "Kita akan tetap memilih satu sama lain, bahkan ketika dunia terasa gelap dan lelah.",
    },
  ] satisfies PlaylistSong[],

  bucketList: [
    {
      title: "Jalan-jalan bersama",
      description:
        "Mengumpulkan pagi yang tenang, jalan-jalan cantik, dan cerita yang nanti bisa kita kenang.",
    },
    {
      title: "Membangun hidup yang damai",
      description:
        "Hidup yang terasa aman, hangat, jujur, dan penuh rutinitas kecil yang indah.",
    },
    {
      title: "Merayakan lebih banyak hari spesial",
      description:
        "Menandai tahun-tahun yang lewat dengan rasa syukur, kelembutan, dan mungkin beberapa lagu favorit.",
    },
    {
      title: "Tumbuh bersama",
      description:
        "Terus menjadi versi yang lebih baik sambil tetap saling memilih dengan penuh perhatian.",
    },
  ] satisfies BucketListItem[],
  finalLetter:
    "Kalau halaman ini bisa menampung semua yang aku rasakan, mungkin ia tidak akan pernah selesai. Jadi biarkan ini menjadi awal saja, pengingat bahwa kamu disayangi, diperhatikan, diingat, dan dicintai dengan lebih banyak cara daripada yang bisa aku tulis di layar.",
  footer: "Dibuat dengan cinta, khusus untukmu.",
};
