import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  MainContainer,
  LeftPanel,
  RightPanel,
  FormHeading,
  FieldContainer,
  Label,
  Input,
  Select,
  Option,
  Button,
  MainHeading,
  ButtonContainer,
  TagsListContainer,
  TagsListItem,
  TasksListContainer,
  TasksListItem,
  EmptyTaskList,
  TaskName,
  TaskCategory,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    activeTagId: '',
    textInputValue: '',
    selectedTagValue: tagsList[0].optionId,
    taskList: [],
  }

  handleSubmit = event => {
    event.preventDefault()

    const {textInputValue, selectedTagValue} = this.state

    if (textInputValue.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        name: textInputValue,
        category: selectedTagValue,
      }

      this.setState(prev => ({
        taskList: [...prev.taskList, newTask],
        textInputValue: '',
        selectedTagValue: tagsList[0].optionId,
      }))
    }
  }

  getFilteredList = () => {
    const {activeTagId, taskList} = this.state

    const filteredList = taskList.filter(each =>
      each.category.includes(activeTagId),
    )

    return filteredList
  }

  handleSelectInput = event => {
    this.setState({selectedTagValue: event.target.value})
  }

  handleChangeInput = event => {
    this.setState({textInputValue: event.target.value})
  }

  changeActiveTagId = optionId => {
    this.setState(prev => ({
      activeTagId: prev.activeTagId === optionId ? '' : optionId,
    }))
  }

  render() {
    const {activeTagId, textInputValue, selectedTagValue} = this.state
    const filteredTasksList = this.getFilteredList()

    return (
      <MainContainer>
        <LeftPanel onSubmit={this.handleSubmit}>
          <FormHeading>Create a task!</FormHeading>
          <FieldContainer>
            <Label htmlFor="task">Task</Label>
            <Input
              id="task"
              type="text"
              placeholder="Enter the task here"
              value={textInputValue}
              onChange={this.handleChangeInput}
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="tags">Tags</Label>
            <Select value={selectedTagValue} onChange={this.handleSelectInput}>
              {tagsList.map(each => (
                <Option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
          </FieldContainer>
          <ButtonContainer>
            <Button type="submit">Add Task</Button>
          </ButtonContainer>
        </LeftPanel>
        <RightPanel>
          <MainHeading>Tags</MainHeading>
          <TagsListContainer>
            {tagsList.map(each => (
              <TagsListItem key={each.optionId}>
                <Button
                  isActive={each.optionId === activeTagId}
                  type="button"
                  onClick={() => this.changeActiveTagId(each.optionId)}
                >
                  {each.displayText}
                </Button>
              </TagsListItem>
            ))}
          </TagsListContainer>
          <MainHeading>Tasks</MainHeading>
          <TasksListContainer>
            {filteredTasksList.length === 0 ? (
              <EmptyTaskList>No Tasks Added Yet</EmptyTaskList>
            ) : (
              filteredTasksList.map(each => (
                <TasksListItem key={each.id}>
                  <TaskName>{each.name}</TaskName>
                  <TaskCategory>{each.category}</TaskCategory>
                </TasksListItem>
              ))
            )}
          </TasksListContainer>
        </RightPanel>
      </MainContainer>
    )
  }
}

export default MyTasks
