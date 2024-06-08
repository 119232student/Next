import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="">
            <h1 className="text-center">
                Kaczuszka
            </h1>
            <div className="center">
            <Image
                alt="kaczka"
                src="/kaczka.jpg"
                width={300}
                height={100}
            /></div>
            <div className={"link"}><Link href="/">Powrót</Link></div>

        </div>
    );
}
