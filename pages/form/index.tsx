import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import axios from 'axios'

type dataProps = {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  missionType: string;
}

const voidData =
{
  id: uuid(),
  firstName: '',
  lastName: '',
  company: '',
  missionType: ''
}

const Form = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const [alterados, setAlterados] = useState<string[]>([])
  const [isEditing, setIsEditing] = useState<boolean>(true)

  console.log(data)

  useEffect(() => {
    axios.get('https://spacetoday.herokuapp.com/getLaunchs/1')
      .then((resp: any) => {
        setData(resp.data.launch);
      })
  }, [])

  const incluiCampo = () => {
    setData([...data, voidData])
  }

  const updateFieldChanged = (index: number, e: any) => {
    e.preventDefault()
    let newArr: any = [...data];

    let campoSendoAlterado = newArr[index]

    campoSendoAlterado[e.target.name] = e.target.value

    setData((prevState: any) => {
      return prevState.map((item: any, i: number) => {
        return i === index ? campoSendoAlterado : item
      })

    })

  }

  return <div style={{ paddingTop: '70px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
    {data.map((value, index) => {
      let id = uuid()
      return (
        <form
          key={id}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <input
            disabled={isEditing}
            type='text'
            name='company'
            placeholder='Primeiro nome'
            defaultValue={value.company ?? ''}
            onBlur={(e) => updateFieldChanged(index, e)}
          />
          <input type='text' placeholder='Segundo nome' defaultValue={value.missionType ?? ''} />
          <input type='button' value='editar' onClick={() => setIsEditing(!isEditing)} />
          <input type='button' value='excluir' />
        </form>
      )
    })}
    <input
      type='button'
      value='incluir'
      style={{
        width: '100px'
      }}
      onClick={incluiCampo}
    />
  </div>
}

export default Form
