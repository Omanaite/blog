import { useEffect } from "react";
import { useState } from "react";
import Title from "../components/article";

const loadDataFromServer = async () => {
  const response = await fetch("http://localhost:4008/books");
  console.log(response);

  return response.json();
};

export default async () => {
  const articles = await loadDataFromServer();
  return (
    <>
    <section className="grid min-h-screen place-items-center bg-emerald-500 p-16">
  <div className="w-72 rounded-md bg-emerald-300 p-4 pt-0 shadow-lg">
    <header className="flex h-16 items-center justify-between font-bold text-emerald-950">
      <span>Login</span>

      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>

    </header>
    <form className="grid gap-3">

      <input className="h-10 rounded-sm bg-emerald-100/50 px-2 text-emerald-950 placeholder:text-emerald-600/80 focus:outline-none focus:ring focus:ring-emerald-400" type="text" placeholder="Enter your username" />

      <input className="h-10 rounded-sm bg-emerald-100/50 px-2 text-emerald-950 placeholder:text-emerald-600/80 focus:outline-none focus:ring focus:ring-emerald-400" type="password" placeholder="Enter your password" />

      <button className="flex h-10 items-center justify-between rounded-sm bg-emerald-700 px-2 text-emerald-100 transition-colors duration-300 hover:bg-emerald-800 focus:outline-none focus:ring focus:ring-emerald-400" type="button">
        <span>Sign In</span>
        <span>

          <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </span>
      </button>
    </form>
  </div>
</section>


    <div className="flex-col">
    <div className="flex gap-4">
        <div className="w-48">Id</div>
        <div className="w-48">Author</div>
        <div className="w-48">Title</div>
        <div className="w-48">Owner</div>
        <div className="w-48">Language</div>
        <div className="w-48">OTB</div>
        <div className="w-48">Publisher</div>
        <div className="w-48">Year</div>
        {/* <div className="w-48">9</div> */}
        {/* <div className="w-48">10</div> */}
      </div>
      <div className="">
        {articles.map((p: any) => (
          <Title key={p.owner} {...p} />
        ))}
      </div>
    </div>
    </>
  );
};

//  fetch("../api/prueba.json");

// import Article from "../components/article"

// const api = 'https://jsonplaceholder.typicode.com/posts'

// const loadDataFromServer = async ()=> {
//     const response = await fetch(api)
//     return response.json()
// }

// export default async () => {
//   const articles = await loadDataFromServer()
//   return (<>
//       <h1>My blog</h1>
//       {articles.map( (p:any) => <Article key={p.id} {...p}/>)}
//   </>)
// }

// export default function SearchLayout({
//   children, // will be a page or nested layout
// }: {
//   children: React.ReactNode;
// }) {

//   const router = useRouter();
//   const [query, setQuery] = useState('')

//   const onChange = async (e:any) => {
//     const { value } = e.target
//     setQuery(value)

//     if (value.length > 3) {
//       const response = await fetch("../api/prueba.json")
//       const data = await response.json()
//       console.log(response)
//       console.log(data)
//     }
//   }
//   return (
//     <section className="flex-col mt-10 justify-center">
//       {/* Include shared UI here e.g. a header or sidebar */}
//       <div className="max-w-md mx-auto">
//         <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
//           <div className="grid place-items-center h-full w-12 text-gray-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </div>

//           <input
//             className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
//             onChange={onChange}
//             type="text"
//             id="search"
//             value={query}
//             placeholder="Search something.."
//           />
//         </div>
//       </div>
//       <div className="max-w-md mx-auto place-content-center flex mt-5 ">
//       <button className="border-solid border-2 border-sky-500" type="button" onClick={() => router.push("/")}>
//         Volver
//       </button>
//       </div>

//       {children}
//     </section>
//   );
// }
