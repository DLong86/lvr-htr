import Link from "next/link";

export default function Home() {
	return (
		<main className="grid place-items-center h-screen text-center">
			{/* put this nav as own component with a navigation icon exposing links */}
			<nav className="">
				<Link href="/">
					<h3 className="text-3xl font-semibold">LOGO</h3>
				</Link>
			</nav>
			<section className="text-6xl font-bold lg:text-7xl">
				<h1>1 COIN</h1>
				<h1>=</h1>
				<h1>1 VOTE</h1>
			</section>
			<div>
				<div className="border-2 border-black py-3 px-10 cursor-pointer">
					<p className="text-xl font-semibold uppercase">connect Wallet</p>
				</div>
			</div>
		</main>
	);
}
