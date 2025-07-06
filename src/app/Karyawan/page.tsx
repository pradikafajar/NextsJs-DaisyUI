'use client';

import { useState } from 'react';

type Karyawan = {
  id: number;
  nama: string;
  jabatan: string;
  warnaFavorit: string;
};

export default function KaryawanTable() {
  const [data, setData] = useState<Karyawan[]>([
    { id: 1, nama: "Budi Santoso", jabatan: "Manager HRD", warnaFavorit: "Hijau Tua" },
    { id: 2, nama: "Siti Aminah", jabatan: "Staff Accounting", warnaFavorit: "Biru Laut" },
    { id: 3, nama: "Joko Widodo", jabatan: "Marketing Lead", warnaFavorit: "Merah Marun" },
    { id: 4, nama: "Dewi Lestari", jabatan: "IT Support", warnaFavorit: "Ungu Muda" }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [nama, setNama] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [warnaFavorit, setWarnaFavorit] = useState('');

  const handleDelete = (id: number) => {
    if (confirm('Yakin mau hapus data ini?')) {
      setData(data.filter(k => k.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = Math.max(0, ...data.map(k => k.id)) + 1;
    const newKaryawan: Karyawan = {
      id: newId,
      nama,
      jabatan,
      warnaFavorit,
    };
    setData([...data, newKaryawan]);
    setNama('');
    setJabatan('');
    setWarnaFavorit('');
    setShowForm(false);
    alert('Berhasil menambahkan karyawan!');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Karyawan</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? '× Batal' : '+ Tambah Karyawan'}
        </button>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Jabatan</th>
              <th>Warna Favorit</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((karyawan) => (
              <tr key={karyawan.id} className="bg-base-200">
                <td>{karyawan.id}</td>
                <td>{karyawan.nama}</td>
                <td>{karyawan.jabatan}</td>
                <td>{karyawan.warnaFavorit}</td>
                <td className="space-x-2">
                  {/* Simulasi tombol show/edit */}
                  <button className="btn btn-sm btn-success">Show</button>
                  <button className="btn btn-sm btn-info">Edit</button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(karyawan.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-base-200 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Form Tambah Karyawan</h2>
          <div>
            <label className="label">
              <span className="label-text">Nama</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
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
              required
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
              required
            />
          </div>

          <div className="flex justify-between mt-6">
            <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>← Batal</button>
            <button type="submit" className="btn btn-primary">Simpan</button>
          </div>
        </form>
      )}
    </div>
  );
}
