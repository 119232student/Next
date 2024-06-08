import Link from "next/link";


export default function Home() {
  return (
      <div className="">
        <h1 className="text-center">
          Ewelina Dominiak
        </h1>
        <p className=" text-center font-black">
          Nr albumu: 119232
        </p>

       <div className={"link"}> <Link href="page2">Strona 2</Link></div>
      </div>
  )
      ;
}
