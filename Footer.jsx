// src/components/Footer.jsx

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        {/* Adresse */}
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-blue-500 mt-1" />
            <span>Centre urbain Nord - La Soukra - Sousse</span>
          </div>
          <div className="flex items-start gap-2">
            <FaEnvelope className="text-blue-500 mt-1" />
            <span>scoop.online@tunelec.com.tn</span>
          </div>
          <div className="flex items-start gap-2">
            <FaPhoneAlt className="text-blue-500 mt-1" />
            <span>70 247 841 - 27 307 524</span>
          </div>
        </div>

        {/* Catégories */}
        <div>
          <h4 className="font-semibold mb-2">CATEGORY</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Ordinateurs Portables</a></li>
            <li><a href="#" className="hover:underline">PC Portable professionnel</a></li>
            <li><a href="#" className="hover:underline">Produits Apple</a></li>
            <li><a href="#" className="hover:underline">Écrans Gaming</a></li>
            <li><a href="#" className="hover:underline">Écrans professionnels</a></li>
            <li><a href="#" className="hover:underline">Consoles et jeux</a></li>
          </ul>
        </div>

        {/* Votre compte */}
        <div>
          <h4 className="font-semibold mb-2">VOTRE COMPTE</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Informations personnelles</a></li>
            <li><a href="#" className="hover:underline">Commandes</a></li>
            <li><a href="#" className="hover:underline">Avoirs</a></li>
            <li><a href="#" className="hover:underline">Adresses</a></li>
            <li><a href="#" className="hover:underline">Bons de réduction</a></li>
            <li><a href="#" className="hover:underline">Mes listes de souhaits</a></li>
            <li><a href="#" className="hover:underline">Mes alertes</a></li>
          </ul>
        </div>

        {/* Liens utiles */}
        <div>
          <h4 className="font-semibold mb-2">LIENS UTILES</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Mentions légales</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">Stores</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
