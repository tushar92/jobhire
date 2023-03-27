import * as Yup from 'yup'

export interface ICreateAccount {
  accountType: string
  accountTeamSize: string
  accountName: string
  email: string
  phone: string
  accountPlan: string
  businessName: string
  businessDescriptor: string
  businessType: string
  businessDescription: string
  businessEmail: string
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
}

const createAccountSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),
  Yup.object({

  }),
  Yup.object({

  })
]

const inits: ICreateAccount = {
  accountType: 'personal',
  accountTeamSize: '50+',
  accountName: '',
  email: '',
  phone: '',
  accountPlan: '1',
  businessName: 'Keenthemes Inc.',
  businessDescriptor: 'KEENTHEMES',
  businessType: '1',
  businessDescription: '',
  businessEmail: 'corp@support.com',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
}

export { createAccountSchemas, inits }
