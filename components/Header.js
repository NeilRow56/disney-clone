import React, { useState } from 'react';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
	let Links = [
		{ name: 'Home', link: '/' },
		{ name: 'Services', link: '/services' },
		{ name: 'About', link: '/about' },
		{ name: 'Login', link: '/login' },
		{ name: 'Logout', link: '/logout' },
	];

	let [open, setOpen] = useState(false);

	return (
		<div className="shadow-md  w-full fixed top-0 left-0">
			<div className="md:flex items-center justify-between bg-blue-100 py-4 md:px-10 px-7">
				<div className="font-bold text-2x1 cursor-pointer flex items-center font-poppins  text-gray-800">
					<span className="text-3x1 text-indigo-600 mr-1 ">
						<BlurCircularIcon />
					</span>
					Designer
				</div>
				<div
					onClick={() => setOpen(!open)}
					className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden"
				>
					<span className={open ? 'hidden' : ''}>{<MenuIcon />}</span>
					<span className={open ? '' : 'hidden'}>
						{<CloseIcon />}
					</span>
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? 'top-20 ' : 'top-[-490px]'
					}`}
				>
					{Links.map((link) => (
						<li
							key={link.name}
							className="md:ml-8 text-xl md:my-0 my-7"
						>
							<a
								href={link.link}
								className="text-gray-800 hover:text-red-600 duration-300"
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Header;
