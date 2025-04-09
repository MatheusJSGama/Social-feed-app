import styles from "./Wrapper.module.css"
import { Sidebar } from "../sidebar/Sidebar"
import { Posts } from "../posts/Posts"



export function Wrapper(){
    return(
        <div className={styles.wrapper}>
            <Sidebar/>
            <Posts/>
        </div>
    )
}