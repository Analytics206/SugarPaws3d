import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModelViewer from '../components/ModelViewer';
import ProductCard from '../components/ProductCard';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to SugarPaws 3D!</h1>
                <p>Your one-stop shop for fun 3D models and toys.</p>
                <ModelViewer />
                <section>
                    <h2>Featured Products</h2>
                    <div className="product-list">
                        {/* Example ProductCard components */}
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;