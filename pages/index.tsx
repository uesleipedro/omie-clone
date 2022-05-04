import type { NextPage } from 'next'
import CustomButton from '../compnents/CustomButton'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.textArea}>
          <span className={styles.title}>
            Adquira o mais
            completo sistema de
            gestão empresarial
            do mercado!
          </span>
          <span className={styles.subtitle}>Controle toda a sua empresa com um sistema 100% online.</span>
          <CustomButton name='Fale com um especialista' color='green' />
        </div>
        <div className={styles.imageArea}></div>
      </div>
    </div>
  )
}

export default Home
