import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
  return (
    <div className={styles.roxo}>
      <Link href="/">Home</Link>
      <h1>Estiloso usando CSS Módulo</h1>
    </div>

  ) 
}