import Link from 'next/link'

// Componente ListItem: mostra uma anotação e as ações
function ListItem({ id, title, content, date, onDelete }) {
  // monta a URL com query params para a página de detalhes
  const href =
    `/notes/${id}?title=${encodeURIComponent(title)}` +
    `&content=${encodeURIComponent(content)}` +
    `&date=${encodeURIComponent(date)}`

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Criado em: {date}</p>

      {/* Link do Next Router para ver detalhes */}
      <Link href={href}>Ver detalhes</Link>

      {/* manipulação de evento: excluir */}
      <button type="button" onClick={() => onDelete(id)}>
        Excluir
      </button>
    </div>
  )
}

export default ListItem
