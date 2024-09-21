
const FourthComponent = () => {

  const handleClicked = (name) => {
    alert(`Haz hecho click en el botón ${name}`);
  }

  const handleDoubleClck = () => {
    alert(`Haz hecho doble click`);
  }

  const handleMouseEnter = () => {
    alert('Haz entrado a la caja. Mouse Enter');
  }

  const handleMouseLeave = () => {
    alert('Haz dejado a la caja. Mouse Enter');
  }

  const handleMouse = (action) => {
    alert(`Has ${action} la caja`);
  }

  const handleInsideInput = () => {
    console.log('Estas dentro del input');
  }

  const handleOutsideInput = () => {
    console.log('Estas fuera del input');
  }

  return (
    <div>
      <h1>FourComponent</h1>
      <div className="mt-4">
        <button type="button" className="btn btn-danger" onClick={() => alert('Hola, soy un evento onClick')}>Haz Click</button>
      </div>
      <div className="mt-4">
        <button type="button" className="btn btn-success" onClick={() => handleClicked('Alejandro')}>Aquí También Haz Click</button>
      </div>
      <div className="mt-4">
        <button type="button" className="btn btn-info" onDoubleClick={handleDoubleClck}>Haz Click Doble Click</button>
      </div>
      <div id="box1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="mt-4">
        <p>Mouse Over</p>
      </div>
      <div id="box2" onMouseEnter={() => handleMouse('entrada a')} onMouseLeave={() => handleMouse('salida a')} className="mt-4"></div>
      <div className="mt-4">
        <input type="text" onFocus={handleInsideInput} onBlur={handleOutsideInput} />
      </div>
    </div>
  )
}

export default FourthComponent