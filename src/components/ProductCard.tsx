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
    <div className=" p-4  transition relative">
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => onEdit(product)}
          className="text-blue-600 hover:text-blue-800"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-600 hover:text-red-800"
        >
          <FaTrash />
        </button>
      </div>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2 pt-3 "
      />
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
