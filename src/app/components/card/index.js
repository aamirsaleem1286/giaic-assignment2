import React from 'react';

const CartPage = () => {
  const products = [
    {
      id: 1,
      title: 'Product Title 1',
      description: 'This is a brief description of product 1.',
    },
    {
      id: 2,
      title: 'Product Title 2',
      description: 'This is a brief description of product 2.',
    },
    {
      id: 3,
      title: 'Product Title 3',
      description: 'This is a brief description of product 3.',
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 w-[300px]">
            <div className="bg-gray-200 h-32 w-32 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <hr className="my-2" />
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
