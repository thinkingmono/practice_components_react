
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
      <div className='container bg-primary-subtle p-3 my-4 text-start'>
        <h3>Temas React</h3>
        <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados</li>
          <li>Hooks</li>
          <li>Props</li>
        </ul>
      </div>
      <div className='container bg-success-subtle p-3 my-4 text-start'>
        <h3>Datos del Docente</h3>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Github:</strong> {githubProfile}</p>
      </div>
      <div className='container bg-danger-subtle p-3 my-4 text-start'>
        <h3>Datos del Estudiante</h3>
        <p><strong>Nombre:</strong> {student.name}</p>
        <p><strong>Apellido:</strong> {student.lastName}</p>
        <p><strong>Mobile:</strong> {student.mobile}</p>
        <p><strong>LinkedIn:</strong> <a href={student.linkedInProfile} target='_blank'>{student.linkedInProfile}</a></p>
      </div>
      <div className='container bg-secondary-subtle p-3 my-4 text-start'>
        <h3>Objeto</h3>
        <p>{JSON.stringify(student)}</p>
      </div>
    </>
  )
}

export default MyFirstComponent