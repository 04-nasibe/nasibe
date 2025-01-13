import React from 'react';
import './App.css'; // Stil dosyasını ekleyin
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import profilePic from './assets/WhatsApp Görsel 2025-01-08 saat 14.11.20_adec9e5a.jpg';

function App() {
  return (
    <>
      <h1 className="main-title">Nasibe Kardaş</h1>

      {/* Profil Fotoğrafı */}
      <section className="profile-photo">
        <img src={profilePic} alt="Nasibe Kardaş" className="profile-img" />
      </section>

      {/* Kişisel Bilgiler */}
      <section className="personal-info">
        <h2>Kişisel Bilgiler</h2>
        <ul>
          <li><FaEnvelope /> <strong>E-posta:</strong> nasibe.kardas@kun.edu.tr</li>
          <li><strong>Adres:</strong> Nevşehir, Türkiye</li>
        </ul>
      </section>

      {/* Eğitim Bilgileri */}
      <section className="education">
        <h2>Eğitim Bilgileri</h2>
        <ul>
          <li><strong>Üniversite:</strong> Kapadokya Üniversitesi</li>
          <li><strong>Bölüm:</strong> Bilgisayar Programcılığı</li>
          <li><strong>Mezuniyet Yılı:</strong> 2025</li>
        </ul>
      </section>

      {/* Yetenekler */}
      <section className="skills">
        <h2>Yetenekler</h2>
        <ul>
          <li>İngilizce-Türkçe ve Türkçe-İngilizce Çeviri</li>
          <li>Temel Seviye Python Kod Yazma</li>
          <li>Temel Seviye C# Kod Yazma</li>
          <li>Kitap Yazmak</li>
          <li>Office Programları (Word, Excel, PowerPoint vb.)</li>
        </ul>
      </section>

      {/* Hobiler ve İlgi Alanları */}
      <section className="hobbies">
        <h2>Hobiler ve İlgi Alanları</h2>
        <ul>
          <li>Kitap Yazmak</li>
          <li>Kitap Okumak</li>
          <li>Kitap Alışverişi Yapmak</li>
          <li>Fotoğraf Çekmek</li>
        </ul>
      </section>

      {/* Sertifikalar */}
      <section className="certifications">
        <h2>Sertifikalar</h2>
        <ul>
          <li>Şirket Değerlendirme ve Yatırım Süreçleri</li>
          <li>Girişimcilik Temelleri</li>
          <li>Web Sitesi Kullanılabilirliği</li>
          <li>Dijital Okuryazarlık</li>
          <li>Bilgisayar Operatörlüğü</li>
        </ul>
      </section>

      {/* Sosyal Medya */}
      <section className="social-media">
        <h2>Sosyal Medya</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
          <a href="https://www.instagram.com/mirenabooks__" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
      </section>
    </>
  );
}

export default App;