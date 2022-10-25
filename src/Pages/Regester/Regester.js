import { Button, Label, TextInput } from 'flowbite-react';
import img from "../../img/login.jpg";
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const Regester = () => {
    const { setUser, loginWithGoogle, setError, error,createUserWithEmail } = useAuth()
    const loginInGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user
                setUser(user)
                setError("")
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)

            })
    }
    const singInWithEmail = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUserWithEmail(email,password)
        .then(userCredential => {
            const user = userCredential.user
            setUser(user)
            setError("")
            form.reset()
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
            form.reset()
        })
    }
    return (
        <div className='flex justify-around items-center w-3/4 mx-auto'>
            <div className='w-full'>
                <img src={img} alt="login img" />
            </div>
            <div className='w-full'>
                <form onSubmit={singInWithEmail} className="flex flex-col gap-4 text-left pl-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your full Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            name='name'
                            placeholder="enter your full name"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photo url"
                                value="Your Photo Url"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="url"
                            name='photo'
                            placeholder="enter your photo url"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name='email'
                            placeholder="enter your email"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            name='password'
                            placeholder='enter your password'
                            required={true}
                        />
                    </div>

                    <Button type="submit">
                        Regester
                    </Button>
                    <Button onClick={loginInGoogle}>
                        Sing Up With Google
                    </Button>
                    <Button>
                        Sing Up With Github
                    </Button>
                    <p>Already have a account <Link className='text-slate-500 font-bold
            ' to="/login">Login</Link></p>
                </form>
                <p className='text-red-600 font-bold'>{error}</p>
            </div>
        </div>
    );
};

export default Regester;