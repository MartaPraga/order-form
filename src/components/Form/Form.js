import './Form.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useFetch } from 'react';
import {
  UserDetails,
  ComplaintType,
  ToolDetails,
  PackageDetails,
} from './components';
import { DatePicker } from '../DatePicker';
import { Modal } from '../Modal/Modal';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    unregister,
  } = useForm();

  // const values = useFetch();

// useForm ({
//   defaultValues: {
//     firstName: '',
//     lastName: '',
//     companyName: '',
//     companyTaxNumber: '',
//     address: '',
//     houseNumber: '',
//     postalCode: '',
//     city: '',
//     phoneNumber: '',
//     mail: ''
//   }
// }, values)

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [clickedGuarantee, setClickedGuarantee] = useState(false);
  const [clickedPostWarranty, setClickedPostWarranty] = useState(false);

  const handelClickGuarantee = () => {
    setClickedGuarantee(true);
    setClickedPostWarranty(false);
  };

  const handelClickPostWarranty = () => {
    setClickedGuarantee(false);
    setClickedPostWarranty(true);
  };

  const onSubmit = (data) => {
    setModalIsOpen(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UserDetails
        register={register}
        errors={errors}
        unregister={unregister}
      />
      <ComplaintType
      clickedGuarantee={clickedGuarantee}
      clickedPostWarranty={clickedPostWarranty}
      handelClickGuarantee={handelClickGuarantee}
      handelClickPostWarranty={handelClickPostWarranty}
      />
      <ToolDetails
      clickedGuarantee={clickedGuarantee}
      clickedPostWarranty={clickedPostWarranty}
      register={register}
        errors={errors}
      />
      <PackageDetails />
      <div className="confirmation">
        {/* TODO style all buttons actions: focus, hover, active */}
        <button
          className="confirmation__button"
          type="submit"
          id="Confirmation"
          
        >
          Zg??o?? napraw??
        </button>
      </div>
      <Modal 
      open={modalIsOpen}/>
    </form>
  );
};
