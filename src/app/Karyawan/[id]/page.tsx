import Link from 'next/link';

type Props = {
  params: { id: string };
};

export default function ShowKaryawanPage({ params }: Props) {
  const { id } = params;

  const dataKaryawan = [
    {
      id: "1",
      nama: "Budi Santoso",
      jabatan: "Manager HRD",
      warnaFavorit: "Hijau Tua",
      foto: `https://picsum.photos/seed/1/300`
    },
    {
      id: "2",
      nama: "Siti Aminah",
      jabatan: "Staff Accounting",
      warnaFavorit: "Biru Laut",
      foto: `https://picsum.photos/seed/2/300`
    },
    {
      id: "3",
      nama: "Joko Widodo",
      jabatan: "Marketing Lead",
      warnaFavorit: "Merah Marun",
      foto: `https://picsum.photos/seed/3/300`
    },
    {
      id: "4",
      nama: "Dewi Lestari",
      jabatan: "IT Support",
      warnaFavorit: "Ungu Muda",
      foto: `https://picsum.photos/seed/4/300`
    }
  ];

  const karyawan = dataKaryawan.find(k => k.id === id);

  if (!karyawan) {
    return (
      <main className="p-4 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Karyawan Tidak Ditemukan</h1>
        <Link href="/Karyawan">
          <button className="btn btn-primary">← Kembali</button>
        </Link>
      </main>
    );
  }

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Detail Karyawan</h1>

      <div className="card bg-base-200 shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 flex justify-center">
          <img
            src={karyawan.foto}
            alt={`Foto ${karyawan.nama}`}
            className="rounded-lg w-full max-w-xs object-cover"
          />
        </div>
        <div className="md:w-2/3 space-y-2">
          <p><strong>ID:</strong> {karyawan.id}</p>
          <p><strong>Nama:</strong> {karyawan.nama}</p>
          <p><strong>Jabatan:</strong> {karyawan.jabatan}</p>
          <p><strong>Warna Favorit:</strong> {karyawan.warnaFavorit}</p>
        </div>
      </div>
          <div className="mt-6 flex justify-end">
            <Link href="/">
              <button className="btn btn-md btn-primary">Kembali</button>
            </Link>
          </div>
    </main>
  );
}
