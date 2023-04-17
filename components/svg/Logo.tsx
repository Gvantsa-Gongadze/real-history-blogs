import { FC, SVGAttributes } from 'react'

const Logo: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg
			width='190'
			height='30'
			viewBox='0 0 190 30'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<text x='0' y='20' fontSize='18px' fontWeight='600' fill='#533317'>The Real History Blogs</text>
		</svg>
	)
}

export default Logo