import React from "react";
import { auth, signOut } from "@/libs/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import s from "./s.module.scss"
const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="container">
      <div className={s.profile}>
        <h2>{session.user.name}</h2>
        <Image
          
          className={s.avatar}
          src={session.user.image ? session.user.image : "/images/avatar.jpg"}
          width={100}
          height={100}
          alt={session.user.name!}
        />
      </div>
      <form
        className={s.signOut}
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default ProfilePage;
