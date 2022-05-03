import Image from 'next/image'
import { RiArrowDownSLine } from 'react-icons/ri'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo-omie.png'
import CustomButton from './CustomButton'

const Navbar = () => {
  return <div className={styles.container}>
    <ul className={styles.list}>
      <Image
        src={logo}
        alt='Omie'
      />
      <div className={styles.dropdownContainer}>
        <span className={styles.borderTop}></span>
        <div className={styles.buttonContainer}>
          <li>Soluções</li>
          <RiArrowDownSLine
            title='Sair'
          />
        </div>
        <div className={styles.dropdown}>
          <div className={styles.category}>
            <span>Para Empreendedores</span>
            <span>Para Contadores</span>
            <span>Destaque</span>
          </div>
        </div>
      </div>
      <div className={styles.dropdownContainer}>
        <span className={styles.borderTop}></span>
        <div className={styles.buttonContainer}>
          <li>Recursos do Sistema</li>
          <RiArrowDownSLine
            title='Sair'
          />
        </div>
      </div>
      <div><span className={styles.borderTop}></span><Link href="/planos"><li>Plano e Preços</li></Link></div>

      <div className={styles.dropdownContainer}>
        <span className={styles.borderTop}></span>
        <div className={styles.buttonContainer}>
          <li>Omie para Você</li>
          <RiArrowDownSLine
            title='Sair'
          />
        </div>
      </div>
    </ul>

    <ul className={styles.list2}>
      <div><CustomButton name='Falar com Especialista' color='green' /></div>
      <div><Link href="/form"><a><CustomButton name='Experimente' color='blue' /></a></Link></div>
      <div><span className={styles.borderTop}></span><li>Entrar</li></div>
    </ul>
  </div>
}

export default Navbar
