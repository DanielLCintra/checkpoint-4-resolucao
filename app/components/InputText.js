// Componente InputText: campo de texto reutilizável via props
function InputText({ label, value, onChange, multiline }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      {/* renderização condicional: textarea ou input */}
      {multiline ? (
        <textarea value={value} onChange={onChange} rows={4} />
      ) : (
        <input type="text" value={value} onChange={onChange} />
      )}
    </div>
  )
}

export default InputText
