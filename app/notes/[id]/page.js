'use client'
import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../../components/Header'

function DetailsContent() {
  // recupera os dados enviados pelos query params
  const searchParams = useSearchParams()
  const title = searchParams.get('title')
  const content = searchParams.get('content')
  const date = searchParams.get('date')

  // useEffect: atualiza o título da aba do navegador
  useEffect(() => {
    document.title = title || 'Anotação'
  }, [title])

  return (
    <main>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Criado em: {date}</p>

      {/* Link do Next Router para voltar */}
      <Link href="/">Voltar</Link>
    </main>
  )
}

export default function DetailsPage() {
  return (
    <div>
      <Header title="App de Anotações" action="Início" />

      {/* Suspense é exigido pelo Next.js ao usar useSearchParams */}
      <Suspense fallback={<p>Carregando...</p>}>
        <DetailsContent />
      </Suspense>
    </div>
  )
}
