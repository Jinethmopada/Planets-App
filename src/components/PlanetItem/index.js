import './index.css'

const PlanetItem = props => {
  const {planetItemDetails} = props
  const {name, imageUrl, description} = planetItemDetails
  return (
    <div className="bg-container">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />

      <h1 className="name">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
