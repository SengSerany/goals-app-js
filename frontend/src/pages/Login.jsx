import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
    const [ formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const handleChange = (e) => {
        setFormData( prevState => {
            const { name, value } = e.target;

            return {
                ...prevState,
                [name]: value
            }
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Connect to your account</p>
            </section>

            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter a password'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className='btn btn-block'
                        >Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login