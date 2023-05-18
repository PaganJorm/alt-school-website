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
					<div id="title">
						<Link href="news" className="">
							News
						</Link>
					</div>
					<div id="content">{children}</div>
				</div>
			</body>
		</html>
	);
}
