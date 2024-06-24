import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className="flex items-center h-screen w-screen flex-col justify-center gap-4">
        <h3 className="font-[500] text-[24px] text-red-500">Page not found</h3>
        <Link href="/" className="rounded p-4 border border-slate-500
        shadow bg-blue-400 ">Go back to Home page</Link>
        
        
        </div>
  )
}
