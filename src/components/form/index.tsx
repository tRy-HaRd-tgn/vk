import styles from "./styles.module.scss";
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
import { Input } from "@/components/ui/input";

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
  date: z.string().length(11),
  description: z.string().min(5).max(300),
  result: z.string().min(5).max(30),
  commands: z.string().min(5).max(30),
  attendance: z.number().min(0).max(100),
});
export const CustomForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      description: "",
      result: "",
      commands: "",
    },
  });

  const { isSubmitting, errors } = form.formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    //var uniq = 'id' + (new Date()).getTime(); - формирование id
    try {
    } catch (e) {
    } finally {
    }
    console.log(values);
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
                <FormInput placeholder="description" {...field} />
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
                <FormInput placeholder="attendance" {...field} />
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
