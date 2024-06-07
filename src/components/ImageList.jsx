import React from 'react'
import ImageShow from './ImageShow'
import './ImageList.css'

const ImageList = ({images}) => {
  const renderedImages = images.map((image)=> {
    return (
      <div key={image.id}>
        <ImageShow image = {image}/>
      </div>
    )
  })
  return (
    <div>
      <h4>Total Images fetched : {images.length}</h4>
      <div className='image-list'>{renderedImages}</div>
    </div>
  )
}

export default ImageList