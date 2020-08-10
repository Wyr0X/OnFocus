import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "../../assets/styles/components/Data.scss";
import Button from "../../components/Utils/ButtonArrowRight";
import Check from "../../assets/static/images/svg/icon-check.svg";

import Success from "../Utils/SuccessMessage";

const Data = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const [form, setValues] = useState({
    actualPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
    equalPassword: false,
  });

  const onSubmit = (data, event) => {
    if (
      data.newPassword === data.newPasswordConfirmation &&
      (data.actualPassword !== data.newPassword ||
        data.actualPassword !== data.newPasswordConfirmation)
    ) {
      setValues({ equalPassword: true });
      console.log("es correcto");
    } else {
      setValues({ equalPassword: false });
    }
  };

  return (
    <section className="data" onSubmit={handleSubmit(onSubmit)}>
      <h4>Gestioná tus datos.</h4>
      <h5>Cambiar contraseña.</h5>
      <form action="">
        <div className="flex">
          <input
            name="actualPassword"
            className="data__input__text"
            type="password"
            placeholder="Contraseña actual"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              maxLength: {
                value: 20,
                message: "No puede tener mas de 20 caracteres",
              },
              minLength: {
                value: 6,
                message: "No puede tener menos de 6 caracteres",
              },
            })}
          />

          <img src={Check} alt="" className="data__input__text__check" />
        </div>

        <span className="way-to-pay__input--error__profile">
          {errors.actualPassword && errors.actualPassword.message}
        </span>

        <div className="flex">
          <input
            name="newPassword"
            className="data__input__text"
            type="password"
            placeholder="Nueva Contraseña"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              maxLength: {
                value: 20,
                message: "No puede tener mas de 20 caracteres",
              },
              minLength: {
                value: 6,
                message: "No puede tener menos de 6 caracteres",
              },
            })}
          />
          <img src={Check} alt="" className="data__input__text__check" />
        </div>

        <span className="way-to-pay__input--error__profile">
          {errors.newPassword && errors.newPassword.message}
        </span>

        <div className="flex">
          <input
            name="newPasswordConfirmation"
            className="data__input__text"
            type="password"
            placeholder="Confirmar Nueva Contraseña"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              maxLength: {
                value: 20,
                message: "No puede tener mas de 20 caracteres",
              },
              minLength: {
                value: 6,
                message: "No puede tener menos de 6 caracteres",
              },
            })}
          />
          <img src={Check} alt="" className="data__input__text__check" />
        </div>
        <span className="way-to-pay__input--error__profile">
          {errors.newPasswordConfirmation &&
            errors.newPasswordConfirmation.message}
        </span>

        <span className="way-to-pay__input--error__profile">
          {form.equalPassword ? (
            ""
          ) : (
            <p>
              Deben ser Iguales las contraseñas y Debe ser distinta a la
              anterior
            </p>
          )}
        </span>

        <Button
          text={"Guardar"}
          margin={"discovery__box__position btn__secundary--data"}
        />

        <Success />
      </form>
    </section>
  );
};
export default Data;
