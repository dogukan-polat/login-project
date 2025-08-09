import { useEffect, useState } from "react";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        terms: false
    });
    const [error, setError] = useState({
        email: false,
        password: false
    });
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (validateEmail(form.email) && validatePassword(form.password) && form.terms) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [form]);

    const validatePassword = (password) => {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,25}$/;
        return regex.test(password);
    }

    
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: type === "checkbox" ? checked : value
            }
        });
        if (name === "email") {
            if (validateEmail(value)) {
                setError(prevError => {
                    return {
                        ...prevError,
                        email: false
                    }
                });
            } else {
                setError(prevError => {
                    return {
                        ...prevError,
                        email: true
                    }
                });
            }
        }
        if (name === "password") {
            if (validatePassword(value)) {
                setError(prevError => {
                    return {
                        ...prevError,
                        password: false
                    }
                });
            } else {
                setError(prevError => {
                    return {
                        ...prevError,
                        password: true
                    }
                });
            }
        }
    }

    

    return (
        <div className="flex flex-col items-center">
            <h1 className="m-16 text-6xl">Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                placeholder="example@gmail.com" 
                id="email" 
                name="email"
                onChange={handleChange}
                value={form.email}
                className="bg-black m-4 p-4"/><br />
                {error.email && <p className="text-red-900 font-black text-xl">Enter a valid email</p>}

                <label htmlFor="password">Password</label>
                <input type="password" 
                placeholder="Enter password" 
                id="password" 
                name="password"
                onChange={handleChange}
                value={form.password}
                className="bg-black m-4 p-4"/><br />
                {error.password && <p className="text-red-900 font-black text-xl w-sm m-auto">Password should contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character</p>}

                <input 
                type="checkbox" 
                id="terms" 
                name="terms"
                onChange={handleChange}
                className="m-4 h-5 w-5"/>
                <label htmlFor="terms">I agree to the terms and conditions</label><br />

                <button 
                type="submit" 
                disabled={!isValid} 
                className={`text-2xl mt-10 p-10 
                ${isValid ? "bg-green-900 cursor-pointer hover:border-blue-900 hover:border-2" : "bg-gray-900 cursor-not-allowed"}`}>Login</button>
            </form>
        </div>
    )
}