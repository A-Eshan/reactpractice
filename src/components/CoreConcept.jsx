

const CoreConcept = ({image, title, description})=>{
  return(
    <div className='border rounded-md p-2'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default CoreConcept