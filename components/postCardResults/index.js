import React from 'react'

function PostCardResults({ postagens }) {

  return (
    <div>
      {postagens.map(postagem => {
        return (
          <div>{postagem.title}</div>
        )
      })}
    </div>
  )
}

export default PostCardResults