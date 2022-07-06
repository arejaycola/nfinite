import { useState } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import Uploader from './components/Uploader'
import Content from './components/Content'

function App() {
  const [data, setData] = useState([])
  const StyledForm = styled.form`
    padding: 50px 100px;
  `

  return (
    <div className="App">
      <Header />
      <Content>
        <StyledForm>
          <Uploader data={data} setData={setData} />
        </StyledForm>
      </Content>
    </div>
  )
}

export default App
