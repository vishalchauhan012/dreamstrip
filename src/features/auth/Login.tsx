// 
import { Button } from "@/components/ui/button"
import { useForm,  } from "react-hook-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { useState } from "react"
import {RHFInput} from "@/components/ui/form/RHFInput";

import { zodResolver } from "@hookform/resolvers/zod";

import type  {LoginSchema } from "../../Schemas/loginSchema";
import {loginSchema } from "../../Schemas/loginSchema";
 




export function Login() {
  const [mode, setMode] = useState<"email" | "phone">("email")




   const {
 
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { isSubmitted  },
  } = useForm<LoginSchema>({
     resolver: zodResolver(loginSchema),
      defaultValues: {
    mode: "email",  
    email: "",
    password: "",
    phone: "",
  },
    mode: "onBlur",
    reValidateMode: "onChange" 
  })


  const onSubmit = (data: LoginSchema) =>{
    console.log("data", data)
    const {email, password, phone} = data
    if(mode === "email"){
      // handle email login
      console.log("Logging in with email:", {email : email,passowrd : password})
    } else {
      // handle phone login
      console.log("Logging in with phone:", phone)
    }
  } 

  console.log(watch("email"))

  
const handleModeChange = (newMode: "email" | "phone") => {
  setMode(newMode)
  setValue("mode", newMode, { shouldValidate: true })

  if (newMode === "email") {
    setValue("phone", "")
  } else {
    setValue("email", "")
    setValue("password", "")
  }
}


  return (
    <div className="min-h-[calc(100vh-160px)] bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">

       
        <div className="hidden md:flex flex-col justify-center bg-yellow-400 p-12 text-slate-900">
          <h2 className="text-3xl font-extrabold leading-tight">
            Welcome back to LocalStay
          </h2>

          <p className="mt-4 text-lg">
            Feel at home.  
            Travel local.  
            Stay connected.
          </p>

          <ul className="mt-8 space-y-3 text-sm font-medium">
            <li>✔ Trusted local hosts</li>
            <li>✔ Safe & verified stays</li>
            <li>✔ Authentic travel experiences</li>
          </ul>

          <p className="mt-10 text-sm">
            New here?{" "}
            <Link to="/signup" className="underline font-semibold">
              Create an account
            </Link>
          </p>
        </div>

      
        <Card className="border-0 rounded-none shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">
              Login to your account
            </CardTitle>
            <CardDescription>
              Continue your journey with{" "}
              <span className="font-semibold text-yellow-500">LocalStay</span>
            </CardDescription>
          </CardHeader>

          <CardContent>
       
            <div className="flex gap-2 mb-6">
              <Button
                variant={mode === "email" ? "default" : "outline"}
                className={
                  mode === "email"
                    ? "bg-yellow-400 text-slate-900"
                    : ""
                }
              
                 onClick={() => handleModeChange("email")}
              >
                Email
              </Button>

              <Button
                variant={mode === "phone" ? "default" : "outline"}
                className={
                  mode === "phone"
                    ? "bg-yellow-400 text-slate-900"
                    : ""
                }
               
                onClick={() => handleModeChange("phone")}
              >
                Phone
              </Button>
            </div>

            {mode === "email" && (
              <form id="login-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-2">
                    <RHFInput<LoginSchema>
        name="email"
        control={control}
        label="Email"
        placeholder="you@example.com"
          isSubmitted={isSubmitted}
      />
                </div>

                <div className="grid gap-2">

                  
       <RHFInput<LoginSchema>
        name="password"
        control={control}
        label="Password"
        placeholder="••••••••"
         isSubmitted={isSubmitted}
      />
                    
                </div>

                
              </form>
            )}

          
            {mode === "phone" && (
              <form className="space-y-5">
                <div className="grid gap-2">
                
                   <RHFInput<LoginSchema>
        name="phone"
        control={control}
        label="Phone Number"
        placeholder="+91 98765 43210"
         isSubmitted={isSubmitted}
                        />
                </div>

                <Button
                  type="button"
                  className="w-full bg-slate-900 text-white hover:bg-slate-800"
                >
                  Send OTP
                </Button>
              </form>
            )}
          </CardContent>

          <CardFooter className="flex-col gap-3">
            {mode === "email" && (
              <Button 
                form="login-form"
                type="submit"
                className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-semibold"
              >
                Login
              </Button>
            )}

            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>

            <p className="text-sm text-gray-500 mt-2 md:hidden">
              New here?{" "}
              <Link to="/signup" className="text-yellow-600 font-medium">
                Create an account
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
