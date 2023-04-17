import { FC, SVGAttributes } from 'react'

const Logo: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg
			width='180'
			height='30'
			viewBox='0 0 180 30'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<text x="0" y="15" fontSize='18px' fill="#d2945e">The Real History Blogs</text>
		</svg>
	)
}

export default Logo