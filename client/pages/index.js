/** @format */

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import products from "../products.json";
import { fromImageToUrl } from "../utils/urls";
import { twoDecimal } from "../utils/format";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {products.map((product) => (
        <div key={product.name} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  <img src={fromImageToUrl(product.image)} />
                </div>
                <div className={styles.product__Col}>
                  {product.name} {twoDecimal(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
