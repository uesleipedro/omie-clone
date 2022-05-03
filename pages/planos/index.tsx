import CustomButton from '../../compnents/CustomButton'
import styles from './Planos.module.css'

const Planos = () => {
  return (
    <div id='container' className={styles.container} style={{ paddingTop: '75px' }}>

      <h1 style={{ alignSelf: 'start', margin: '20px 0 0 20px' }}>Soluções ideais para todos os tipos de empresa</h1>
      <p style={{ alignSelf: 'start', margin: '10px 0 50px 20px' }}>Nossos planos são cobrados de acordo com o seu enquadramento fiscal e faturamento.</p>

      <div id='tab' className='tab'>
        <div className={styles.tab} id='tab'>
          <button className='tablinks' id='defaultOpen'>Omie.FIT</button>
          <button className='tablinks' id='defaultOpen'>MEI</button>
          <button className='tablinks' id='defaultOpen'>Simples Nacional</button>
          <button className='tablinks' id='defaultOpen'>Lucro Real/Presumido</button>
        </div>
      </div>

      <div className={styles.tabContent}>

        <div className={styles.containerCards}>

          <div className={styles.card}>
            <span className={styles.borderTop}></span>
            <span className={styles.title}>Omie.Complete</span>
            <span>até R$180 mil</span>
            <div className={styles.containerPrice}>
              <span>a partir de</span>
              <span>R$ 199,00</span>
              <span>mensais</span>
            </div>
            <div style={{ width: '80%' }}>
              <CustomButton name="Quero contratar Omie" color="green" />
            </div>
            <p className={styles.descrition}>
              Para empresas que estão crescendo e precisam contar com uma gestão completa e eficiente para continuar evoluindo.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.borderTop}></span>
            <span className={styles.title}>Omie.Complete</span>
            <span>até R$180 mil</span>
            <div className={styles.containerPrice}>
              <span>a partir de</span>
              <span>R$ 199,00</span>
              <span>mensais</span>
            </div>
            <div style={{ width: '80%' }}>
              <CustomButton name="Quero contratar Omie" color="green" />
            </div>
            <p className={styles.descrition}>
              Para empresas que estão crescendo e precisam contar com uma gestão completa e eficiente para continuar evoluindo.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.borderTop}></span>
            <span className={styles.title}>Omie.Complete</span>
            <span>até R$180 mil</span>
            <div className={styles.containerPrice}>
              <span>a partir de</span>
              <span>R$ 199,00</span>
              <span>mensais</span>
            </div>
            <div style={{ width: '80%' }}>
              <CustomButton name="Quero contratar Omie" color="green" />
            </div>
            <p className={styles.descrition}>
              Para empresas que estão crescendo e precisam contar com uma gestão completa e eficiente para continuar evoluindo.
            </p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Planos
