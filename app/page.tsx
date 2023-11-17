import { Form } from "./_form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-between p-24">

      <header className="relative">
        <p className="font-script text-xl font-bold absolute -top-6 -left-4 -rotate-6">Fran Bosquet&rsquo;s</p>
        <h1 className='tracking-wider uppercase text-4xl font-semibold'>Info<span className='bg-gradient-to-r from-orange-300 to-teal-200 text-transparent bg-clip-text'>card</span>Studio</h1>
      </header>

      <Form />
    </main>
  )
}
