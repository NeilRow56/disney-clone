import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>
					Disney+ | The streaming home of Disney, Pixar, Marvel, Star
					Wars, Nat Geo and Star
				</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				<Header />
			</div>
			<div className=" flex bg-[#040714]  font-body items-center justify-center w-screen h-screen scrollbar-hide ">
				<h1 className=" text-[#f9f9f9]">Hello</h1>
			</div>
		</div>
	);
}
