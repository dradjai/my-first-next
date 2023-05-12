
async function getData() { 
  const res = await fetch("https://api.sampleapis.com/beers/ale")
  if(!res.ok) {
    throw new Error('Failed to fetch data from Sample APIs')
  }
  return res.json();
 }

export default async function Page(){
  const data = await getData()
  return(
    <main className="p-8">
      <h1 className="text-emerald-400 text-6xl font-black">The Beers</h1>
      {data.map(beer => (
        <div key={beer.id}>
          <h2>{beer.name}</h2>
        </div>
      ))}
    </main>
  )
}