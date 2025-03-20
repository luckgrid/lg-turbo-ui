"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { SectionContainer } from "@workspace/ui/components/section";
import { Textarea } from "@workspace/ui/components/textarea";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().optional(),
  bio: z.string().optional(),
  sendNewsletter: z.boolean().default(true),
  sendPromotions: z.boolean().default(false).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function FormKitchenSink() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      name: "",
      bio: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <SectionContainer>
      <Card className="max-w-2xl bg-background-1" space="container">
        <h3 className="text-subheading text-balance">
          Form Inside a Card Component
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-fs-8 gap-x-fs-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel isRequired>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="dev@luckgrid.net" {...field} />
                  </FormControl>
                  <FormDescription>This is your contact email.</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel isRequired>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="1337-h4x0r" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A short description about yourself (optional)"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="self-end" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </SectionContainer>
  );
}
