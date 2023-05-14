import Image from "next/image"
import AuthForm from "./components/AuthForm"

export default function Home() {
    return (
      <div className="
      flex
      flex-col
      min-h-full
      justify-center sm:px-6 py-12 lg:px-8 bg-gray-200
      ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image src={"/images/logo.png"} alt={"logo"} height={"48"} width={"48"} className="mx-auto w-auto p-6"/>
            <Image src={"/images/MERN chat.png"} alt={"logo"} height={"48"} width={"106"} className="mx-auto w-auto"/>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold traking-tight text-gray-700">
            Sign In to your account
        </h2>
        {/* Authform */}
        <AuthForm/>
        
      </div>
    )
  }