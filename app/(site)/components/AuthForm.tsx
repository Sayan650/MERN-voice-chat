'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/input/Input";
import { data } from "autoprefixer";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import {BsGithub, BsGoogle} from 'react-icons/bs'

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () =>{
    const [variant, setVarient] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

const toggleVarient = useCallback(() => {
    if(variant === 'LOGIN'){
        setVarient('REGISTER');
    }else{
        setVarient('LOGIN');
    }
}, [variant]);

const {
    register,
        handleSubmit,
        formState: { errors }
} = useForm<FieldValues>({
    defaultValues: {
            name: '',
            email: '',
            password: ''
        }
});

const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if(variant==='REGISTER'){
        //Axios register
    }
    if(variant==='LOGIN'){
        //next-auth login
    }
}

const socialAction = (action: string) => {
    setIsLoading(true);

    //next-auth social sign in
}

    return(
        <div
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input id="name" errors={errors} lebel="Name" register={register} disabled={isLoading}/>
                    )}
                    <Input id="email" errors={errors} lebel="Email Address" type="email" register={register} disabled={isLoading}/>
                    <Input id="password" errors={errors} lebel="Password" type="password" register={register} disabled={isLoading}/>
                    <Button
                        disabled={isLoading}
                        fullWidth
                        type="submit"
                    >
                        {variant === 'LOGIN'? 'Sign In' : 'Register'}
                    </Button>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center"> 
                                <div className="w-full border-t border-gray-300"/>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">
                                    Or continue with
                                </span>

                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <AuthSocialButton
                                icon={BsGithub}
                                onClick={() => socialAction('github')}
                            />
                            <AuthSocialButton
                                icon={BsGoogle}
                                onClick={() => socialAction('google')}
                            />
                        </div>
                    </div>
                        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                            <div>
                                {variant === 'LOGIN' ? 'New to MERN cgat ?' : 'Already have an account ?'}
                            </div>
                            <div
                                onClick={toggleVarient}
                                className="underline cursor-pointer"
                            >
                                {variant === 'LOGIN'? 'Create an account' : 'Log in'}
                            </div>
                        </div>
                </form>
            </div>
            
        </div>
    );
}

export default AuthForm;