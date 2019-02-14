import React from 'react'
import styled from '@emotion/styled'

// local components
import { Box } from './components'

export default class UserComponent extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.fetchUserData()
  }

  async fetchUserData() {
    const { url } = this.props

    let userData
    try {
      userData = await fetch(url).then(res => res.json())
    } catch (err) {
      console.error(`UserComponent.fetchUserData() failed with:${err}`)
      return
    }

    console.log(`user data response:${JSON.stringify(userData)}`)

    this.setState({ ...userData })
  }

  render() {
    const { avatar_url, login, url } = this.props
    const { followers, following, name, location } = this.state
    return (
      <Wrapper onClick={() => window.open(url)}>
        <Box>
          <Img src={avatar_url} />
        </Box>
        <Box>
          <BoldP>{name}</BoldP>
          <p>{login}</p>
        </Box>
        <Box>
          <BoldP>{location}</BoldP>
          <p>LOCATION</p>
        </Box>
        <Box>
          <BoldP>{followers}</BoldP>
          <p>FOLLOWERS</p>
        </Box>
        <Box>
          <BoldP>{following}</BoldP>
          <p>FOLLOWING</p>
        </Box>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 80px;
  margin: 8px;
  width: 100%;
  display: flex;
  overflow: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

const BoldP = styled.div`
  font-size: 16px;
  font-weight: 700;
`

const Img = styled.img`
  width: 70px;
  border-radius: 99%;
`
