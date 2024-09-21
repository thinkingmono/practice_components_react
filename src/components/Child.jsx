import PropTypes from "prop-types"

const Child = (props) => {

  const handleChangeName = () => {
    const newName = prompt('Ingresa un nuevo nombre');
    if (newName) {
      props.setName(newName);
    }
  }

  return (
    <div>
      <h1>Child</h1>
      <p>Nombre actual: {props.name}</p>
      <button type="button" className="btn btn-primary" onClick={handleChangeName}>cambiar nombre</button>
    </div>
  )
}

export default Child

Child.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func
}