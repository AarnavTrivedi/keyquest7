import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function AuthButton() {
  const supabase = createClient();



  const changeSite = async () => {
    "use server";

    // return redirect("/login");

  };

  return (

    <>
      <input
        required
        name="title"
        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 "
        type="text"
        placeholder="What do you want to learn?"
      />

      <Link legacyBehavior href="https://extraneous-direct-parallelalgorithm-1-aarnavtrivedi.replit.app/">
        <a>
          <button className="m-6 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Create KeyQuest
          </button>
        </a>
      </Link>
    </>
  );
}
