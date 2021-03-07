import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return ( 
    <div className={styles.wrapper}>   
      <Head>
        <title>Tela de login</title>
      </Head>
      
      <div className={styles.container}>
        <img src="icons/logo-moveit.svg" alt="Logo"/>
        
      </div>
    </div>    
  )
}