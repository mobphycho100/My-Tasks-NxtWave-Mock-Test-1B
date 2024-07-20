import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  color: #ffffff;
  min-height: 100vh;
  font-family: Roboto;
`

export const LeftPanel = styled.form`
  width: 35%;
  padding: 40px;
  background-color: #131213;
`

export const RightPanel = styled.div`
  width: 65%;
  padding: 40px 20px;
  background-color: #000;
`

export const FormHeading = styled.h1`
  color: #f3aa4e;
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
`

export const FieldContainer = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #333333;
  border-radius: 4px;
  background-color: #333333;
  color: #ffffff;
`

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #333333;
  border-radius: 4px;
  background-color: #333333;
  color: #ffffff;
`

export const Option = styled.option`
  background-color: #1e1e1e;
  color: #ffffff;
`

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`

export const Button = styled.button`
  padding: 9px 20px;
  font-size: 16px;
  color: white;
  background-color: ${({isActive}) => (isActive ? '#f3aa4e' : 'transparent')};
  border: solid 2px #f3aa4e;
  border-radius: 25px;
  cursor: pointer;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
`

export const EmptyTaskList = styled.p`
  color: #ffffff;
  font-size: 24px;
  margin: 50px 0;
  text-align: center;
`

export const TagsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  list-style-type: none;
  padding: 0;
`

export const TagsListItem = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`

export const TasksListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const TasksListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a171d;
  padding: 12px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
`

export const TaskName = styled.p`
  margin: 0;
  font-size: 18px;
  color: #ffffff;
`

export const TaskCategory = styled.span`
  padding: 5px 12px;
  background-color: #f3aa4e;
  border-radius: 20px;
  color: #1e1e1e;
  font-weight: bold;
  font-size: 14px;
  text-transform: capitalize;
`
