import styles  from "./button.module.css"

export function Button({children}){
    return (
        <button className={styles.btn}>{children}</button>
    )
}