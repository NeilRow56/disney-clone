import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import StarIcon from '@mui/icons-material/Star';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();

	let Links = [
		{ name: 'Home', link: '/', icon: <HomeIcon /> },
		{ name: 'Search', link: '/search', icon: <SearchIcon /> },
		{ name: 'Watchlist', link: '/watchlist', icon: <StarIcon /> },
		{ name: 'Originals', link: '/originals', icon: <LiveTvIcon /> },
		{ name: 'Movies', link: '/movies', icon: <MovieIcon /> },
		{ name: 'Series', link: '/series', icon: <VideoLibraryIcon /> },
	];

	let [open, setOpen] = useState(false);

	return (
		<div className="shadow-md h-[72px] pt-3  w-full fixed top-0 left-0 z-[1000] bg-[#040714]">
			<div className="md:flex items-center justify-between   md:px-10 px-7">
				<div className="font-bold text-2x1 cursor-pointer text-white hover:text-red-600 flex items-center font-poppins  ">
					<span className="text-3x1 text-indigo-600 mr-1 ">
						<BlurCircularIcon />
					</span>
					<img
						src="/images/logo.svg"
						alt=""
						width={80}
						height={80}
						className="pointer"
					/>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden"
				>
					<span className={open ? 'hidden' : ''}>
						{<MenuIcon className="text-white" />}
					</span>
					<span className={open ? '' : 'hidden'}>
						{<CloseIcon className="text-white" />}
					</span>
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#040714] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? 'top-20 ' : 'top-[-490px]'
					}`}
				>
					{Links.map((link) => (
						<li
							key={link.name}
							href={link.link}
							className="md:ml-8 text-xl md:my-0 my-7"
						>
							<a
								className={`cursor-pointer ${
									router.pathname === link.link
										? 'text-red-600 hover:text-blue-500'
										: 'text-white hover:text-blue-500'
								}`}
							>
								<div className="flex space-x-2">
									<div className="flex  pt-[2px]">
										{' '}
										{link.icon}
									</div>{' '}
									<div className="flex">{link.name}</div>
								</div>
							</a>
						</li>
					))}
					<button className=" text-white md:ml-2 uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200">
						Login
					</button>
				</ul>
			</div>
		</div>
	);
}

export default Header;
