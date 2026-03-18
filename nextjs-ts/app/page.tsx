import Hello from '@/components/hello';

const Home = () =>{
  console.log('home')
  return (
   <main>
     <div className="underline">Welcom to next js</div>
     <Hello/>
   </main>
  )
}

export default Home