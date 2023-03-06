import './Form.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  UserDetails,
  ComplaintType,
  ToolDetails,
  PackageDetails,
} from './components';
import { DatePicker } from '../DatePicker';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    unregister
  } = useForm();

  const onSubmit = (data) => {
    console.log('#####json ', JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UserDetails register={register} errors={errors} unregister={unregister} />
      {/* <ComplaintType /> */}
      {/* <ToolDetails /> */}
      {/* <PackageDetails /> */}
      <div className="confirmation">
        {/* TODO style all buttons actions: focus, hover, active */}
        <button
          className="confirmation__button"
          type="submit"
          id="Confirmation"
        >
          Zgłoś naprawę
        </button>
        <DatePicker />
      </div>
    </form>
  );
};
