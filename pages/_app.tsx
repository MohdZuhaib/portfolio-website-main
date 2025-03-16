import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import DefaultLayout from '../components/Layouts/DefaultLayout';

import { Provider } from 'react-redux';
import store from '../store/index';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Suspense>
                <Head>
                    <title>Zuhaib | Full-Stack Web Solutions</title>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="title" content="Deedz | Full-Stack Web Solutions" />
                    <meta
                        name="description"
                        content="A full-stack developer proficient in frontend and backend technologies, turning ideas into functional and aesthetically pleasing web applications."
                    />
                    <meta
                        name="keywords"
                        content="HTML, CSS, JavaScript, React, Next, NextJS, ReactJS, Typescript, Bootstrap, Tailwind, MaterialUI, Web Development, Full Stack Development, Frontend Development, Backend Development"
                    />
                    <meta name="image" content="https://i.imgur.com/RrQKmJR.png" />
                    <meta property="og:title" content="Deedz | Full-Stack Web Solutions" />
                    <meta
                        property="og:description"
                        content="A full-stack developer proficient in frontend and backend technologies, turning ideas into functional and aesthetically pleasing web applications."
                    />
                    <meta
                        property="og:keywords"
                        content="HTML, CSS, JavaScript, React, Next, NextJS, ReactJS, Typescript, Bootstrap, Tailwind, MaterialUI, Web Development, Full Stack Development, Frontend Development, Backend Development"
                    />
                    <meta property="og:image" content="https://i.imgur.com/RrQKmJR.png" />
                </Head>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </Suspense>
        </Provider>
    );
}
