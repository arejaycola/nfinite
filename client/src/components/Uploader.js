import axios from 'axios'
import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from './StyledButton'

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

const Uploader = ({ data, setData }) => {
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

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
