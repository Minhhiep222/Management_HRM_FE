import { Link } from "lucide-react";
import LinkAddress from "next/link";
import styles from '@/styles/notFound.module.scss';

function notFoundPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.message}>Oops! The page you are looking for does not exist.</p>
            <LinkAddress href="/overview" className={styles.link}>
                <Link href="/overview">
                    <a className={styles.link}>Go back to Home</a>
                </Link>
                <span>Go back to Home </span>
            </LinkAddress>

        </div>
    );
}

export default notFoundPage;