import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Register() {
    const [ formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const { name, email, password, passwordConfirm } = formData

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData( prevState => {
            const { name, value } = e.target;

            return {
                ...prevState,
                [name]: value
            }
            
        })
    }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            toast.error('Password do not match');
        } else {
            const userData = {
                name,
                email,
                password
            };

            dispatch(register(userData));
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create your account</p>
            </section>

            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Enter your name'
                            onChange={handleChange}
                        />
                    </div>
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
                        <input
                            type="password"
                            className="form-control"
                            id='passwordConfirm'
                            name='passwordConfirm'
                            value={passwordConfirm}
                            placeholder='Confirm password'
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

export default Register