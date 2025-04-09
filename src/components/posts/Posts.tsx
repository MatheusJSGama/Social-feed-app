import { Post } from "./Post"
import { PostProps } from "./Post"

interface Post extends PostProps{
  id: number
}

const posts: Post[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/MatheusJSGama.png',
        name: 'Matheus Gama',
        role: 'Web developer',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'https://github.com/MatheusJSGama' },
      ],
      publishedAt: new Date('2024-12-03 19:04:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/kevinuehara.png',
        name: 'Kevin Toshihiro Uehara',
        role: 'Staff Frontend Engineer',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'https://github.com/kevinuehara' },
      ],
      publishedAt: new Date('2024-12-01 19:04:00'),
    }
  
  ]

export function Posts(){
    return(
            <main>
                {posts.map(post =>{
                    return(
                        <Post key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    )
                })}
            </main>
    )
}