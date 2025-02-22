import React from "react";
import { FaUserAlt } from "react-icons/fa";
import styles from "./styles.module.css"

export default function MetricCard() {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <FaUserAlt size={50}/>
                <div className={styles.containerInfo}>
                    <span className={styles.label}>827827932</span>
                    <span className={styles.number}>Registered User</span>
                </div>
            </div>
        </React.Fragment>
    )
}