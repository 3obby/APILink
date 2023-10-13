import {ContactButton, Header} from '@rubriclab/ui'
import {Metadata} from 'next'
import {DEFAULT_META} from '../constants/metadata'

export const metadata: Metadata = {
	...DEFAULT_META
}

export default async function Home() {
	return (
		<div className='align-center flex flex-col items-center justify-center'>
			{/* Section: Hero */}
			<div className='flex max-w-3xl flex-col gap-3 pb-5 pt-10'>
				<Header text={'Chainlink APIs, Easy'} />
				<p className='text-2xl font-extralight sm:text-6xl md:text-6xl'>
					Get data on-chain in minutes.
				</p>
			</div>

			{/* Section */}
			<div className='flex min-h-screen flex-col items-end gap-3 pb-5'>
				<div className='flex max-w-xl flex-col gap-10'>
					<div className='flex justify-end'>
						<ContactButton body='hello@rubriclab.com' />
					</div>
				</div>
			</div>
		</div>
	)
}
