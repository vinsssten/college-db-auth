import React, {FC, useEffect, useLayoutEffect, useState} from 'react'
import stl from './AuthPage.module.scss'
import {Card} from "../../components/Card";
import {TextInputControlled} from "../../components/TextInputControlled";
import {useForm} from "react-hook-form";
import {MainButton, SecondaryButton} from "../../components/Buttons";
import axios from "axios";
import {useNavigate} from "react-router";

const api = axios.create(({
    baseURL: 'http://localhost:3000',
}))

const signInFetch = (login: string, password: string) => {
    return api.post('signIn', null , {params: {login, password}, });
}

const signUpFetch = (login: string, password: string, name: string) => {
    return api.post('signUp', null , {params: {login, password, name}, });
}

const rules = {required: "Required"};

const AuthPage: FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const {control, reset, handleSubmit} = useForm();
    const nav = useNavigate()

    const [smthError, setSmthError] = useState<string | null>(null)

    useLayoutEffect(() => {
        reset({name: '', login: "", password: '', repeatPassword: ''});
        setSmthError(null);
    }, [isSignUp])

    const signIn = handleSubmit(async (data) => {
        try {
            setSmthError(null);
            await signInFetch(data.login, data.password);
            nav('/')
        } catch (e) {
            setSmthError('An error occurred while fetch')
        }
    });

    const signUp = handleSubmit(async (data) => {
        if (data.password != data.repeatPassword) {
            setSmthError('Passwords don`t match')
        }
        try {
            setSmthError(null);
            await signUpFetch(data.login, data.password);
            setIsSignUp(false);
        } catch (e) {
            setSmthError('An error occurred while fetch')
        }
    })

    return (
        <div className={stl.page}>
            <div className={stl.cont}>
                {!isSignUp ? (
                    <>
                        <h2>Hello, please sign in 😊</h2>
                        <Card className={stl.card} contentClassname={stl.authCont}>
                            <TextInputControlled label={'Login'} control={control} name={'login'} rules={rules} />
                            <TextInputControlled type={"password"} label={'Password'} control={control} name={'password'} rules={rules} />
                            <MainButton onClick={signIn} className={stl.mainButton}>Sign in</MainButton>
                            <SecondaryButton onClick={() => setIsSignUp(!isSignUp)}>
                                Sign up
                            </SecondaryButton>

                            {smthError && <p style={{color: 'red'}}>{smthError}</p>}
                        </Card>
                    </>
                ) : (
                    <>
                        <h2>Sign up 🥰</h2>
                        <Card className={stl.card} contentClassname={stl.authCont}>
                            <TextInputControlled label={'Login'} control={control} name={'login'} rules={rules} />
                            <TextInputControlled label={'Name'} control={control} name={'name'} rules={rules} />
                            <TextInputControlled type={"password"} label={'Password'} control={control} name={'password'} rules={rules} />
                            <TextInputControlled type={"password"} label={'Repeat password'} control={control} name={'repeatPassword'} rules={rules} />
                            <MainButton onClick={signUp} className={stl.mainButton}>Sign up</MainButton>
                            <SecondaryButton onClick={() => setIsSignUp(!isSignUp)}>
                                Go back
                            </SecondaryButton>

                            {smthError && <p style={{color: 'red'}}>{smthError}</p>}
                        </Card>
                    </>
                )}
            </div>
        </div>
    )
};

export default AuthPage;