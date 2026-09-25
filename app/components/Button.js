// Componente Button: recebe props label e onClick (evento)
function Button({ label, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
