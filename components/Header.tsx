import Link from "next/link";

export default function Header() {
    return (
       
            <header>
            <div className="w-full flex items-center justify-between gap-4 p-4 mx-auto bg-gray-500">
            <p className="text-white">EMP Logo</p>
            <nav>
            <ul className="flex gap-4 text-white">
            <li><Link href={"/department"}>Department</Link></li>
            <li><Link href={"#"}>Employee</Link></li>
            </ul>
            </nav>
            </div>
            </header>
    );
}