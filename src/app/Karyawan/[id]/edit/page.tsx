'use client';

import Link from 'next/link';
import { useState } from 'react';

type Props = {
  params: { id: string };
};

type Karyawan = {
  id: number;
  nama: string;
  jabatan: string;
  warnaFavorit: string;
};

// Simulasi data dummy
const dataKaryawanDummy: Karyawan[] = [
  { id: 1, nama: "Budi Santoso", jabatan: "Manager HRD", warnaFavorit: "Hijau Tua" },
  { id: 2, nama: "Siti Aminah", jabatan: "Staff Accounting", warnaFavorit: "Biru Laut" },
  { id: 3, nama: "Joko Widodo", jabatan: "Marketing Lead", warnaFavorit: "Merah Marun" },
  { id: 4, nama: "Dewi Lestari", jabatan: "IT Support", warnaFavorit: "Ungu Muda" }
];

export default function EditKaryawanPage({ params }: Props) {
  const { id } = params;
  const numericId = parseInt(id);

  
  const found = dataKaryawanDummy.find(k => k.id === numericId);
  const [nama, setNama] = useState(found?.nama || '');
  const [jabatan, setJabatan] = useState(found?.jabatan || '');
  const [warnaFavorit, setWarnaFavorit] = useState(found?.warnaFavorit || '');

  if (!found) {
    return (
      <main className="p-4 max-w-2xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Karyawan Tidak Ditemukan</h1>
        <Link href="/">
          <button className="btn btn-primary">← Kembali ke Daftar</button>
        </Link>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Berhasil disimpan:\nNama: ${nama}\nJabatan: ${jabatan}\nWarna Favorit: ${warnaFavorit}`);
  };

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Karyawan ID: {id}</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-base-200 p-6 rounded-lg shadow">
        <div>
          <label className="label">
            <span className="label-text">Nama</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Jabatan</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Warna Favorit</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={warnaFavorit}
            onChange={(e) => setWarnaFavorit(e.target.value)}
          />
        </div>

        <div className="flex justify-between mt-6">
          <Link href={`/Karyawan/${id}`}>
            <button type="button" className="btn btn-outline">← Batal</button>
          </Link>
          <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
        </div>
      </form>
    </main>
  );
}
