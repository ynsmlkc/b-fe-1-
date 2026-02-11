import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/login";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import axios from "axios";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Login = ({ user }) => {
  const { push } = useRouter();
  const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useState();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.error) {
      toast.error(res.error);
    }
    actions.resetForm();
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:3000/api/users`);
      setCurrentUser(res.data?.find((user) => user.email === session?.user.email));
      session && push(`/profile/` + currentUser?._id);
    }
    getUser();
  }, [session, push, currentUser]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      value: formik.values.email,
      errors: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      value: formik.values.password,
      errors: formik.errors.password,
      touched: formik.touched.password,
    },
  ];

  return (
    <div className="containe mx-auto">
      <div className="flex flex-col items-center my-20 md:w-1/3 w-1/2 mx-auto ">
        <Title addClass="text-[40px] mb-6 ">Login</Title>
        <form
          className="flex flex-col gap-y-4 w-full "
          onSubmit={formik.handleSubmit}
        >
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ))}
          <button className="btn-primary mb-2" type="submit">
            Login
          </button>
          <button
            className="btn-primary !bg-secondary"
            type="button"
            onClick={() => signIn("github")}
          >
            Github
          </button>
          <Link href="/auth/register">
            <span className="text-[14px] underline cursor-pointer text-gray-600  ">
              Do you have not any account?
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  const res = await axios.get(`http://localhost:3000/api/users`);
  const user = res.data.find((user) => user.email === session?.user.email);
  if (session && user) {
    return {
      redirect: {
        destination: `/profile/` + user._id,
        permanent: false,
      },
    };
  }
  return {
    props: { session, user: user ? user.data : null },
  };
}

export default Login;
