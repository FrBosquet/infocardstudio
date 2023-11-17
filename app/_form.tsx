'use client'

import { Card, Flex, Heading, Select, Text, TextArea, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { InfoCard } from "./_infocard";
import { Modal } from "./_modal";
import { Export } from "./_export";

export const Form = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [state, setState] = useState({
    modal: '',
    card: '',
    color: 'blue',
    image: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { target } = e

    const { name, value } = target

    setState({
      ...state,
      [name]: value
    })
  }

  const handleColorChange = (value: string) => {
    setState({
      ...state,
      color: value
    })
  }

  const handleImageChange = (value: string) => {
    setState({
      ...state,
      image: value
    })
  }

  return <>
    <Card style={{ width: '100%', maxWidth: 'min(100vw, 800px)' }}>
      <Flex direction='column' gap={"4"}>
        <Heading>Info Card Config</Heading>

        <Text>Modal content</Text>
        <TextArea size="1" name="modal" onChange={handleChange} placeholder="Modal content"></TextArea>
        <Text>Card content</Text>
        <TextArea size="1" name="card" onChange={handleChange} placeholder="Modal content"></TextArea>

        <Flex direction='row' gap={"4"}>
          <Flex direction='column' className="flex-1" gap={"4"}>
            <Text>CTA</Text>
            <TextField.Root>
              <TextField.Input name="cta" onChange={handleChange} placeholder="Call To Action" />
            </TextField.Root>
          </Flex>

          <Flex direction='column' gap={"4"}>
            <Text>Background</Text>
            <Select.Root defaultValue="blue" name="color" onValueChange={handleColorChange}>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="blue">Blue (default)</Select.Item>
                <Select.Item value="green">Green</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex direction='column' gap={"4"}>
            <Text>Image</Text>
            <Select.Root defaultValue="none" name="color" onValueChange={handleImageChange}>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="none">None (default)</Select.Item>
                <Select.Item value="interviews">Interviews</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </Flex>


      </Flex>
    </Card>

    <Modal content={state} open={modalOpen} handleClose={() => setModalOpen(false)} />
    <InfoCard content={state} handleCTA={() => setModalOpen(true)} />
    <Export content={state} />
  </>
}