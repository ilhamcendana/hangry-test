import React from 'react'
import Layout from '../components/Layout/Layout'
import HeaderBanner from '../components/HeaderBanner/HeaderBanner'
import Foods from '../components/Foods/Foods'

const Home = () => (
  <div>
    <Layout>
      <div style={{ width: '100%' }}>
        <HeaderBanner />
        <Foods />
      </div>
    </Layout>
  </div>
)

export default Home


