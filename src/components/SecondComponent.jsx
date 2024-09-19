
const SecondComponent = () => {
  const books = [
    'Harry Potter y la piedra filosofal',
    'Harry Potter y la cámara secreta',
    'Harry Potter y el prisionero de Azkaban',
    'Harry Potter y el caliz de fuego',
    'Harry Potter y la orden del fenix',
    'Harry Potter y el principe mestizo',
    'Harry Potter y las reliquias de la muerte',
  ]
  return (
    <>
      <h1>SecondComponent</h1>
      <div>
        <h1>Saga Harry Potter</h1>
        <ul>
          {books.map((book, index) => {
            return <li key={index}>{book}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default SecondComponent