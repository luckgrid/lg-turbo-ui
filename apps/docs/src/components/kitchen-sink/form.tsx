"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { Link } from "@workspace/next-ui/components/link";
import { toast } from "@workspace/next-ui/components/toaster";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import {
  CheckboxField,
  Field,
  RadioGroupField,
  SelectField,
  TextareaField,
  type RadioGroupItemFieldProps,
} from "@workspace/ui/components/field";
import { Form } from "@workspace/ui/components/form";
import type { SelectItemProps } from "@workspace/ui/components/select";

// TODO:
// - disable newsletterCategory fields when newsletterSubscription is false
// - generate a username value from email
// - add additional form field state related render conditions to handle various field component edge cases

const experienceOptions: SelectItemProps[] = [
  { textValue: "Beginner", value: "beginner" },
  { textValue: "Intermediate", value: "intermediate" },
  { textValue: "Advanced", value: "advanced" },
  { textValue: "Expert", value: "expert" },
];

const newsletterCategories: RadioGroupItemFieldProps[] = [
  { value: "all", label: "Everything" },
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
];

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
      "You must agree to our terms and conditions to continue"
    ),
  newsletterSubscription: z.boolean().default(false).optional(),
  newsletterCategory: z
    .enum(["all", "design", "engineering", "marketing"])
    .optional(),
});

type FormInput = z.input<typeof formSchema>;
type FormValues = z.infer<typeof formSchema>;
type FormOutput = z.output<typeof formSchema>;

const formDefaultValues: FormValues = {
  email: "",
  username: "",
  name: "",
  experience: "",
  bio: "",
  legalAgreement: false,
  newsletterSubscription: true,
  newsletterCategory: "all",
};

export function FormKitchenSink() {
  const form = useForm<FormInput, FormValues, FormOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast.success("The form has been submitted successfully");
  }

  React.useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset(formDefaultValues);
    }
  }, [form.formState.isSubmitSuccessful, form.reset]);

  return (
    <Card
      className="intersect-once intersect:motion-preset-rebound-right max-w-2xl"
      space="frame"
    >
      <h3 className="text-subheading text-balance">
        Form Inside a Card Component
      </h3>
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <Field
            control={form.control}
            description="This will be your primary contact. You can add additional contacts later."
            label="Email"
            name="email"
            placeholder="dev@luckgrid.net"
            isRequired
          />
          <Field
            control={form.control}
            description="This will be your username. You can change it later."
            label="Username"
            name="username"
            placeholder="1337-h4x0r"
            isRequired
          />
          <SelectField
            control={form.control}
            description="Choosing an experience level is completely optional."
            items={experienceOptions}
            label="Experience"
            name="experience"
            placeholder="Select your level"
          />
          <TextareaField
            control={form.control}
            description="This will be your bio. You can change it later."
            label="Bio"
            name="bio"
            placeholder="Write a short description about yourself..."
          />
          <CheckboxField
            control={form.control}
            description={
              <>
                Make sure to read the <Link href="#">terms and conditions</Link>{" "}
                before using our services.
              </>
            }
            label="I agree to the terms and conditions"
            name="legalAgreement"
          />
          <CheckboxField
            control={form.control}
            description="We don't spam or sell any private information. You may unsubscribe at any time."
            label="I want to subscribe to the newsletter"
            name="newsletterSubscription"
          />
          <RadioGroupField
            control={form.control}
            items={newsletterCategories}
            label="Send me info about:"
            name="newsletterCategory"
          />
          <Button
            className="mt-fs-4 sm:justify-self-end"
            color="accent"
            size="md"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </FormProvider>
    </Card>
  );
}
