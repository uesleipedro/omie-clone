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

  useEffect(() => {
    axios.get('https://spacetoday.herokuapp.com/getLaunchs/1')
      .then((resp) => {
        setData(resp.data.launch);
      })
  }, [])

  const incluiCampo = () => {
    setData([...data, voidData])
  }

  const updateFieldChanged = (index: number, e: any) => {


    //const field = e.target.name
    let newArr: any = [...data];

    let campoSendoAlterado = newArr[index]

    campoSendoAlterado.company = e.target.value

    //let campo = newArr.filter((x: any) => x.company === 'Khrunichev State Research and Production Space Center')

    newArr.splice(index, 1)
    newArr.push(campoSendoAlterado)
    //newArr.splice(newArr.findIndex((e: any) => e.company === 'Khrunichev State Research and Production Space Center'), 1)
    console.log(newArr)
    setData(newArr)
    //campo[0].company = "asdf"
    //newArr.push(campo[0])


    //campo[0].company = 'asdf'
    //console.log(campo[0])
    //newArr[index][`${field}`] = e.target.value

    //console.log(newArr[index][`${field}`], e.target.value)
    //console.log(newArr)
    //newArr[index]

    //setData(newArr); * /
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
            name='namess'
            placeholder='Primeiro nome'
            value={value.company ?? 'void'}
            onChange={(e) => updateFieldChanged(index, e)}
          //  onKeyUp={() => setAlterados([...alterados, id])}
          />
          <input type='text' placeholder='Segundo nome' defaultValue={value.missionType ?? 'void'} />
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
