import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

type Props = {};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const { params } = context;
    const isValid = false; // This should be your validation logic

    if (!isValid) {
        return {
            notFound: true,
        };
    }

    return {
        props: {}, // your props here
    };
};

const YourPage: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link href="/">Go back to Home</Link>
        </div>
    );
};

export default YourPage;
