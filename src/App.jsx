import React, { useState } from 'react';

const ProductCard = () => {
  // State untuk melacak apakah produk sudah ditambahkan ke keranjang
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    // Mengembalikan tombol ke keadaan semula setelah 2 detik
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-sm w-full rounded-xl overflow-hidden shadow-lg bg-white p-5 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
        
        {/* Area Gambar */}
        <div className="relative">
          <img 
            className="w-full h-56 object-cover rounded-lg" 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Sepatu Lari Merah" 
          />
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Diskon 20%
          </span>
        </div>

        {/* Area Detail Produk */}
        <div className="pt-5 pb-2">
          <h2 className="font-bold text-2xl mb-1 text-gray-800">Nike Epic React</h2>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            Sepatu lari super ringan dengan bantalan responsif. Cocok untuk lari jarak jauh maupun penggunaan sehari-hari.
          </p>
          
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-sm text-gray-400 line-through">Rp 2.500.000</p>
              <p className="text-xl font-bold text-gray-900">Rp 2.000.000</p>
            </div>
            
            {/* Tombol Interaktif */}
            <button
              onClick={handleAddToCart}
              className={`px-5 py-2.5 rounded-lg text-white font-semibold transition-all duration-300 flex items-center gap-2 ${
                isAdded 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
              }`}
            >
              {isAdded ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Ditambahkan
                </>
              ) : (
                'Tambah'
              )}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;