import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div className='w-fluid mx-auto mt-5'>

  <img src={image.url} className="card-img-top" alt="..."  height="150"/>
  <div className="card-body">
    <p className="card-title text-center mt-3 fw-bold ">{image.title}</p>
</div>
    </div>
  )
}

export default ImageCard