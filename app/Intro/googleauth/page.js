import GoogleLoginButton from "@/components/GoogleLoginButton";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-grey-900">
      <GoogleLoginButton />
      
      <p className="mt-2 text-sm text-gray-400 p-4">
              Click This Button And <span className="text-red-500 font-bold">Sign-In</span> with Google Account
            </p>
    </div>
  );
}