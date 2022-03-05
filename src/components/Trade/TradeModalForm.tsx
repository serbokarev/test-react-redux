import React, { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, FormikHelpers } from 'formik';
import { TradeFields } from '.';
import { openTrade } from '../../store/actions';
import { TradeForm } from './TradeForm';

interface Props {
  toggle: () => void;
}

export const TradeModalForm = ({ toggle }: Props) => {
  const dispatch = useDispatch();

  const initialValues = {
    amount: 0,
    currency: '$'
  }

  const handleSubmit = (values: TradeFields, helpers: FormikHelpers<TradeFields>) => {
    dispatch(openTrade(values));
    toggle();
  }

  const handleClose = (e: SyntheticEvent<any>) => {
    toggle();
  }

  return (<div className='modal' onClick={handleClose}>
    <div className='modal-content' onClick={e => e.stopPropagation()} >
      <Formik<TradeFields>
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {formikProps => <TradeForm formikProps={formikProps} />}
      </Formik>
    </div>
  </div>);
}
