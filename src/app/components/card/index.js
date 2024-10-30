import React from 'react';

const CartPage = () => {
  const products = [
    {
      id: 1,
      title: 'Training Courses',
      description: 'The gradual accumulation of information about atomic and small-scale behaviour...',
      bgColor: '#fff',
      circleDiv: "#FFDCD1",
      headingColor: "black",
      lineColor: "#E74040"
    },
    {
      id: 2,
      title: '2,769 Online Courses',
      description: 'The gradual accumulation of information about atomic and small-scale behaviour...',
      bgColor: '#fff',
      circleDiv: "#B9EAA8",
      headingColor: "black",
      lineColor: "#E74040"
    },
    {
      id: 3,
      title: 'Advanced Training Courses',
      description: 'The gradual accumulation of information about atomic and small-scale behaviour...',
      bgColor: '#23A6F0', 
      circleDiv: "#FFF",
      headingColor: "white",
      lineColor: "#fff"
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`shadow-lg rounded-lg p-4 w-[300px]`}
            style={{ backgroundColor: product.bgColor }} 
          >
            <div className="h-32 w-32 mb-4 flex items-center justify-center" style={{ backgroundColor: product.circleDiv }} >
            </div>
            <h2 className="text-xl font-semibold" style={{ color: product.headingColor }}>{product.title}</h2>
            <hr 
              className="my-2" 
              style={{ 
                border: 'none', 
                height: '2px', 
                backgroundColor: product.lineColor, 
                width: '20%', 
              }} 
            />
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
