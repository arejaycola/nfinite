import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Content from './Content'
import Header from './Header'
import { StyledButton } from './StyledButton'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  width: 500px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  height: 50px;
`

const Results = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [data, setData] = useState(state.data)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const tempData = [...data]

    for (let i = 0; i < errors.length; i++) {
      const error = errors[i]

      const index = tempData.findIndex(d => d.id === error)
      if (index !== -1) {
        tempData[index].status = 'Error loading image...'
      }
    }

    setData([...tempData])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors])

  return (
    <>
      <Header />
      <Content>
        <div>
          <StyledButton
            onClick={() => {
              navigate('/')
            }}
          >
            Validate Again?
          </StyledButton>
          <List>
            <ListItem>
              <h3>Status</h3>
              <h3>Name</h3>
              <h3>Image</h3>
            </ListItem>
            {data.map(row => {
              return (
                <ListItem key={row.id}>
                  <div>
                    {row.status.length === 0 ? (
                      <img src="./circle-check-solid.svg" alt="check" width="25px" />
                    ) : (
                      <img src="./circle-exclamation-solid.svg" alt={row.status} title={row.status} width="25px" />
                    )}
                  </div>
                  <div>{row.name}</div>
                  <img
                    src={row.url}
                    alt={row.name}
                    width="50px"
                    onError={e => {
                      row.status = 'Error loading image...'
                      setErrors(errors => [...errors, row.id])
                    }}
                  />
                </ListItem>
              )
            })}
          </List>
        </div>
      </Content>
    </>
  )
}
export default Results
