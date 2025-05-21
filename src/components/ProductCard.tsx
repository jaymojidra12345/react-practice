const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2" />
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
