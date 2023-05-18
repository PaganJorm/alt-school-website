'use client';
import Image from 'next/image'
import { constrainedMemory } from 'process';



export default function Home() {
	return (
		<div id='container'>
			<div id='title' className='bg-cyan-600 '>
				<h1 className="text-4xl text-center">Circolari</h1>
			</div>
			<div id='content'>
				<div className='flex'>
					<div className='flex-1 mx-56'>
						<p>CIRCOLARI - IN PUBBLICAZIONE</p>
					</div>
					<div className='flex-1 text-right mx-56'>
						<p>ULTIME 100 CIRCOLARI PUBBLICATE</p>
					</div>
				</div>
				<div id='docs' className='flex flex-wrap justify-between'>


				</div>

			</div>
		</div>
	)
}
//w-[32%]


function createDocsLayouts() {
	const div = document.createElement('div');

	const h3 = document.createElement('h3');
	const newContent = document.createTextNode('Mongodb future content');

	h3.appendChild(newContent);

	div.appendChild(h3);

	const div_ = document.createElement('div');
	div_.style.width = '32%'

	const p = document.createElement('p');
	const newContent_ = 




}