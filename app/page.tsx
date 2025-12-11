import Link from "next/link";

export default function Page() {
  return(
    <>
    <h1>Hello, Next.js!</h1>
  <p>First day learning next.js</p>
   <img src="https://imgs.search.brave.com/nPwAOqz6ZRVuRNZlccb8s9XPK6wyjWc0NEUDpGAzaFQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vZnJvbnQv/aW1nL2xhbmRpbmdz/L2hvbWVwYWdlLzYx/ODY5MDY2LmpwZw" alt="simpel img" />
   <Link href="/Users">clickForUser</Link>
  </>
  ) 
}