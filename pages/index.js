import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';


export async function getStaticProps() {
  const response = await axios.get('/products');
  const products = response.data.results;

  return {
    props: { products },
  };
}

export default function Home({ products }) {

  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.productList} products={products} />
    </>
  )
}
