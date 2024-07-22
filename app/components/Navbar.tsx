"use client"
import SignInButton from "./SignInButton"
import { useSession } from "next-auth/react"

const Navbar = () => {
	const session = useSession()

	console.log(session)

	return (
		<div className="flex bg-gray-300 gap-2 justify-center text-gray-800">
			<div>
				<SignInButton />
			</div>
			<div>{session.data?.user?.name}</div>
		</div>
	)
}

export default Navbar
