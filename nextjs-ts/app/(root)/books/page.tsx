const Page = async () =>{
    const response  = await fetch("http://localhost:3000/api/dummyBooksDB");
    const books = await response.json()
    return(
        <main>
            <code>{JSON.stringify(books,null,2)}</code>
        </main>
    )
}

export default Page;