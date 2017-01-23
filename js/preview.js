import React from 'react'
import { Link } from 'react-router'

export default React.createClass ({
  onClickPreview(e) {
    this.refs.imgPreview.className = "visible"
  },
  onClickPreviewClose() {
    this.refs.imgPreview.className = "hidden"
  },
  render () {
    return (
     <section>
         <p className="preview-Clicked-Text" onClick={this.onClickPreview}> Click Here to preview our vintage logo. </p>
        <div ref="imgPreview" className="hidden">
         <button onClick={this.onClickPreviewClose} className="preview-Close-Button" > X </button>
         <img className="preview-Image" src="https://s-media-cache-ak0.pinimg.com/originals/f4/fd/be/f4fdbeed1a5a706fe225a5c4a02042ce.jpg"/>
        </div>
     </section>
    )
  }
})
