import styles from "./Comment.module.css"
import { Trash, ThumbsUp} from "@phosphor-icons/react"
import { Avatar } from "../avatar/Avatar"
import { useState } from "react"

interface CommentProps {
    commentContent: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({commentContent, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeCount(){
        setLikeCount((state)=>{
            return state + 1
        })
    }

    function handleDeleteComment(){
        onDeleteComment(commentContent)
    }

    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/MatheusJSGama.png" alt="Foto de perfil do usuário que comentou"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.headerCooment}>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Gama</strong>
                            <time title="28 de novembro às 18:55" dateTime="2024-11-28 18:55:20">Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p className={styles.commentText}>{commentContent}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}