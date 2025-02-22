import React from "react";
import styles from "./styles.module.css";

export default function Header() {
    return (
        <React.Fragment>
            <h1 className={styles.heading}>Streamify Analytics Dashboard</h1>
        </React.Fragment>
    )
}