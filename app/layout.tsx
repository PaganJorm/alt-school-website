import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Alt School Website",
	description: "Alt School Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-[#FEFEFE] h-screen">
				<div id="main" className="flex flex-col h-screen">
					<div id="titleBar" className="bg-sky-700  text-[#F5F5F5] h-[15%] flex flex-row justify-center space-x-9 text-5xl">
						<Link href="getDocs" className="my-auto">
							News
						</Link>

						<Link href="orientamento" className="my-auto">
							Orientamento
						</Link>
						<Link href="documents" className="">
							Circolari
						</Link>

					</div>
					<div id="content" className="h-[85%] mt-14 text-3xl">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
