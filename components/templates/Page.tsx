import { NavBar } from '../elements'
// import { Footer, NavBar } from '../elements'
import { FC, ReactNode } from 'react'

interface PageProps {
	children: ReactNode
	disableFooterMargin?: boolean
}

const Page: FC<PageProps> = ({ children, disableFooterMargin }) => {

	console.log(children);
	return (
		<div className='flex min-h-screen flex-col'>
			<NavBar />
			<main className='flex flex-grow flex-col'>{children}</main>
			{/* <Footer disableMargin={disableFooterMargin} /> */}
		</div>
	)
}

export default Page