import React from 'react'
import styled from '@emotion/styled'

// local components
import { Box } from './components'
import * as colors from './colors'

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

  // my boy
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
          <P>{login}</P>
        </Box>
        <Box>
          <BoldP>{location}</BoldP>
          <P>LOCATION</P>
        </Box>
        <Box>
          <BoldP>{followers}</BoldP>
          <P>FOLLOWERS</P>
        </Box>
        <Box>
          <BoldP>{following}</BoldP>
          <P>FOLLOWING</P>
        </Box>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 80px;
  margin: 12px;
  width: 100%;
  display: flex;
  overflow: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

const P = styled.p`
  margin-top: 8px;
  font-weight: 500;
  color: ${colors.black};
  font-size: 13px;
`

const BoldP = styled.div`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 500;
`

const Img = styled.img`
  width: 70px;
  border-radius: 99%;
`
