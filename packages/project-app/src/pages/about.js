import Head from 'next/head';

import { ping } from '@project/core';
import { getFooter } from '@project/core/src/footer';

const IndexPage = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <h1>Hello {ping.prettyPong()} 👋</h1>
            <p>{ping.newUUID()}</p>
            <p>{getFooter()}</p>
        </div>
    );
};

export default IndexPage;
