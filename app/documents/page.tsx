'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link"


export default function DocumentList() {
	const [documents, setDocuments] = useState([]);
	const [titles, setTitle] = useState([]);
	const [content, setContent] = useState([]);
	const [link, setLink] = useState([]);

	useEffect(() => {
		async function getDocuments() {
			const response = await fetch(`http://localhost:5050/document`);

			if (!response.ok) {
				const message = `An error occurred: ${response.statusText}`;
				window.alert(message);
				return;
			}

			const documents = await response.json();

			for (var key in documents) {
				if (documents.hasOwnProperty(key)) {
					titles.push(documents[key].id)
					content.push(documents[key].title)
					link.push(documents[key].links)

				}
			}
			console.log(content)

			setDocuments(documents);
		}

		getDocuments();

		return;
	}, [documents.length]);

	function documentList() {
		return titles.map((value, index) => {
			const contents = content[index];
			const links = link[index];
			return (
				<div className="pb-32">
					<div>
						<p className="text-center">{value}</p>
						<p className="text-center">{contents}</p>
					</div>
					<div>
						
					</div>
				</div>
			);
		});
	}

	return (
		<div id='container'>
			<div id='title' className='bg-cyan-600 '>
				<h1 className="text-4xl text-center">Circolari</h1>
			</div>
			<div id='content'>
				<div className='flex'>
					<div className='flex-1 mx-56 mb-2 relative'>
						<p>CIRCOLARI - IN PUBBLICAZIONE</p>
					</div>
					<div className='flex-1 text-right mx-56'>
						<p>ULTIME 100 CIRCOLARI PUBBLICATE</p>
					</div>
				</div>
				<div id='docs' className="flex" >
					<br />
					<div className='flex flex-col'>
						{documentList()}
					</div>


				</div>

			</div>
		</div>
	)
}
//w-[32%]