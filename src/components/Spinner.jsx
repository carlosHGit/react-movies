import { FaSpinner } from "react-icons/fa";
import styles from '../styles/Spinner.module.css'

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <FaSpinner 
      className={styles.spinning}
      size={60}></FaSpinner>
    </div>
  )
}
