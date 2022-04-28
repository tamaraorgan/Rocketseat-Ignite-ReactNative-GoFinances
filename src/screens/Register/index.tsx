import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from '../../components/Forms/Button'
import { CategoryButton } from '../../components/Forms/CategoryButton'
import { InputForm } from '../../components/Forms/InputForm'
import { TransactionButton } from '../../components/Forms/TransactionButton'
import { Category } from '../Category'
import { Container, Header, Title, Form, Fields, Transactions } from './styles'

type FormData = {
  name: string
  amount: string
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor náo pode ser negativo')
    .required('O valor é obrigatório')
})

export function Register() {
  const [transactionButtonType, setTransactionButtonType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  function handleTransactionButtonSelected(type: 'up' | 'down') {
    setTransactionButtonType(type)
  }

  function handleSelectCategoryModal() {
    setCategoryModalOpen(!categoryModalOpen)
  }

  function handleRegister(form: Partial<FormData>) {
    if (!transactionButtonType) {
      return Alert.alert('Selecione o tipo da transação')
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione uma categoria')
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionButtonType,
      category: category.key
    }
    console.log(data, 'data')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Valor"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
            <Transactions>
              <TransactionButton
                title="Income"
                type="up"
                onPress={() => handleTransactionButtonSelected('up')}
                isActive={transactionButtonType === 'up'}
              />
              <TransactionButton
                title="Outcome"
                type="down"
                onPress={() => handleTransactionButtonSelected('down')}
                isActive={transactionButtonType === 'down'}
              />
            </Transactions>
            <CategoryButton
              title={category.name}
              onPress={handleSelectCategoryModal}
            />
          </Fields>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>
        <Modal visible={categoryModalOpen}>
          <Category
            category={category.key}
            setCategory={setCategory}
            closeSelectCategory={handleSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}
