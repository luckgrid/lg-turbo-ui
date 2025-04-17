'use client';

import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import { FormProvider, useForm } from 'react-hook-form';

import { z } from 'zod';

import { Link } from '@workspace/next-ui/components/link';
import { toast } from '@workspace/next-ui/components/toaster';
import { Button } from '@workspace/ui/components/button';
import { Card } from '@workspace/ui/components/card';
import { Checkbox } from '@workspace/ui/components/checkbox';
import { Field } from '@workspace/ui/components/field';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFieldController,
  FormLabel,
} from '@workspace/ui/components/form';
import { Textarea } from '@workspace/ui/components/input';
import {
  RadioGroup,
  RadioGroupItem,
} from '@workspace/ui/components/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';
import { Layout } from '@workspace/ui/primitives/layout';

// TODO:
// - disable newsletterCategory fields when newsletterSubscription is false
// - generate a username value from email
// - add additional form field state related render conditions to handle various field component edge cases

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters',
  }),
  name: z.string().optional(),
  experience: z.string().optional(),
  bio: z.string().optional(),
  legalAgreement: z
    .boolean()
    .default(false)
    .refine(
      (value) => value === true,
      'You must agree to our terms and conditions to continue'
    ),
  newsletterSubscription: z.boolean().default(false).optional(),
  newsletterCategory: z
    .enum(['all', 'design', 'engineering', 'marketing'])
    .optional(),
});

type FormInput = z.input<typeof formSchema>;
type FormValues = z.infer<typeof formSchema>;
type FormOutput = z.output<typeof formSchema>;

const formDefaultValues: FormValues = {
  email: '',
  username: '',
  name: '',
  experience: '',
  bio: '',
  legalAgreement: false,
  newsletterSubscription: true,
  newsletterCategory: 'all',
};

export function FormKitchenSink() {
  const form = useForm<FormInput, FormValues, FormOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast.success('The form has been submitted successfully');
  }

  React.useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset(formDefaultValues);
    }
  }, [form.formState.isSubmitSuccessful, form.reset]);

  return (
    <Layout className='container px-fs-6'>
      <Card
        className='intersect-once intersect:motion-preset-rebound-right max-w-2xl bg-background-1'
        space='frame'
      >
        <h3 className='text-subheading text-balance'>
          Form Inside a Card Component
        </h3>
        <FormProvider {...form}>
          <Form onSubmit={form.handleSubmit(onSubmit)}>
            <Field
              control={form.control}
              hint='This will be your primary contact. You can add additional contacts later.'
              label='Email'
              name='email'
              placeholder='dev@luckgrid.net'
              isRequired
            />
            <Field
              control={form.control}
              hint='This will be your username. You can change it later.'
              label='Username'
              name='username'
              placeholder='1337-h4x0r'
              isRequired
            />
            <Field
              control={form.control}
              hint='Choosing an experience level is completely optional.'
              label='Experience'
              name='experience'
            >
              {(field) => (
                <Select
                  defaultValue={field.value}
                  key={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select your level' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='beginner'>Beginner</SelectItem>
                    <SelectItem value='intermediate'>Intermediate</SelectItem>
                    <SelectItem value='advanced'>Advanced</SelectItem>
                    <SelectItem value='expert'>Expert</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </Field>
            <Field control={form.control} label='Bio' name='bio'>
              {(field) => (
                <Textarea
                  placeholder='Write a short description about yourself...'
                  {...field}
                />
              )}
            </Field>
            <FormFieldController
              control={form.control}
              name='legalAgreement'
              render={({ field }) => (
                <FormField className='flex flex-row items-start'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='flex flex-col gap-fs-0-75 leading-none'>
                    <FormLabel size='md' variant='indicator'>
                      I agree to the terms and conditions
                    </FormLabel>
                    <FormDescription>
                      Make sure to read the{' '}
                      <Link href='#'>terms and conditions</Link> before using
                      our services.
                    </FormDescription>
                  </div>
                </FormField>
              )}
            />
            <FormFieldController
              control={form.control}
              name='newsletterSubscription'
              render={({ field }) => (
                <FormField className='flex flex-row items-start'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='flex flex-col gap-fs-0-75 leading-none'>
                    <FormLabel size='md' variant='indicator'>
                      I want to subscribe to the newsletter
                    </FormLabel>
                    <FormDescription>
                      We don't spam or sell any private information. You may
                      unsubscribe at any time.
                    </FormDescription>
                  </div>
                </FormField>
              )}
            />
            <FormFieldController
              control={form.control}
              name='newsletterCategory'
              render={({ field }) => (
                <FormField className='gap-y-fs-2'>
                  <FormLabel>Send me info about:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      key={field.value}
                    >
                      <FormField className='flex flex-row items-center'>
                        <FormControl>
                          <RadioGroupItem value='all' />
                        </FormControl>
                        <FormLabel className='font-normal' variant='indicator'>
                          Everything
                        </FormLabel>
                      </FormField>
                      <FormField className='flex flex-row items-center'>
                        <FormControl>
                          <RadioGroupItem value='design' />
                        </FormControl>
                        <FormLabel className='font-normal' variant='indicator'>
                          Design
                        </FormLabel>
                      </FormField>
                      <FormField className='flex flex-row items-center'>
                        <FormControl>
                          <RadioGroupItem value='engineering' />
                        </FormControl>
                        <FormLabel className='font-normal' variant='indicator'>
                          Engineering
                        </FormLabel>
                      </FormField>
                      <FormField className='flex flex-row items-center'>
                        <FormControl>
                          <RadioGroupItem value='marketing' />
                        </FormControl>
                        <FormLabel className='font-normal' variant='indicator'>
                          Marketing
                        </FormLabel>
                      </FormField>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription />
                </FormField>
              )}
            />
            <Button
              className='mt-fs-4 sm:justify-self-end'
              color='primary'
              size='md'
              type='submit'
            >
              Submit
            </Button>
          </Form>
        </FormProvider>
      </Card>
    </Layout>
  );
}
