'use client';

import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Login successful!');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('email')} placeholder="Email" className="border p-2 w-full" />
        <input {...register('password')} type="password" placeholder="Password" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
