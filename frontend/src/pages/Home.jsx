import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    { id: 1, title: "Product 1", price: 999 },
    { id: 2, title: "Product 2", price: 799 },
    { id: 3, title: "Product 3", price: 1299 },
    { id: 4, title: "Product 4", price: 499 },
    { id: 5, title: "Product 5", price: 899 },
    { id: 6, title: "Product 6", price: 699 },
  ];

  return (
    <>
      <Navbar />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
          />
        ))}
      </div>
    </>
  );
}
