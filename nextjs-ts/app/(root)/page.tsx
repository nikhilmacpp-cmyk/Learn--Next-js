import Hello from '@/components/hello';

const Home = async () => {
  const getAlbum = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response) {
      throw new Error('Failed to fetch album')
    }
    return response.json();
  }
  const albums = await getAlbum();
  return (
    <main className="bg-gray-100 min-h-screen p-6">
      <main className="bg-gray-100 min-h-screen p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {albums.map((album: { id: number; title: string }) => (
            <div
              key={album.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <h3 className="text-lg font-bold mb-2">{album.title}</h3>
              <p className="text-gray-600">Album ID: {album.id}</p>
            </div>
          ))}
        </div>
      </main>
      <Hello />
    </main>
  )
}

export default Home