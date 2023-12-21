import { useEffect } from "react";
import { useState } from "react";
import Article from "../components/article"

const loadDataFromServer = async ()=> {
    const response = await fetch("http://localhost:4000/books");
    console.log(response)
    return response.json()
}

export default async () => {
  const articles = await loadDataFromServer()
  return (<>
      <h1>My blog</h1>
      {articles.map( (p:any) => <Article key={p.id} {...p}/>)}
  </>)
}

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
