import { useState, useEffect } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import Uploader from './components/Uploader'
import Content from './components/Content'

function App() {
  //   const [file, setFile] = useState(null);
  const [data, setData] = useState([])
  const [errors, setErrors] = useState([])
  //   const [isLoading, setIsLoading] = useState(false)
  const StyledForm = styled.form`
    padding: 50px 100px;
  `
  /* TODO (07/02/2022 19:57) show some file stats to the user?*/
  //   const onValidateClick = async e => {
  //     e.preventDefault()
  //     const formData = new FormData()
  //     formData.append('fileUpload', file)

  //     try {
  //       const response = await axios.post('http://localhost:5000/upload', formData, {
  //         headers: { 'Content-Type': 'multipart/form-data' },
  //       })
  //       setIsLoading(true)

  //       if (response) {
  //         console.log(response.data)
  //         setData([...response.data])
  //         setIsLoading(false)
  //       }
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }

//   useEffect(() => {
//     const tempData = [...data]

//     for (let i = 0; i < errors.length; i++) {
//       const error = errors[i]

//       const index = tempData.findIndex(d => d.id === error)
//       if (index !== -1) {
//         tempData[index].status = 'Error loading image...'
//       }
//     }

//     setData([...tempData])
//   }, [errors])

  return (
    <div className="App">
      <Header />
      <Content>
        <StyledForm>
          <Uploader data={data} setData={setData} />
        </StyledForm>
      </Content>

      {/* <Results /> */}
      {/* {data && (<div>{data.map(row => {return (<div>{row.name} {row.status}</div>)}</div>)} */}
      {/* {isLoading && <div>Loading...</div>} */}
      {/* {data && (
        <div>
          {data.map(row => {
            return (
              <div key={row.id}>
                {row.name}
                {row.status}
                <img
                  src={row.url}
                  alt={row.name}
                  width="50px"
                  onError={e => {
                    // row.status = 'Error loading image...'
                    setErrors(errors => [...errors, row.id])
                  }}
                />
              </div>
            )
          })}
        </div>
      )} */}
    </div>
  )
}

export default App
