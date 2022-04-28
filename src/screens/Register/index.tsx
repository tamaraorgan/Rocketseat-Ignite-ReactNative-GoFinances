import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Button } from '../../components/Forms/Button'
import { CategoryButton } from '../../components/Forms/CategoryButton'
import { Input } from '../../components/Forms/Input'
import { TransactionButton } from '../../components/Forms/TransactionButton'
import { Category } from '../Category'
import { Container, Header, Title, Form, Fields, Transactions } from './styles'

export function Register() {
  const [transactionButtonType, setTransactionButtonType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  function handleTransactionButtonSelected(type: 'up' | 'down') {
    setTransactionButtonType(type)
  }

  function handleSelectCategoryModal() {
    setCategoryModalOpen(!categoryModalOpen)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Valor" />
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
          <CategoryButton title={category.name} onPress={handleSelectCategoryModal}/>
        </Fields>

        <Button title="Enviar" />
      </Form>
      <Modal visible={categoryModalOpen}>
        <Category
          category={category.key}
          setCategory={setCategory}
          closeSelectCategory={handleSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}
