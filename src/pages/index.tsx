import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Card from "../components/Card"
import Header from "../components/Header"
import CardList from "../components/CardList"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const receias = [
    { id:1, titulo: "Roscovo", tempoPreparo: "25", porcoes: "2", imagem: "imagem/roscovo.png"},
    { id:2, titulo: "Arroz com pepino", tempoPreparo: "20", porcoes: "1", imagem: "imagem/arrozPepino.png"}
  ]

  return (
    <>
      <Header/>
      <CardList receitas={receias}/>
    </>
  )
}
