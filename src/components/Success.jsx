import { Link } from "react-router";

export default function Success() {
    return (
        <div>
            <h1 className="text-6xl">You signed in succesfully</h1>
            <Link to="/">
                <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded m-8">Return</button>
            </Link>
        </div>
    );
}