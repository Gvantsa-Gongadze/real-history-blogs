import { Hamburger, Logo } from '../svg';
import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'

const NavBar = () => {
	const [open, setOpen] = useState(false)

	return (
		<nav className='mx-auto flex justify-between h-[5rem] w-full max-w-[1344px] items-center px-5 sm:px-10'>
			<Link
				href='/home'
				onClick={() => {
					setOpen(false)
				}}
			>
				<Logo />
			</Link>
			<div
				className={clsx(
					'absolute left-0 top-[4.375rem] z-20 h-[calc(100vh-4.375rem)] w-full overflow-y-auto lg:bg-[#E9E9E9] bg-[#c8c86f] p-5 sm:px-10 lg:static lg:ml-10 lg:flex lg:h-auto lg:w-2/5 lg:items-center lg:overflow-y-visible lg:p-0',
					!open && 'hidden'
				)}
			>
				<div className='flex flex-col gap-3 lg:flex-row lg:gap-8'>
					<Link
						className='nav-link-shadow transition-all hover:text-white'
						href='/home'
						onClick={() => {
							setOpen(false)
						}}
					>
						home
					</Link>
				</div>
				<div className='mt-4 lg:mt-0 lg:ml-auto lg:flex lg:items-center lg:gap-5'>
					<div className='mt-4 flex flex-wrap items-center gap-5 lg:mt-0'>
						<Link
							className='nav-link-shadow transition-all hover:text-white'
							href='/blogs'
							onClick={() => {
								setOpen(false)
							}}
						>
							Blogs
						</Link>
					</div>
				</div>
				<div className='mt-4 lg:mt-0 lg:ml-auto lg:flex lg:items-center lg:gap-5'>
					<div className='mt-4 flex flex-wrap items-center gap-5 lg:mt-0'>
						<Link
							className='nav-link-shadow transition-all hover:text-white'
							href='/about-us'
							onClick={() => {
								setOpen(false)
							}}
						>
							About Us
						</Link>
					</div>
				</div>
				<div className='mt-4 lg:mt-0 lg:ml-auto lg:flex lg:items-center lg:gap-5'>
					<div className='mt-4 flex flex-wrap items-center gap-5 lg:mt-0'>
						<Link
							className='nav-link-shadow transition-all hover:text-white'
							href='/contact-us'
							onClick={() => {
								setOpen(false)
							}}
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>

			<button className='ml-auto dark:text-[#D8D8D8] lg:hidden' onClick={() => setOpen((open) => !open)}>
				<Hamburger />
			</button>
		</nav>
	)
}

export default NavBar
