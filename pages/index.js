import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Coleretec 2</h1>

        <Link href="/sobre">
            <a>Sobre nós</a>
        </Link>
    </div>)
}

export default Home