// import { z } from "zod"

// export const loginSchema = z.object({
//   email: z
//     .string()
//     .nonempty("Email is required")
//     .superRefine((value, ctx) => {
//       // @ missing
//       if (!value.includes("@")) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           message: "@ is missing in email",
//         })
//         return
//       }

//       const [, domain] = value.split("@")

//       // domain missing
//       if (!domain) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           message: "Domain name is missing",
//         })
//         return
//       }

//       // . missing in domain
//       if (!domain.includes(".")) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           message: "'.' is missing in domain",
//         })
//         return
//       }

//       // domain ends with dot
//       if (domain.endsWith(".")) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           message: "Domain is incomplete",
//         })
//       }
//     }),

//   password:z.string()
//   .min(8, { message: "Password must be at least 8 characters long" })
//   .regex(new RegExp(".*[A-Z].*"), { message: "One uppercase character required" })
//   .regex(new RegExp(".*[a-z].*"), { message: "One lowercase character required" })
//   .regex(new RegExp(".*\\d.*"), { message: "One number required" })
//   .regex(new RegExp(".*[!@#$%^&*(),.?\":{}|<>].*"), { message: "One special character required" }),

//   phone: z.string().min(10, "Phone number must be at least 10 digits long"),
// })


// export type LoginSchema = z.infer<typeof loginSchema>


import { z } from "zod"

export const loginSchema = z
  .object({
    mode: z.enum(["email", "phone"]),

    email: z.string().optional(),

    password: z.string().optional(),

    phone: z.string().optional(),
  })
  .superRefine((data, ctx) => {
  
    if (data.mode === "email") {
      // EMAIL REQUIRED
      if (!data.email || data.email.trim() === "") {
        ctx.addIssue({
          path: ["email"],
          message: "Email is required",
          code: z.ZodIssueCode.custom,
        })
      } else {
     
        const value = data.email

        if (!value.includes("@")) {
          ctx.addIssue({
            path: ["email"],
            message: "@ is missing in email",
            code: z.ZodIssueCode.custom,
          })
        } else {
          const [, domain] = value.split("@")

          if (!domain) {
            ctx.addIssue({
              path: ["email"],
              message: "Domain name is missing",
              code: z.ZodIssueCode.custom,
            })
          } else if (!domain.includes(".")) {
            ctx.addIssue({
              path: ["email"],
              message: "'.' is missing in domain",
              code: z.ZodIssueCode.custom,
            })
          } else if (domain.endsWith(".")) {
            ctx.addIssue({
              path: ["email"],
              message: "Domain is incomplete",
              code: z.ZodIssueCode.custom,
            })
          }
        }
      }

 
      if (!data.password) {
        ctx.addIssue({
          path: ["password"],
          message: "Password is required",
          code: z.ZodIssueCode.custom,
        })
      } else {
    
        if (data.password.length < 8) {
          ctx.addIssue({
            path: ["password"],
            message: "Minimum 8 characters required",
            code: z.ZodIssueCode.custom,
          })
        }
        if (!/[A-Z]/.test(data.password)) {
          ctx.addIssue({
            path: ["password"],
            message: "One uppercase character required",
            code: z.ZodIssueCode.custom,
          })
        }
        if (!/[a-z]/.test(data.password)) {
          ctx.addIssue({
            path: ["password"],
            message: "One lowercase character required",
            code: z.ZodIssueCode.custom,
          })
        }
        if (!/\d/.test(data.password)) {
          ctx.addIssue({
            path: ["password"],
            message: "One number required",
            code: z.ZodIssueCode.custom,
          })
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
          ctx.addIssue({
            path: ["password"],
            message: "One special character required",
            code: z.ZodIssueCode.custom,
          })
        }
      }
    }

 
    if (data.mode === "phone") {
      if (!data.phone) {
        ctx.addIssue({
          path: ["phone"],
          message: "Phone number is required",
          code: z.ZodIssueCode.custom,
        })
      } else if (!/^[6-9]\d{9}$/.test(data.phone)) {
        ctx.addIssue({
          path: ["phone"],
          message: "Invalid Indian phone number",
          code: z.ZodIssueCode.custom,
        })
      }
    }
  })

export type LoginSchema = z.infer<typeof loginSchema>
