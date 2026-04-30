"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Kost1() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
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
          <li><Link href="/" className="nav-link">Beranda</Link></li>
          <li><Link href="/kost-1" className="nav-link active">Kost 1.0</Link></li>
          <li><Link href="/kost-2" className="nav-link">Kost 2.0</Link></li>
        </ul>
        <div className="flex gap-4 items-center">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="https://wa.me/628127599146" target="_blank" rel="noreferrer" className="btn btn-primary">Hubungi Pengurus</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ padding: '160px 0 80px', minHeight: 'auto' }}>
        <div className="container">
          <div className="hero-content" style={{ width: '100%', textAlign: 'center', paddingRight: 0 }}>
            <h1>Kost Putra Pangestu <span className="text-accent">1.0</span></h1>
            <p className="hero-desc" style={{ margin: '1.5rem auto 0' }}>
              Tempat ideal dengan fasilitas lengkap untuk mendukung produktivitas dan kenyamanan beristirahatmu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="section section-bg-dark" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="detail-grid">

            {/* Left Column: Photos & Facilities */}
            <div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--primary-color)', marginBottom: '2rem' }}>
                <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEw_bERNEXr8pEYqjXeoc6NIDkjSDyIIJ8k3nJNgH8HFB0FB81QBrMwRKJ33AZMnKQY9K44n-b0_zvs1HCpYIlH0HNfNPaZhrbU9l70iYMacYGgE1aJ8YYTirXAps7wHaoiiV685Q=s1360-w1360-h1020-rw" alt="Kamar Kost 1.0" style={{ width: '100%', display: 'block' }} />
              </div>

              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 className="mb-4 text-primary" style={{ marginBottom: '1rem' }}>Fasilitas & Isi Kamar</h3>
                <ul className="fasilitas-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', color: 'var(--text-main)', fontSize: '1.1rem' }}>
                  <li className="flex items-center gap-2"><span>🛏️</span> Spring Bed</li>
                  <li className="flex items-center gap-2"><span>🪞</span> Cermin </li>
                  <li className="flex items-center gap-2"><span>☁️</span> Bantal Guling</li>
                  <li className="flex items-center gap-2"><span>📺</span> TV</li>
                  <li className="flex items-center gap-2"><span>🧺</span> Sprei</li>
                  <li className="flex items-center gap-2"><span>🍳</span> Dapur</li>
                  <li className="flex items-center gap-2"><span>❄️</span> AC</li>
                  <li className="flex items-center gap-2"><span>🚪</span> Lemari</li>
                  <li className="flex items-center gap-2"><span>🪑</span> Meja kursi</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="mb-4 text-primary" style={{ marginBottom: '1rem' }}>Harga & Sistem Bayar</h3>
                <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Hubungi pengurus untuk informasi harga terbaik.</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Menerima pembayaran Bulanan dan Tahunan.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Location & Rules */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="card">
                <h3 className="mb-4 text-primary" style={{ marginBottom: '1rem' }}>Lokasi Kost 1.0</h3>
                <p style={{ color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                  📍 Rumah Kost Putra Pangestu,<br />
                  F9HC+92W, Jl. Kamboja, Simpang Baru,<br />
                  Tampan, Pekanbaru City, Riau 28292
                </p>
                <div style={{ width: '100%', height: '300px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Rumah+Kost+Putra+Pangestu,+F9HC%2B92W,+Jl.+Kamboja,+Simpang+Baru,+Tampan,+Pekanbaru+City,+Riau+28292&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>

              <div className="card">
                <h3 className="mb-4 text-primary" style={{ marginBottom: '1rem' }}>Keamanan & Aturan</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-main)' }}>
                  <li className="flex items-center gap-4">
                    <div style={{ width: '40px', height: '40px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', fontSize: '1.2rem' }}>🛡️</div>
                    <div>
                      <h4 style={{ margin: 0 }}>Keamanan 24 Jam</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Dilengkapi sistem CCTV demi keamanan.</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div style={{ width: '40px', height: '40px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', fontSize: '1.2rem' }}>🔑</div>
                    <div>
                      <h4 style={{ margin: 0 }}>Akses Kunci 24 Jam</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Bebas jam malam untuk penghuni beraktivitas.</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div style={{ width: '40px', height: '40px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', fontSize: '1.2rem' }}>🧹</div>
                    <div>
                      <h4 style={{ margin: 0 }}>Kebersihan Bersama</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Menjaga kenyamanan & kebersihan fasilitas umum.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card" style={{ background: 'linear-gradient(135deg, var(--bg-card), var(--bg-secondary))', border: '1px solid var(--accent-color)' }}>
                <h3 className="mb-4 text-accent" style={{ marginBottom: '1rem' }}>Tertarik dengan Kost 1.0?</h3>
                <p style={{ color: 'var(--text-main)', marginBottom: '1.5rem' }}>Jangan sampai kehabisan! Segera hubungi pengurus kost untuk survey atau booking kamar.</p>
                <a href="https://wa.me/628127599146" target="_blank" rel="noreferrer" className="btn btn-secondary w-full" style={{ padding: '16px' }}>
                  📱 Chat via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Galeri Kost */}
      <section className="section section-bg-pattern" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center mb-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Galeri Kost 1.0
            <div style={{ height: '4px', width: '80px', background: 'var(--primary-color)', marginTop: '8px' }}></div>
          </h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {/* Original Set */}
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHFNcIfLFSdRGz__dh1o-njToOGVbrU_lOWjpNnERAE0G2Bf5doVAEtDzT3sl7baUDhZke07mD4xIeqrlqePPBvizQFGJ1E_t4kW14xGgetmhNuCaPR7g6ArkayyX7qrlil_dTn=s1360-w1360-h1020-rw" alt="Tampak Depan" />
              <div className="marquee-desc">
                <h4>Tampak Depan</h4>
                <p>Bangunan kost yang aman dan estetik.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFvL88NEconbYGTnqC1JRKPoJeMhJbQp_NDzdDtQPfmW6nEbqhrUWyuc-5h_iwnbJZ2KBgLytRXDbVzxTtxU7ZjbsAyqwQvI_q38QwKmSKsBEdLMXnyvHRLAuYoSSMu-1qKTEGq=s1360-w1360-h1020-rw" alt="Fasilitas" />
              <div className="marquee-desc">
                <h4>Fasilitas Kost</h4>
                <p>Fasilitas lengkap untuk kebutuhan harianmu.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFNWUWHo4xtLqoGIkGuGvny8aov8y0e6zjxPEKGXrjgaKOuWOxFUa2uH0XkvihjViHsVwJomf9qduxOSFVWG-WNQTnM_fcRVmY788JePgD9OIIr2n9g-LFPSoQ0sUqdk4hvO2_Q1Q=s1360-w1360-h1020-rw" alt="Suasana" />
              <div className="marquee-desc">
                <h4>Suasana Nyaman</h4>
                <p>Area bersih untuk kenyamanan penghuni.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAE7Lii_AfrP3wsWvtVgN0Bcf5yMtEi98ncDmTOinB7UQ22dPR21kkAe6wnuwx5xIc4C1OrzFQqTD-uMrdleUUDZfiYIl6barkebksohrR2Ntqub0b5jfWL0N0zWGy5PCdVRYUw6=s1360-w1360-h1020-rw" alt="Toilet" />
              <div className="marquee-desc">
                <h4>Toilet / Kamar Mandi</h4>
                <p>Kamar mandi yang bersih dan nyaman.</p>
              </div>
            </div>




            {/* Duplicated Set for Infinite Loop */}
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHFNcIfLFSdRGz__dh1o-njToOGVbrU_lOWjpNnERAE0G2Bf5doVAEtDzT3sl7baUDhZke07mD4xIeqrlqePPBvizQFGJ1E_t4kW14xGgetmhNuCaPR7g6ArkayyX7qrlil_dTn=s1360-w1360-h1020-rw" alt="Tampak Depan" />
              <div className="marquee-desc">
                <h4>Tampak Depan</h4>
                <p>Bangunan kost yang aman dan estetik.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFvL88NEconbYGTnqC1JRKPoJeMhJbQp_NDzdDtQPfmW6nEbqhrUWyuc-5h_iwnbJZ2KBgLytRXDbVzxTtxU7ZjbsAyqwQvI_q38QwKmSKsBEdLMXnyvHRLAuYoSSMu-1qKTEGq=s1360-w1360-h1020-rw" alt="Fasilitas" />
              <div className="marquee-desc">
                <h4>Fasilitas Kost</h4>
                <p>Fasilitas lengkap untuk kebutuhan harianmu.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFNWUWHo4xtLqoGIkGuGvny8aov8y0e6zjxPEKGXrjgaKOuWOxFUa2uH0XkvihjViHsVwJomf9qduxOSFVWG-WNQTnM_fcRVmY788JePgD9OIIr2n9g-LFPSoQ0sUqdk4hvO2_Q1Q=s1360-w1360-h1020-rw" alt="Suasana" />
              <div className="marquee-desc">
                <h4>Suasana Nyaman</h4>
                <p>Area bersih untuk kenyamanan penghuni.</p>
              </div>
            </div>
            <div className="marquee-card">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAE7Lii_AfrP3wsWvtVgN0Bcf5yMtEi98ncDmTOinB7UQ22dPR21kkAe6wnuwx5xIc4C1OrzFQqTD-uMrdleUUDZfiYIl6barkebksohrR2Ntqub0b5jfWL0N0zWGy5PCdVRYUw6=s1360-w1360-h1020-rw" alt="Toilet" />
              <div className="marquee-desc">
                <h4>Toilet / Kamar Mandi</h4>
                <p>Kamar mandi yang bersih dan nyaman.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1 */}
            <div>
              <div className="logo" style={{ color: 'var(--text-main)' }}>KOST PUTRA <span className="text-accent">PANGESTU</span></div>
              <p className="footer-desc">
                Tempat kost putra terbaik di Pekanbaru. Memberikan kenyamanan, keamanan, dan kedamaian bagi Anda yang butuh tempat istirahat elit.
              </p>

              <div className="mt-6">
                <h4 className="footer-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Hubungi Kami</h4>
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
