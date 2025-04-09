import styles from "./Post.module.css"
import { Comment } from "../comment/Comment";
import { Avatar } from "../avatar/Avatar"
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState,  } from "react";

interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

export interface PostProps {
    author: Author,
    publishedAt: Date,
    content: Content[]
}

export function Post({author, publishedAt, content}: PostProps) {
    const [comments, setComments] = useState<string[]>([])
    const [newCommentText, setNewCommentText] = useState('')
    

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale:ptBR
    })
    
    const publishedDateRelativeFromNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const handleCreateNewComment = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    const handleNewCommentChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        e.target.setCustomValidity('')
        setNewCommentText(e.target.value)
    }


    function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>){
        e.target.setCustomValidity('Campo Obrigatório')
    }

    function deleteComment (commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)

    }

    const isNewCommentEmpty = newCommentText.length === 0
    
    
    return (
        <article className={styles.post}>
            <header className={styles.authorHeader}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="Author Profile Picture"/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeFromNow}</time>
            </header>

            <div className={styles.content}>
               {content.map((line) =>{
                    switch(line.type){
                        case "paragraph":
                            return(<p key={line.content}>{line.content}</p>)
                        case "link":
                            return(<p key={line.content}><a href={line.content} target="_blank">{line.content}</a></p>)
                    }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe seu comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return(
                        <Comment
                        key={comment} 
                        commentContent={comment} 
                        onDeleteComment={deleteComment}/>
                    )
                })}
            </div>
        </article>
    )
}