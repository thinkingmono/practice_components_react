
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
        <ul>
          {books.length >= 1 ? books.map((book, index) => {
            return <li key={index}>{book}</li>
          }) : <h2>There are no books available</h2>}
        </ul>
      </div>
    </>
  )
}

export default SecondComponent