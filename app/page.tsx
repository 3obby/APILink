import {ContactButton} from '@rubriclab/ui'
import {Metadata} from 'next'
import {DEFAULT_META} from '../constants/metadata'

import {Inter, Permanent_Marker} from '@next/font/google'

const marker = Permanent_Marker({
	preload: true,
	subsets: ['latin'],
	weight: '400'
})

const inter = Inter({
	preload: true,
	subsets: ['latin'],
	weight: '500'
})

const interThin = Inter({
	preload: true,
	subsets: ['latin'],
	weight: '300'
})

export const metadata: Metadata = {
	...DEFAULT_META
}

export default async function Home() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center'>
			<div className='inline-flex flex-col items-center justify-center'>
				<div className='bg-weak-tan m-2 w-full p-8 text-center'>
					<div
						className={`${marker.className} font-weak-tan text-6xl tracking-tighter`}>
						trustless nyc
					</div>
				</div>
				<div className={`${inter.className} tracking-wider text-orange-500`}>
					Trust-Minimized Data Feeds
				</div>
				<div className={`${inter.className} tracking-wider text-orange-400`}>
					Proof-of-Concept Shop
				</div>

				<div className='bg-pale-olive m-2 w-full items-center p-8'>
					<ContactButton body='all@trustlessNYC.com' />
				</div>
				<div className='flex w-full justify-end'>
					<div
						className={`${interThin.className} text-xs tracking-wider text-orange-200`}>
						2023
					</div>
				</div>
			</div>
		</div>
	)
}
