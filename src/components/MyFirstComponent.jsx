
const MyFirstComponent = () => {

  const name = 'Ines Maria Oliveros';

  const githubProfile = 'https://github.com/thinkingmono';

  const student = {
    name: 'Alejandro',
    lastName: 'Garcia',
    mobile: '3111111111',
    linkedInProfile: 'https://www.linkedin.com/in/alejandro-garcia-webdev/'
  }

  return (
    <>
      <div>MyFirstComponent</div>
      <div className='container mt-4'>
        <h1>Temas React</h1>
        <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados</li>
          <li>Hooks</li>
          <li>Props</li>
        </ul>
      </div>
      <div className='container py-2'>
        <h1>Datos del Docente</h1>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Github:</strong> {githubProfile}</p>
      </div>
      <div className='container py-2'>
        <h1>Datos del Estudiante</h1>
        <p><strong>Nombre:</strong> {student.name}</p>
        <p><strong>Apellido:</strong> {student.lastName}</p>
        <p><strong>Mobile:</strong> {student.mobile}</p>
        <p><strong>LinkedIn:</strong> <a href={student.linkedInProfile} target='_blank'>{student.linkedInProfile}</a></p>
      </div>
      <div className='container mt-2 pt-2'>
        <h1>Objeto</h1>
        <pre>{JSON.stringify(student)}</pre>
      </div>
    </>
  )
}

export default MyFirstComponent