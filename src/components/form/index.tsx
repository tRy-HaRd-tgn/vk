import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MatchService from "@/service/matchService";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";

const FormInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <Input ref={ref} {...props} />;
});

FormInput.displayName = "FormInput";

const FormButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <Button ref={ref} {...props} />;
});

FormButton.displayName = "FormButton";

const formSchema = z.object({
  id: z.string(),
  date: z.string().length(11),
  description: z.string().min(5).max(300),
  result: z.string().min(5).max(30),
  commands: z
    .string()
    .min(5)
    .max(30)
    .refine(
      (value) => (value.match(/\s/g) || []).length === 1, // Проверка на ровно 1 пробел
      { message: "Строка должна содержать ровно один пробел" }
    ),
  attendance: z.number().min(0).max(100),
});
export const CustomForm = () => {
  const obj = useSelector((state: any) => state.formSlice);
  function parseStringToArray(str: string) {
    return str.trim().split(/\s+/);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      date: obj.date || "",
      description: obj.description || "",
      result: obj.result || "",
      commands: obj.commands || "",
      attendance: obj.attendance || 0,
    },
  });

  const { isSubmitting, errors } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      var uniq = "id" + new Date().getTime();
      values.id = uniq;
      console.log(values);
      const response = await MatchService.addMatch(
        values.id,
        values.date,
        values.description,
        values.result,
        parseStringToArray(values.commands),
        values.attendance
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    } finally {
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>date</FormLabel>
              <FormControl>
                <FormInput placeholder="date" {...field} />
              </FormControl>
              <FormDescription>
                This is your date of match. (example: 24.04.2004)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>description</FormLabel>
              <FormControl>
                <FormInput {...field} placeholder="description" />
              </FormControl>
              <FormDescription>example: матч проходил в москве</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="commands"
          render={({ field }) => (
            <FormItem>
              <FormLabel>commands</FormLabel>
              <FormControl>
                <FormInput placeholder="commands" {...field} />
              </FormControl>
              <FormDescription>example: газмяс ростов</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="result"
          render={({ field }) => (
            <FormItem>
              <FormLabel>result</FormLabel>
              <FormControl>
                <FormInput placeholder="result" {...field} />
              </FormControl>
              <FormDescription>example: газмяс win</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="attendance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>attendance</FormLabel>
              <FormControl>
                <FormInput
                  type="number"
                  placeholder="attendance"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                Заполненность концерта в процентах. (example: 50)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </FormButton>
      </form>
    </Form>
  );
};
