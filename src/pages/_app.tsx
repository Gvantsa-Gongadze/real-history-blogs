import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { Page } from '../../components/templates'
import { APP_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_URL, TWITTER_HANDLE } from '../../lib/constants';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
  const getLayout = (Component as any).getLayout || ((page: ReactNode) => <Page>{page}</Page>)

  return (
    <div>
      <Head>
				<title>{SITE_TITLE}</title>
			</Head>
      <DefaultSeo
				title={APP_NAME}
				description={SITE_DESCRIPTION}
				openGraph={{
					type: 'website',
					url: SITE_URL,
					site_name: APP_NAME,
				}}
				twitter={{
					handle: TWITTER_HANDLE,
					site: TWITTER_HANDLE,
					cardType: 'summary_large_image',
				}}
			/>
			<div>
      	{getLayout(<Component key={router.asPath} {...pageProps} />)}
			</div>
    </div>
  )  

}
