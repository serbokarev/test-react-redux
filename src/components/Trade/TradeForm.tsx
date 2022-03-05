import React from 'react';
import { Formik, Field, FormikHelpers, Form, FormikProps } from 'formik';
import { Trade, TradeFields } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { openTrade } from '../../store/actions';

interface Props {
  formikProps: FormikProps<TradeFields>;
}


export const TradeForm = ({ formikProps }: Props) => {
  const trades = useSelector<Trade[], Trade[]>((state) => state) || [];

  React.useEffect(() => {
    formikProps.resetForm();
  }, [trades])

  return (<Form>
    <Field name="currency" type="text" />
    <Field name="amount" type="number" />
    <button type="submit">Buy</button>
  </Form>);
}
