export default function Login() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="m-16 text-6xl">Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="example@gmail.com" id="email" className="bg-black m-4 p-4"/><br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter password" id="password" className="bg-black m-4 p-4"/><br />
                <input type="checkbox" id="terms" className="m-4 h-5 w-5"/>
                <label htmlFor="terms">I agree to the terms and conditions</label><br />
                <button type="submit" className="text-2xl mt-10 p-10">Login</button>
            </form>
        </div>
    )
}