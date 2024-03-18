import React from 'react';
// import {useEffect, useRef} from "react";
import Input from "components/Input";
import Button from "components/Button";
import Separator from "components/Separator";
import { MdMenuBook } from "react-icons/md";
import { Link} from "react-router-dom"
import {Formik, Form} from "formik";
import {Helmet} from "react-helmet";
import 'index.css';

export default function Login() {




    return (
        <div className="">

            <Helmet>
                <title>Login • QR MENU</title>
            </Helmet>



            <div className="w-[350px]">

                <div className="bg-white border px-[10px] pt-10 pb-6">

                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        //onSubmit={handleSubmit}
                    >
                        {({isSubmitting, isValid, dirty}) => (
                            <Form className="grid gap-y-1.5">
                                <Input name="username" label="Phone number, username or email"/>
                                <Input type="password" name="password" label="Password"/>
                                <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
                                    Log In
                                </Button>
                                <Separator/>
                                <a href="replace"
                                   className="flex justify-center mb-3 items-center gap-x-2 text-sm font-semibold text-facebook">
                                    <MdMenuBook size={20}/>
                                    Log in with Facebook
                                </a>
                                <a href="replace" className="text-xs flex items-center justify-center text-link">
                                    Forgot password?
                                </a>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="bg-white border p-4 text-sm text-center">
                    Don't have an account? <Link to="/auth/register" className="font-semibold text-brand">Sign up</Link>
                </div>

            </div>


        </div>
    );
}