import style from "../css/ProfileMenu.module.css";
import { NavLink } from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";
import LoginModal from "../components/Login";
import SignUpModal from "../components/SignUp";

const ProfileMenu = ({ location }) => {
	const { isLoggedIn, handleLogout } = useContext(UserContext);
	const [loginModalOpen, setLoginModalOpen] = useState(false);
	const [signupModalOpen, setSignupModalOpen] = useState(false);

	const url = location.state?.url ?? location.pathname;

	const handleContactLink = () => {
		window.scrollTo(0, document.body.scrollHeight);
	};

	const loggedInMenu = (
		<div className={style.logged_in_menu}>
			<div className={style.order_link_wrapper}>
				<NavLink exact to="profile" className={style.a}>
					My Profile
				</NavLink>

				<br />

				<NavLink exact to="#" className={style.a}>
					My Orders
				</NavLink>

				<br />
				<NavLink
					exact
					to="/about"
					onClick={handleContactLink}
					className={style.a}
				>
					Help & Contact
				</NavLink>
			</div>
			<hr className={style.hr} />
			<div className={style.button_logout_wrapper}>
				<button onClick={handleLogout} className={style.button_logout}>
					Log out
				</button>
			</div>
		</div>
	);

	const loggedOutMenu = (
		<div className={style.logged_out_menu}>
			<div className={style.button_login_wrapper}>
				<button
					onClick={() => setLoginModalOpen(true)}
					className={style.button_login}
				>
					Log in
				</button>
			</div>
			<hr className={style.hr} />
			<div className={style.registration_wrapper}>
				<p className={style.registration_text}>
					<NavLink
						className={style.a}
						exact
						to="#"
						onClick={() => setSignupModalOpen(true)}
					>
						<span className={style.register}>Not a member?</span> Register now
					</NavLink>
				</p>
			</div>
		</div>
	);

	return (
		<div className={style.profile_menu_wrapper}>
			<LoginModal url={url} open={loginModalOpen} setOpen={setLoginModalOpen} />
			<SignUpModal open={signupModalOpen} setOpen={setSignupModalOpen} />
			<div className={style.profile_menu_content}>
				{isLoggedIn() ? (
					<div className={style.profile_menu_content}>{loggedInMenu}</div>
				) : (
					<div className={style.profile_menu_content}>{loggedOutMenu}</div>
				)}
			</div>
		</div>
	);
};

export default ProfileMenu;
