"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <main>
      {/* Navbar */}
      <nav className="navbar container">
        <div className="logo"><Link href="/">KOST PUTRA <span className="text-accent">PANGESTU</span></Link></div>
        <ul className="nav-links">
          <li><Link href="/" className="nav-link active">Beranda</Link></li>
          <li><Link href="/kost-1" className="nav-link">Kost 1.0</Link></li>
          <li><Link href="/kost-2" className="nav-link">Kost 2.0</Link></li>
        </ul>
        <div className="flex gap-4 items-center">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="https://wa.me/628127599146" target="_blank" rel="noreferrer" className="btn btn-primary">Pesan Sekarang</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Cari Kost yang Nyaman, Aman, dan Strategis?<br />Tepat Di Sini!</h1>
            <p className="hero-desc">
              Cari kost dengan fasilitas lengkap, aman, dan lokasi strategis? Kost Putra Pangestu hadir memberikan kenyamanan elit untuk memulihkan energimu setelah seharian beraktivitas.
            </p>

            <div className="search-bar">

              <div className="search-field">
                <span className="search-label">Fasilitas Utama</span>
                <select className="search-input">
                  <option>AC + Kamar Mandi Dalam</option>
                  <option>Non-AC (Kipas Badai)</option>
                </select>
              </div>
              <div className="search-field">
                <span className="search-label">Durasi Sewa</span>
                <select className="search-input">
                  <option>Bulanan (Misi Singkat)</option>
                  <option>Tahunan (Misi Jangka Panjang)</option>
                </select>
              </div>
              <button className="btn btn-primary"> Cari Kamar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Recommendation */}
      <section className="section section-bg-dark">
        <div className="container">
          <div className="section-header">
            <h2>Kamar Pilihan Elit</h2>
            <div className="filter-pills">
              <button className="pill active">Semua Kamar</button>

            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {/* Kost 1.0 Card */}
            <div className="card-featured" style={{ flexDirection: 'column', padding: '16px', gap: '1rem' }}>
              <div className="card-img-wrapper" style={{ height: '220px', flex: 'none', marginBottom: 0 }}>
                <span className="card-tag" style={{ zIndex: 10 }}>🔥 Kost 1.0</span>
                <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEw_bERNEXr8pEYqjXeoc6NIDkjSDyIIJ8k3nJNgH8HFB0FB81QBrMwRKJ33AZMnKQY9K44n-b0_zvs1HCpYIlH0HNfNPaZhrbU9l70iYMacYGgE1aJ8YYTirXAps7wHaoiiV685Q=s1360-w1360-h1020-rw" alt="Kost Putra Pangestu 1.0" className="card-img" />
              </div>
              <div className="card-content" style={{ justifyContent: 'flex-start' }}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="card-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Kost Putra Pangestu 1.0</h3>
                </div>
                <div style={{ display: 'inline-block', background: 'var(--bg-secondary)', padding: '4px 10px', borderRadius: 'var(--radius-sm)', width: 'fit-content', marginBottom: '0.5rem' }}>
                  <span className="font-bold text-accent" style={{ fontSize: '0.9rem' }}>⭐ 4.8 / 5.0</span>
                </div>
                <p className="card-location" style={{ fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.4' }}>Fasilitas Lengkap: Spring Bed, Bantal Guling, TV, Sprei, Dapur, AC, Lemari, Meja kursi.</p>
                <div className="card-footer" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mulai dari</span><br />
                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)' }}>Harga Hubungi Pengurus</span>
                  </div>
                  <Link href="/kost-1" className="btn btn-dark" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Lihat Detail</Link>
                </div>
              </div>
            </div>

            {/* Kost 2.0 Card */}
            <div className="card-featured" style={{ flexDirection: 'column', padding: '16px', gap: '1rem' }}>
              <div className="card-img-wrapper" style={{ height: '220px', flex: 'none', marginBottom: 0 }}>
                <span className="card-tag" style={{ zIndex: 10 }}>✨ Kost 2.0</span>
                <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHDPZPRuoz5wxrQ0BG39mJkFovA8Z4Iv3_E2EpjtB6Qg1WT4CTnyXY3pF7QSSF7mCeeV9fu29NLcSG_yOci6tM5WoADl5zv9Pr27DAUTx4MecT4NGiqY2q4rNiCqMYL9q4TYhEl=s1360-w1360-h1020-rw" alt="Kost Putra Pangestu 2.0" className="card-img" />
              </div>
              <div className="card-content" style={{ justifyContent: 'flex-start' }}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="card-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Kost Putra Pangestu 2.0</h3>
                </div>
                <div style={{ display: 'inline-block', background: 'var(--bg-secondary)', padding: '4px 10px', borderRadius: 'var(--radius-sm)', width: 'fit-content', marginBottom: '0.5rem' }}>
                  <span className="font-bold text-accent" style={{ fontSize: '0.9rem' }}>⭐ 4.9 / 5.0</span>
                </div>
                <p className="card-location" style={{ fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.4' }}>Fasilitas Lengkap: Spring Bed, Bantal Guling, TV, Sprei, Dapur, AC, Lemari, Meja kursi.</p>
                <div className="card-footer" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mulai dari</span><br />
                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)' }}>Harga Hubungi Pengurus</span>
                  </div>
                  <Link href="/kost-2" className="btn btn-dark" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Lihat Detail</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Choice */}
      <section className="section section-bg-pattern">
        <div className="container">
          <h2 className="mb-8">Fasilitas Kamar</h2>
          <div className="bento-grid">
            <div className="bento-item">
              <img src="https://scontent.fpku6-1.fna.fbcdn.net/v/t51.82787-15/554204101_18287221828285755_4776635531334606220_n.webp?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=hC6Hjqzd17QQ7kNvwEmuXfF&_nc_oc=AdphpcSYaikZ-2FKEAebvElXQAq49XxFWJv0mWQu4lTG-d8qdNO2pKBNlGOeB8uw2Q8wZ4IA62cO7zsH56Zu4-Vc&_nc_zt=23&_nc_ht=scontent.fpku6-1.fna&_nc_gid=sddfrM65AzXoZLyOcW4PKg&oh=00_Af3id2OayXENoG9ncfCT__pA8y9igpI_VfIeQlwwgzOmjg&oe=69F12E8B" alt="Keamanan 24 Jam" className="bento-bg" />
              <div className="bento-overlay">
                <div>
                  <div className="bento-badge">⭐ Perlindungan Ekstra</div>
                </div>
                <h3 className="bento-title">Sistem Keamanan 24 Jam</h3>
                <p>Dilengkapi dengan CCTV di berbagai sudut. Basecamp bebas dari ancaman musuh dan pencuri.</p>
              </div>
            </div>

            <div className="bento-item">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAE5TUIbI6_BzUHf-C30aFr9nyGHXrlaLTuP4iEf8un-4weIJxJxJv47Las4Ex8xt23wwBY91vQZcd1M3rlwLt9x3r7n8ykcxroSjz4X78tWIPJe_90Uhr8njClGmoT_Pk-Xl6Pv=s1360-w1360-h1020-rw" alt="WiFi Ngebut" className="bento-bg" />
              <div className="bento-overlay">
                <div>
                  <div className="bento-badge">⭐ Koneksi Jaringan</div>
                </div>
                <h3 className="bento-title">WiFi Kecepatan Cahaya</h3>
                <p>Internet stabil dan kencang untuk menunjang tugas kampus atau gaming tanpa ngelag.</p>
              </div>
            </div>
            <div className="bento-item">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEtjOerwfi248K8_3lwz4mGx0wJAF2U5usdjn98c3cASiXa2yR0_pYjwyzeau5QMTTuuedCC2zYm3-PQVRJKW7H1Vdjs7E3-jzuZKOtjt2vtHaBYruDQatNT3HgfhzfKAjaB4Nn=s1360-w1360-h1020-rw" alt="Area Parkir" className="bento-bg" />
              <div className="bento-overlay" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                <div>
                  <div className="bento-badge">⭐ Kapasitas Super</div>
                </div>
                <h3 className="bento-title">Area Parkir Ekstra Luas</h3>
                <p>Kapasitas besar untuk menyimpan tunggangan besi dan motor kesayanganmu dengan sangat aman.</p>
              </div>
            </div>

            <div className="bento-item">
              <img src="/images/free_service.jpeg" alt="Free Service" className="bento-bg" />
              <div className="bento-overlay">
                <div>
                  <div className="bento-badge">⭐ Free Service</div>
                </div>
                <h3 className="bento-title">Laundry Sprei Anti-Ribet</h3>
                <p>Malas nyuci? Tenang aja! Kami sediakan layanan cuci dan ganti sprei gratis biar kamu tinggal rebahan nyaman tanpa pusing urusan cucian.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section section-bg-dark">
        <div className="container">
          {/* Full Width Stats Row */}
          <div className="stats-container ">
            <div className="stat-box">
              <div className="stat-number">20+</div>
              <p className="font-bold uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>Penghuni Aktif</p>
            </div>
            <div className="stat-box">
              <div className="stat-number">8+</div>
              <p className="font-bold uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>Kamar Tersedia</p>
            </div>
            <div className="stat-box">
              <div className="stat-number">74+</div>
              <p className="font-bold uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>Rating Sempurna di Google</p>
            </div>
            <div className="stat-box">
              <div className="stat-number">8+</div>
              <p className="font-bold uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>Tahun Berdiri</p>
            </div>
          </div>

          <div className="about-grid" style={{ marginTop: '5rem' }}>
            <div>
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '2px solid var(--primary-color)' }}>
                <img src="https://i.pinimg.com/236x/91/d5/52/91d552de17713d3d9320514851f20780.jpg" alt="Markas Pahlawan" style={{ width: '100%', display: 'block', opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(229,57,70,0.3), transparent)' }}></div>
              </div>
            </div>
            <div>
              <h3 className="text-primary mb-2">Inisiatif Kost Pangestu</h3>
              <h2 style={{ fontSize: '3.5rem', lineHeight: 1 }}>Sewa Di Sini</h2>
              <p className="mb-6" style={{ fontSize: '1.1rem' }}>
                Kamu butuh tempat yang nyaman untuk memulihkan energi setelah seharian 'bertarung' di kampus atau tempat kerja. Kami menyediakan lingkungan yang tenang, aman, dan sangat suportif untuk para pemuda luar biasa.
              </p>
              <button className="btn btn-secondary " style={{ marginTop: '20px' }}>Cek Ketersediaan Kamar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-bg-pattern">
        <div className="container about-grid">
          <div>
            <h2>Mengapa Kost Putra Pangestu?</h2>
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">🏙️</div>
                <div className="feature-text">
                  Dekat PUSAT KEGIATAN:
                  <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px', textTransform: 'none', fontWeight: 'normal', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                    <li>• Mall SKA</li>
                    <li>• Living World</li>
                    <li>• Lotte Mart</li>
                    <li>• Trans Mart</li>
                    <li>• BNI</li>
                    <li>• BRI</li>
                    <li>• CIMB NIAGA</li>
                    <li>• GlobalR</li>
                  </ul>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <span className="feature-text">Anti Mati Lampu (Genset Super)</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <span className="feature-text">Bebas Jam Malam (Akses Kunci 24 Jam)</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👁️</div>
                <span className="feature-text">Area Kost Super Bersih & Terawat</span>
              </div>
            </div>
            <button className="btn btn-primary">Hubungi Pengurus Kost</button>
          </div>
          <div className="collage">
            <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEw_bERNEXr8pEYqjXeoc6NIDkjSDyIIJ8k3nJNgH8HFB0FB81QBrMwRKJ33AZMnKQY9K44n-b0_zvs1HCpYIlH0HNfNPaZhrbU9l70iYMacYGgE1aJ8YYTirXAps7wHaoiiV685Q=s1360-w1360-h1020-rw" alt="Kamar 1" className="collage-img collage-1" />
            <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHDPZPRuoz5wxrQ0BG39mJkFovA8Z4Iv3_E2EpjtB6Qg1WT4CTnyXY3pF7QSSF7mCeeV9fu29NLcSG_yOci6tM5WoADl5zv9Pr27DAUTx4MecT4NGiqY2q4rNiCqMYL9q4TYhEl=s1360-w1360-h1020-rw" alt="Kamar 2" className="collage-img collage-2" />
          </div>
        </div>
      </section>

      {/* Kegiatan Rutin */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center mb-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Kegiatan Rutin Markas
            <div style={{ height: '4px', width: '80px', background: 'var(--primary-color)', marginTop: '8px' }}></div>
          </h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {/* Original Set */}
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEBr4N2a3_z3zNtZalSDje4aAOy5MiSEA31J0WAkWOcgHfbr93hWUT3IxZfIFfrNlFOIhHcGu9_XJzYFfLBsRZSN6wzJTX4sKS9H94QdeWfGvgDTbWJ2CJvWvVtPJaV0JubtDaoSw=s1360-w1360-h1020-rw" alt="Buka Puasa Bersama" />
              <div className="marquee-desc">
                <h4>Buka Puasa Bersama</h4>
                <p>Buka puasa dan ngobrol bareng teman kost di akhir pekan.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFz55l0dAhLXNxABshP3507PuODLvQ9lPXmNc19gGSEtn_vC94kdIeKkFu6RUEouo0s-eB_r6-CA1S5oXkYF5fls4-XNXwqsa5qGSi3qI_szXVwCawI9DzEJgJB3wj_3Z9H6KXL=s1360-w1360-h1020-rw" alt="Diskusi Santai" />
              <div className="marquee-desc">
                <h4>Membangun Persaudaraan</h4>
                <p>Membangun persaudaraan dengan teman kost.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAF0xP18UVRzWgeelLe1DJtV1Ex8r_U1gUXeKmkP313vOa4xsMd08cSqfQb8-U-VYDxiMu4H1Ft1oqQ2Yx7rcRdmCS5v4iN7v3c6Sqz0FxtPatK5Ej4_xO0NVeDAY70kXa3WXFmxaw=s1360-w1360-h1020-rw" alt="Olahraga Ringan" />
              <div className="marquee-desc">
                <h4>Bakaran</h4>
                <p>Bakar semangat bareng teman kost di akhir pekan.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFtP0oj-kfxnhrpGQJDji_kFTOYcUXxmqlg1APxvml4p8pmm01atqFic2qH8yqoH8V_TbRqhXW14KGaZYd6tLA1NCpM1vgFZ2Kdu_2zgyGTe_cvzBVaVdwav90iCA54L8m9PEitYA=s1360-w1360-h1020-rw" alt="Membangun Kehangatan Bersama" />
              <div className="marquee-desc">
                <h4>Makan Malam Bersama</h4>
                <p>Makan malam bersama teman kost di akhir pekan.</p>
              </div>
            </div>

            {/* Duplicated Set for Infinite Loop */}
            {/* Original Set */}
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEBr4N2a3_z3zNtZalSDje4aAOy5MiSEA31J0WAkWOcgHfbr93hWUT3IxZfIFfrNlFOIhHcGu9_XJzYFfLBsRZSN6wzJTX4sKS9H94QdeWfGvgDTbWJ2CJvWvVtPJaV0JubtDaoSw=s1360-w1360-h1020-rw" alt="Buka Puasa Bersama" />
              <div className="marquee-desc">
                <h4>Buka Puasa Bersama</h4>
                <p>Buka puasa dan ngobrol bareng teman kost di akhir pekan.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFz55l0dAhLXNxABshP3507PuODLvQ9lPXmNc19gGSEtn_vC94kdIeKkFu6RUEouo0s-eB_r6-CA1S5oXkYF5fls4-XNXwqsa5qGSi3qI_szXVwCawI9DzEJgJB3wj_3Z9H6KXL=s1360-w1360-h1020-rw" alt="Diskusi Santai" />
              <div className="marquee-desc">
                <h4>Membangun Persaudaraan</h4>
                <p>Membangun persaudaraan dengan teman kost.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAF0xP18UVRzWgeelLe1DJtV1Ex8r_U1gUXeKmkP313vOa4xsMd08cSqfQb8-U-VYDxiMu4H1Ft1oqQ2Yx7rcRdmCS5v4iN7v3c6Sqz0FxtPatK5Ej4_xO0NVeDAY70kXa3WXFmxaw=s1360-w1360-h1020-rw" alt="Olahraga Ringan" />
              <div className="marquee-desc">
                <h4>Bakaran</h4>
                <p>Bakar semangat bareng teman kost di akhir pekan.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFtP0oj-kfxnhrpGQJDji_kFTOYcUXxmqlg1APxvml4p8pmm01atqFic2qH8yqoH8V_TbRqhXW14KGaZYd6tLA1NCpM1vgFZ2Kdu_2zgyGTe_cvzBVaVdwav90iCA54L8m9PEitYA=s1360-w1360-h1020-rw" alt="Membangun Kehangatan Bersama" />
              <div className="marquee-desc">
                <h4>Makan Malam Bersama</h4>
                <p>Makan malam bersama teman kost di akhir pekan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Renter's Review */}
      <section className="section section-bg-dark">
        <div className="container">
          <h2 className="text-center mb-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Laporan dari Penghuni
            <div style={{ height: '4px', width: '80px', background: 'var(--primary-color)', marginTop: '8px' }}></div>
          </h2>
          <div className="review-scroll">
            <div className="review-card">
              <div className="reviewer">
                <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Budi Santoso" className="reviewer-img" />
                <div>
                  <h4 className="font-bold" style={{ color: 'var(--text-main)' }}>Budi Santoso</h4>
                  <p className="text-xs text-primary uppercase">Mahasiswa Teknik</p>
                </div>
              </div>
              <div className="review-quote">"</div>
              <p className="review-text">Kostnya nyaman banget! Fasilitas lengkap, WiFi-nya kencang banget buat mabar dan ngerjain tugas. Serasa punya markas sendiri yang aman dan tenang.</p>
            </div>
            <div className="review-card">
              <div className="reviewer">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Andi Pratama" className="reviewer-img" />
                <div>
                  <h4 className="font-bold" style={{ color: 'var(--text-main)' }}>Andi Pratama</h4>
                  <p className="text-xs text-primary uppercase">Karyawan Swasta</p>
                </div>
              </div>
              <div className="review-quote">"</div>
              <p className="review-text">Akses kunci 24 jam sangat membantu saya yang sering pulang malam. Parkiran luas, motor saya aman banget di sini. Recommended banget buat kost putra!</p>
            </div>
            <div className="review-card">
              <div className="reviewer">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Rizky Febrian" className="reviewer-img" />
                <div>
                  <h4 className="font-bold" style={{ color: 'var(--text-main)' }}>Rizky Febrian</h4>
                  <p className="text-xs text-primary uppercase">Mahasiswa IT</p>
                </div>
              </div>
              <div className="review-quote">"</div>
              <p className="review-text">Kamar mandinya bersih dan airnya lancar terus. Lokasi kost juga sangat strategis dekat jalan raya tapi tetep tenang. Ibu kostnya juga sangat ramah.</p>
            </div>
            <div className="review-card">
              <div className="reviewer">
                <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Dimas Anggara" className="reviewer-img" />
                <div>
                  <h4 className="font-bold" style={{ color: 'var(--text-main)' }}>Dimas Anggara</h4>
                  <p className="text-xs text-primary uppercase">Mahasiswa Hukum</p>
                </div>
              </div>
              <div className="review-quote">"</div>
              <p className="review-text">Harganya masuk akal dengan fasilitas sekelas VIP. Kasurnya empuk, AC dingin. Memang pilihan terbaik buat tempat istirahat setelah pusing di kampus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr' }}>
            {/* Column 1 */}
            <div>
              <div className="logo" style={{ color: 'var(--text-main)' }}>KOST PUTRA <span className="text-accent">PANGESTU</span></div>
              <p className="footer-desc">
                Markas kost putra terbaik di Pekanbaru. Memberikan kenyamanan, keamanan, dan kedamaian seperti pahlawan yang butuh tempat istirahat elit.
              </p>

              <div className="mt-6">
                <h4 className="footer-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Hubungi Markas</h4>
                <ul className="footer-links">
                  <li>
                    <a href="https://wa.me/628127599146" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <span style={{ fontSize: '1.2rem' }}>📱</span> WhatsApp: +62 812-7599-146
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/kostputrapangestupekanbaru" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <span style={{ fontSize: '1.2rem' }}>📷</span> IG: kostputrapangestupekanbaru
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/share/1GvorQSZeB/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <span style={{ fontSize: '1.2rem' }}>📘</span> FB: Rumah Kost Pangestu
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Kost 1.0 */}
            <div>
              <h4 className="footer-title">Lokasi Kost 1.0</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                📍 Rumah Kost Putra Pangestu,<br />
                F9HC+92W, Jl. Kamboja, Simpang Baru,<br />
                Tampan, Pekanbaru City, Riau 28292
              </p>
              <div style={{ width: '100%', height: '180px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <iframe src="https://maps.google.com/maps?q=Rumah+Kost+Putra+Pangestu,+F9HC%2B92W,+Jl.+Kamboja,+Simpang+Baru,+Tampan,+Pekanbaru+City,+Riau+28292&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            {/* Column 3: Kost 2.0 */}
            <div>
              <h4 className="footer-title">Lokasi Kost 2.0</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                📍 Rumah Kost Putra Pangestu 2.0,<br />
                Jl. Tiung Ujung 52 8,<br />
                Pekanbaru
              </p>
              <div style={{ width: '100%', height: '180px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <iframe src="https://maps.google.com/maps?q=Jl+Tiung+Ujung+52+8+Pekanbaru&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2024 Rumah Kost Putra Pangestu. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </footer>
    </main>
  );
}
