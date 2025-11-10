import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ServiceList from './components/ServiceList';
import { products, services } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Nossos Produtos e Serviços
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Explore nossa seleção de produtos de alta qualidade e serviços especializados, 
            pensados com todo o carinho para o bem-estar do seu melhor amigo.
          </p>
        </div>

        <div id="produtos" className="mb-16">
          {categories.map((category) => {
            const categoryProducts = products.filter(
              (p) => p.category === category
            );
            return (
              <ProductList
                key={category}
                title={category}
                products={categoryProducts}
              />
            );
          })}
        </div>

        <div id="servicos">
          <ServiceList services={services} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;