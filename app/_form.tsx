'use client'

import { Card, Flex, Heading, Select, Text, TextArea, TextField } from "@radix-ui/themes";
import { useEffect, useLayoutEffect, useState } from "react";
import { InfoCard } from "./_infocard";
import { Modal } from "./_modal";
import { Export } from "./_export";
import { Save } from "./_save";
import { Load } from "./_load";
import { Content, File } from "./_types";

const defaultValue = {
  title: '',
  modal: '',
  card: '',
  color: 'blue',
  image: 'none',
  cta: '',
}

export const Form = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<string | undefined>(undefined)
  const [files, setFiles] = useState<File[]>([])
  const [state, setState] = useState(defaultValue)

  useLayoutEffect(() => {
    const entries = Object.entries(localStorage)

    const files: File[] = entries.filter(([key]) => key.startsWith('ics_file_'))

    setFiles(files)
  }, [])

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

  const loadFile = (name: string) => {
    if (name === 'new') {
      setState(defaultValue)
      setSelectedFile(undefined)
      return
    }

    const content = files.find(([key]) => key === name)

    if (!content) throw new Error('no content for selected file. Please reload')

    const parsed = JSON.parse(content[1])

    setSelectedFile(name)
    setState({
      title: name.replace('ics_file_', ''),
      ...parsed
    })
  }

  return <>
    <Card style={{ width: '100%', maxWidth: 'min(100vw, 800px)' }}>
      <Flex direction='column' gap={"4"}>
        <Flex direction='row' gap={"4"}>
          <Heading className="flex-1">Info Card Config</Heading>
          <TextField.Root>
            <TextField.Input name="title" value={state.title} onChange={handleChange} placeholder="title" />
          </TextField.Root>
          <Save content={state} />
          <Load files={files} selectedFile={selectedFile} loadFile={loadFile} />
        </Flex>

        <Text>Modal content</Text>
        <TextArea size="1" name="modal" value={state.modal} onChange={handleChange} placeholder="Modal content"></TextArea>
        <Text>Card content</Text>
        <TextArea size="1" name="card" value={state.card} onChange={handleChange} placeholder="Modal content"></TextArea>

        <Flex direction='row' gap={"4"}>
          <Flex direction='column' className="flex-1" gap={"4"}>
            <Text>CTA</Text>
            <TextField.Root>
              <TextField.Input name="cta" onChange={handleChange} value={state.cta} placeholder="Call To Action" />
            </TextField.Root>
          </Flex>

          <Flex direction='column' gap={"4"}>
            <Text>Background</Text>
            <Select.Root defaultValue="blue" value={state.color} name="color" onValueChange={handleColorChange}>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="blue">Blue (default)</Select.Item>
                <Select.Item value="green">Green</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex direction='column' gap={"4"}>
            <Text>Image</Text>
            <Select.Root value={state.image} name="color" onValueChange={handleImageChange}>
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