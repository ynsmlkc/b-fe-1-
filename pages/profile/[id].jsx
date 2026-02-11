import React, { useState } from "react";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { IoMdExit } from "react-icons/io";
import Account from "@/components/account/Account";
import Password from "@/components/account/Password";
import Order from "@/components/account/Order";
import { signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const Profile = ({ user }) => {
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();

  const profileExit = () => {
    if (confirm("Do you want to exit?")) {
      signOut({ redirect: false });
      push("/auth/login");
    }
  }

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] ">
      <div className=" w-80 flex-shrink-0 ">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0 ">
          <Image
            src="/images/client1.jpg"
            alt=""
            width={110}
            height={110}
            className="rounded-full"
          />
          <b className="text-xl mt-2 text-center ">{user.fullName}</b>
        </div>
        <ul>
          <li
            className="border border-b-0 w-full p-3 flex items-center gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all "
            onClick={() => setTabs(0)}
          >
            <IoMdHome className="text-[17px] " />
            <button className="text-[17px] ">Account</button>
          </li>
          <li
            className="border border-b-0 w-full p-3 flex items-center gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all "
            onClick={() => setTabs(1)}
          >
            <FaKey className="text-[17px] " />
            <button className="text-[17px] ">Password</button>
          </li>
          <li
            className="border border-b-0 w-full p-3 flex items-center gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all "
            onClick={() => setTabs(2)}
          >
            <RiMotorbikeFill className="text-[17px] " />
            <button className="text-[17px] ">Orders</button>
          </li>
          <li
            className="border  w-full p-3 flex items-center gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all "
            onClick={profileExit}
          >
            <IoMdExit className="text-[17px] " />
            <button className="text-[17px] ">Exit</button>
          </li>
        </ul>
      </div>

      {tabs === 0 && <Account user={user} />}
      {tabs === 1 && <Password user={user} />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  try {
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
    );
    return {
      props: { session, user: user ? user.data : null },
    };
  }

  catch (error) {
    console.log(error);
    return {
      props: { session, user: null },
    };
  }
}

export default Profile;
