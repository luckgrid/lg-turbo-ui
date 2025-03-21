"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@workspace/ui-next/components/toaster";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Field } from "@workspace/ui/components/field";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFieldController,
  FormLabel,
} from "@workspace/ui/components/form";
import { Textarea } from "@workspace/ui/components/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group";
import { SectionContainer } from "@workspace/ui/components/section";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

// TODO:
// - disable newsletterCategory fields when newsletterSubscription is false
// - generate a username value from email
// - add additional form field state related render conditions to handle various field component edge cases

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  name: z.string().optional(),
  experience: z.string().optional(),
  bio: z.string().optional(),
  legalAgreement: z
    .boolean()
    .default(false)
    .refine(
      (value) => value === true,
      "You must agree to the terms and conditions to continue",
    ),
  newsletterSubscription: z.boolean().default(false),
  newsletterCategory: z.enum(["all", "design", "engineering", "marketing"]),
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
      newsletterSubscription: true,
      newsletterCategory: "all",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast.success("The form has been submitted successfully");
  }

  return (
    <SectionContainer>
      <Card className="max-w-2xl bg-background-1" space="container">
        <h3 className="text-subheading text-balance">
          Form Inside a Card Component
        </h3>
        <FormProvider {...form}>
          <Form onSubmit={form.handleSubmit(onSubmit)}>
            <Field
              control={form.control}
              hint="This is your contact email"
              label="Email"
              name="email"
              placeholder="dev@luckgrid.net"
              isRequired
            />
            <Field
              control={form.control}
              hint="This is your username"
              label="Username"
              name="username"
              placeholder="1337-h4x0r"
              isRequired
            />
            <Field control={form.control} label="Experience" name="experience">
              {(field) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your level of experience (optional)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </Field>
            <Field
              control={form.control}
              hint="This is your bio"
              label="Bio"
              name="bio"
            >
              {(field) => (
                <Textarea
                  placeholder="A short description about yourself (optional)"
                  {...field}
                />
              )}
            </Field>
            <FormFieldController
              control={form.control}
              name="legalAgreement"
              render={({ field }) => (
                <FormField layout="row">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-fs-0-75 leading-none">
                    <FormLabel size="md">
                      I agree to the terms and conditions
                    </FormLabel>
                    <FormDescription />
                  </div>
                </FormField>
              )}
            />
            <FormFieldController
              control={form.control}
              name="newsletterSubscription"
              render={({ field }) => (
                <FormField layout="row">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-fs-0-75 leading-none">
                    <FormLabel>I want to receive updates to my email</FormLabel>
                    <FormDescription>
                      We'll never spam you or sell your private information.
                    </FormDescription>
                  </div>
                </FormField>
              )}
            />
            <FormFieldController
              control={form.control}
              name="newsletterCategory"
              render={({ field }) => (
                <FormField className="space-y-3">
                  <FormLabel>I want to receive updates about...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormField className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Everything
                        </FormLabel>
                      </FormField>
                      <FormField className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="design" />
                        </FormControl>
                        <FormLabel className="font-normal">Design</FormLabel>
                      </FormField>
                      <FormField className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="engineering" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Engineering
                        </FormLabel>
                      </FormField>
                      <FormField className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="marketing" />
                        </FormControl>
                        <FormLabel className="font-normal">Marketing</FormLabel>
                      </FormField>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription />
                </FormField>
              )}
            />
            <Button
              className="sm:justify-self-end"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </FormProvider>
      </Card>
    </SectionContainer>
  );
}
