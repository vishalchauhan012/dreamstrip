import type {  Control, FieldValues, Path } from "react-hook-form"
import { Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RHFInputProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  type?: string
  placeholder?: string
  isSubmitted: boolean
}

export function RHFInput<T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  placeholder,
  isSubmitted,
}: RHFInputProps<T>) {
  
  return (
    <Controller
      name={name}
      control={control}
   render={({ field, fieldState }) => {
  const showError = 
  isSubmitted && fieldState.invalid &&
    fieldState.isTouched &&
    !!fieldState.error

  return (
    <div className="grid gap-2">
      <Label>{label}</Label>

      <Input
        {...field}
        type={type}
        placeholder={placeholder}
        aria-invalid={showError}
      />

      {showError && (
        <p className="text-sm text-destructive" role="alert">
          {fieldState.error?.message}
        </p>
      )}
    </div>
  )
}}

    />
  )
}
