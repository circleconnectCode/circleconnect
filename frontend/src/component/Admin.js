import React from 'react'
import User from './User'
import { useNavigate } from 'react-router-dom';
import './Admin.css'
const Admin = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };
  const handleClicksales = (id) => {
    navigate(`/Sales`);
  };
  const products = [
    { id: 1, name: 'منتج 1', price: '100$', image: 'link-to-image-1' },
    { id: 2, name: 'منتج 2', price: '200$', image: 'link-to-image-2' },
    { id: 3, name: 'منتج 3', price: '300$', image: 'link-to-image-3' },
    { id: 4, name: 'منتج 4', price: '400$', image: 'link-to-image-4' },
  ];
  
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="language-switcher">تغيير اللغة</div>
        <div className="logo"><img width={150} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW1q974V4ICluaQFyaWhXBzWTPYz1v-vGCAOp2nOrSQ&s'/></div>
      </header>
      <main className="products-container">
        <div className="product">
          <img src="path/to/product-image.jpg" alt="Product 1" />
          <h2>اسم المنتج 1</h2>
          <p>السعر: $100</p>
        </div>
        <div className="product">
          <img src="path/to/product-image.jpg" alt="Product 2" />
          <h2>اسم المنتج 2</h2>
          <p>السعر: $150</p>
        </div>
        <div className="product">
          <img src="path/to/product-image.jpg" alt="Product 3" />
          <h2>اسم المنتج 3</h2>
          <p>السعر: $200</p>
        </div>
        {/* يمكن إضافة المزيد من المنتجات هنا */}
      </main>
    </div>
  );


}

export default Admin