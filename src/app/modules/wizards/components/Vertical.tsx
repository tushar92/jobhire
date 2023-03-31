import { FC, useEffect, useRef, useState } from 'react'
import { KTSVG } from '../../../../_metronic/helpers'
import { Step1 } from './steps/Step1'
import { Step2 } from './steps/Step2'
import { Step3 } from './steps/Step3'
import { Step4 } from './steps/Step4'
import { Step5 } from './steps/Step5'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import { Formik, Form, FormikValues } from 'formik'
import { ICreateAccount, createAccountSchemas, inits } from './CreateAccountWizardHelper'
import clsx from 'clsx'

type Props = {
  job?: any,
  random?: any
}

const Vertical: FC<Props> = ({ job }) => {
  const [random, setRandom] = useState(Math.random())
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const loadStepper = () => {
    setRandom(Math.random())
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    setSubmitButton(stepper.current?.currentStepIndex! === stepper.current?.totatStepsNumber! - 1)
    console.log(stepper.current)
    console.log(stepper.current ?.currentStepIndex! === stepper.current ?.totatStepsNumber!)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    stepper.current.goPrev()
    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber)
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    console.log(stepper.current)
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber - 1)

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }


  useEffect(() => {
    if (!stepperRef.current) {
      return
    }
    loadStepper()
  }, [])

  return (
    <div
      ref={stepperRef}
      className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid  rounded'
      id='kt_create_account_stepper'
    >
      {/* begin::Aside*/}
      {<div className='card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9 d-none'>
        {/* begin::Wrapper*/}
        <div className='card-body px-6 px-lg-10 px-xxl-15 py-20'>
          {/* begin::Nav*/}
          <div className='stepper-nav'>
            {/* begin::Step 1*/}
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>1</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Account Type</h3>

                  <div className='stepper-desc fw-semibold'>Setup Your Account Details</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 1*/}


            {/* begin::Step 3*/}
            <div className={clsx('stepper-item', { 'completed': stepper && stepper.current ?.currentStepIndex! === stepper.current ?.totatStepsNumber! })} data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>3</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Business Info</h3>
                  <div className='stepper-desc fw-semibold'>Your Business Related Info</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}


            </div>
            {/* end::Step 3*/}


          </div>
          {/* end::Nav*/}
        </div>
        {/* end::Wrapper*/}
      </div>}
      {/* begin::Aside*/}

      <div className='d-flex flex-row-fluid flex-center bg-body rounded'>
        <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep} key={job.id}>
          {() => (
            <Form className='py-10 w-100 w-xl-700px px-9' noValidate id='kt_create_account_form'>
              <div className='current' data-kt-stepper-element='content'>
                <Step1 />
              </div>



              <div data-kt-stepper-element='content'>
                {stepper.current ?.currentStepIndex! === stepper.current ?.totatStepsNumber! && <Step3 key={job.id} />}
              </div>


              <div className='d-flex flex-stack pt-10'>
                {stepper.current ?.currentStepIndex! !== stepper.current ?.totatStepsNumber! &&<div className='mr-2'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='btn btn-lg btn-light-primary me-3'
                    data-kt-stepper-action='previous'
                  >
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr063.svg'
                      className='svg-icon-4 me-1'
                    />
                    Back
                  </button>
                </div>}

                {stepper.current ?.currentStepIndex !== stepper.current ?.totatStepsNumber &&
                  <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {stepper.current ?.currentStepIndex !==
                          stepper.current ?.totatStepsNumber! - 1 && 'Continue'}
                        {stepper.current ?.currentStepIndex ===
                          stepper.current ?.totatStepsNumber! - 1 && 'Submit'}
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-3 ms-2 me-0'
                        />
                      </span>
                    </button>
                  </div>}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export { Vertical }
