import Link from 'next/link'
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    setTimeout(() => {
        router.push('/')
    }, 5000)

    return (
        <>
            <div className="not-found">
                <h1>404</h1>
                <h2>Page Not Found!!!</h2>
                <p>Go back to the <Link href="/"><u>Home Page</u></Link>, or after 5 seconds you will automatically  redirect to the home page.</p>
            </div>
        </>
    );
}

export default NotFound;