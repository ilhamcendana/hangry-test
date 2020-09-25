import React from 'react';
import Navbar from '../Navbar/Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Hangry! - Multi-brand delivery-only restaurants serving delicious food</title>
                <meta name="title" content="Hangry! - Multi-brand delivery-only restaurants serving delicious food" />
                <meta name="description" content="Satisfy your cravings here! Find out our latest promotion and events here!" />
                <meta name="keywords" content="Hangry, Hangry Group, Hangry Indonesia, Cloud Kitchen, FnB, Food and Beverages, Nasi Ayam, Bude Sari, Ayam Geprek, Ayam Koplo, Kopi Susu, Dari Pada, Gyudon, Beef Bowl, San Gyu" />
                <meta name="author" content="Hangry" />
                <meta name="robots" content="index, follow" />
            </Head>

            <Navbar />
            <main style={{ paddingTop: 50 }}>
                {children}
            </main>
        </div>
    );
}

export default Layout;