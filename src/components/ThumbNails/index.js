import './index.css'

const ThumbNails = props => {
  const {ThumbnailDetails, getThumbnailId} = props
  const {id, imageUrl, thumbnailUrl} = ThumbnailDetails
  const thumbnailId = () => {
    getThumbnailId(imageUrl)
  }

  return (
    <li className="thumblist-container">
      <button type="button" className="img-button" onClick={thumbnailId}>
        <img src={thumbnailUrl} alt={`thumbnail ${id}`} className="thumbE" />
      </button>
    </li>
  )
}

export default ThumbNails
