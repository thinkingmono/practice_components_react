import PropTypes from "prop-types";

const ThirdComponent = (props) => {
  const { name, lastname } = props;
  return (
    <div>
      <h1>Comunicación entre componentes</h1>
      <ul>
        <li>{name}</li>
        <li>{lastname}</li>
      </ul>
    </div>
  )
}

export default ThirdComponent

ThirdComponent.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string
}