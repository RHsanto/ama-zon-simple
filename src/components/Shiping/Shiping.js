import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shiping.css'
const Shiping = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {user}=useAuth();
  const onSubmit = data =>{
     console.log(data)};
  console.log(watch("example"));

  return (
    <div className='register'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
    
      <input className='input'  defaultValue={user.displayName} {...register("name")} />
      
      <input className='input' type='email' defaultValue={user.email} {...register("email", { required: true })} />
      <input  placeholder='address'    className='input'   {...register("address")} />
      <input  placeholder='city'   className='input'   {...register("city")} />
      <input  placeholder='phone'   className='input'   {...register("phone")} />
    
      {errors.email && <span className='error'>This field is required</span>}
      
      <input className=' submit ' type="submit" />
    </form>
    </div>
  );
};

export default Shiping;