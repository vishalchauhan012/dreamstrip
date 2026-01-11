import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export function Signup() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* LEFT — BRAND / STORY */}
        <div className="hidden md:flex flex-col justify-center bg-yellow-400 p-10 text-slate-900">
          <h2 className="text-3xl font-extrabold leading-tight">
            Join LocalStay
          </h2>

          <p className="mt-4 text-lg">
            Open your home.  
            Explore like a local.  
            Travel with trust.
          </p>

          <ul className="mt-8 space-y-3 text-sm font-medium">
            <li>✔ Trusted local hosts</li>
            <li>✔ Affordable & authentic stays</li>
            <li>✔ Real travel experiences</li>
          </ul>

          <p className="mt-10 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline font-semibold">
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT — SIGNUP FORM */}
        <Card className="border-0 rounded-none shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">
              Create your account
            </CardTitle>
            <CardDescription>
              Start your journey with{" "}
              <span className="font-semibold text-yellow-500">LocalStay</span>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your full name" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-3">
            <Button
              type="submit"
              className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-semibold"
            >
              Create Account
            </Button>

            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>

            <p className="text-sm text-gray-500 mt-2 md:hidden">
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-600 font-medium">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Signup
