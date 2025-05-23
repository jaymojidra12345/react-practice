import { FaTrash, FaEdit } from "react-icons/fa";

const ProductCard = ({
  product,
  onEdit,
  onDelete,
}: {
  product: any;
  onEdit: (product: any) => void;
  onDelete: (id: number) => void;
}) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:-translate-y-2">
      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => onEdit(product)}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-indigo-600 hover:text-indigo-800 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          title="Edit Product"
        >
          <FaEdit className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-red-600 hover:text-red-800 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          title="Delete Product"
        >
          <FaTrash className="w-4 h-4" />
        </button>
      </div>
      
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 sm:h-40 md:h-48 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Product Details */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-2 leading-tight mb-2 group-hover:text-indigo-600 transition-colors duration-200">
            {product.title}
          </h3>
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
          </div>
          
          {/* Favorite/Like Button (Optional Enhancement) */}
          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        
        {/* Quick View Button (Appears on Hover) */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="w-full py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Quick View
          </button>
        </div>
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;