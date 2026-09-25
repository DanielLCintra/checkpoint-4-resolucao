'use client'
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import InputText from './components/InputText'
import List from './components/List'

export default function Home() {
  // useState: lista de anotações na memória
  const [notes, setNotes] = useState([])

  // useState: campos do formulário
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // manipulação de evento: criar anotação
  function handleCreate() {
    if (title === '' || content === '') return

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
      // data/hora automática
      date: new Date().toLocaleString('pt-BR'),
    }

    setNotes([newNote, ...notes])
    setTitle('')
    setContent('')
  }

  // manipulação de evento: excluir anotação
  function handleDelete(id) {
    const filtered = notes.filter((note) => note.id !== id)
    setNotes(filtered)
  }

  return (
    <div>
      <Header title="App de Anotações" action="Início" />

      <main>
        <h2>Nova Anotação</h2>

        <InputText
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <InputText
          label="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline={true}
        />

        <Button label="Criar Anotação" onClick={handleCreate} />

        <h2>Minhas Anotações</h2>
        <List items={notes} onDelete={handleDelete} />
      </main>
    </div>
  )
}
