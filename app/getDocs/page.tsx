'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link"

export default function DocumentList() {
	const [documents, setDocuments] = useState([]);
	const [titles, setTitle] = useState([])
	const [content, setContent] = useState([])

	// This method fetches the documents from the database.
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
				}
			}


			console.log(content)

			setDocuments(documents);
		}

		getDocuments();

		return;
	}, [documents.length]);

	// This method will map out the documents on the table
	function documentList() {
		return titles.map((value, index) => {
			const contents = content[index];
			return (
				<div>
					<p>{value}</p>
					<p>{contents}</p>
				</div>
			);
		});
	}

	// This following section will display the table with the documents of individuals.
	return (
		<div>
			<h3>Document List</h3>
			{documentList()}
		</div>
	);
}
