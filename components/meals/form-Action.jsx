"use client";
import { useFormState } from "react-dom";

import MealsFormSubmit from "./meals-form-submit";
import styles from "@/app/meals/share/page.module.css";
import { shareMeal } from "@/lib/actions";

const FormAction = ({ children }) => {
  const [{ message }, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <form className={styles.form} action={formAction}>
        {children}
        {message && <p>{message}</p>}
        <p className={styles.actions}>
          <MealsFormSubmit />
        </p>
      </form>
    </>
  );
};

export default FormAction;
