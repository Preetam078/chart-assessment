import { FaMoneyBillAlt } from "react-icons/fa";
import styles from "./styles.module.css"

export default function RevenueCard() {
    return (
        <>
            <div className={styles.container}>
                <FaMoneyBillAlt size={90}/>
                <div className={styles.containerInfo}>
                    <span className={styles.label}>827827932</span>
                    <span className={styles.number}>Registered User</span>
                </div>
                <div className={styles.containerInfo}>
                    <span className={styles.label}>827827932</span>
                    <span className={styles.number}>Registered User</span>
                </div>
            </div>
        </>
    )
}