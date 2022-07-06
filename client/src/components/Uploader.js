import axios from 'axios'
import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const DropContainer = styled.div`
  padding: 50px;
  width: 300px;
  height: 150px;
  background-color: #fbfbfb;
  border-radius: 10px;
  border: 1px dashed #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    transition: all 0.1s ease-in-out;
  }
`

const StyledButton = styled.button`
  font-size: 18px;
  margin-top: 20px;
  padding: 10px 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 100%;
  background-color: #fbfbfb;
  transition: all 0.1s ease-in-out;

  &:hover:not(:disabled) {
    cursor: pointer;
    box-shadow: none;
  }
`

const Uploader = ({ data, setData }) => {
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  /* TODO (07/02/2022 19:57) show some file stats to the user?*/
  const onValidateClick = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('fileUpload', file)

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      if (response) {
        setData([...response.data])
        navigate('/results', { state: { data: [...response.data] } })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <FileUploader handleChange={file => setFile(file)} types={['CSV']}>
        <DropContainer>
          Click to upload or drag and drop a CSV file here
          {file && <p>{file.name}</p>}
        </DropContainer>
      </FileUploader>
      <StyledButton disabled={file ? false : true} onClick={onValidateClick}>
        Validate
      </StyledButton>
    </div>
  )
}
export default Uploader
