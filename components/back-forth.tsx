"use client"
import { useRouter } from 'next/navigation'

export default function BackForth() {
  const router = useRouter()

  return (
    <div className='fixed top-0 z-50 mt-5 gap-x-3 flex ml-2'>
    <button type="button" onClick={() => router.back()} className='bg-gray-800 p-2 rounded-full hover:scale-105'>
        {"<-"}
    </button>
    <button type="button" onClick={() => router.push("/")} className='bg-gray-800 p-2 rounded-full hover:scale-105'>
        {"🏠"}
    </button>
    <button type="button" onClick={() => router.forward()} className='bg-gray-800 p-2 rounded-full hover:scale-105'>
        {"->"}
    </button></div>
  )
}