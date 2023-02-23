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
    { id:1, titulo: "Roscovo", tempoPreparo: " 25", porcoes: " 02", imagem: "imagem/roscovo.png"},
    { id:2, titulo: "Arroz com pepino", tempoPreparo: " 20", porcoes: " 1", imagem: "imagem/arrozPepino.png"},
    { id:3, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 01.png"},
    { id:4, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 02.png"},
    { id:5, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 03.png"},
    { id:6, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 04.png"},
    { id:7, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 05.png"},
    { id:8, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 06.png"},
    { id:9, titulo: "Ovo com arroz e pepino", tempoPreparo: " 20", porcoes: " 2", imagem: "imagem/ovo 07.png"}
  ]

  return (
    <>
      <Header/>
      <CardList receitas={receias}/>
    </>
  )
}
