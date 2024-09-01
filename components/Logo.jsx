import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/'>
        <Image src='/logo.png' width={60} height={60} priority alt=" " />
    </Link>
  )
}

export default Logo
