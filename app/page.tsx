import {ContactButton} from '@rubriclab/ui'
import {Metadata} from 'next'
import {DEFAULT_META} from '../constants/metadata'

export const metadata: Metadata = {
	...DEFAULT_META
}

export default async function Home() {
	return (
		<div className='align-center flex flex-col items-center justify-center'>
			{/* Section: Hero */}
			<div className='flex max-w-3xl flex-col items-center gap-5 pb-5 pt-10'>
				<h1 className='text-center font-bold'>API Link</h1>
				<p className='text-center text-2xl font-extralight sm:text-6xl md:text-6xl'>
					Get data on-chain in minutes.
				</p>
				<div className=' flex max-w-xl justify-end'>
					<ContactButton body='coming soon' />
				</div>
			</div>
		</div>
	)
}
