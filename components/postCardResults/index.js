import React from 'react'

function PostCardResults({ postagens }) {

  return (
    <div>
      {postagens.map((postagem, index) => {
        return (
          <div key={index}>{postagem.title}</div>
        )
      })}
    </div>
  )
}

export default PostCardResults