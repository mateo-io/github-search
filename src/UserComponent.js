import React from 'react'
import styled from '@emotion/styled'

// local components
import { Box } from './components'

export default class UserComponent extends React.PureComponent {
  render() {
    const { avatar_url, login, url } = this.props
    return (
      <Wrapper>
        <Box>
          <Img src={avatar_url} />
        </Box>
        <Box>{login}</Box>
        <Box>
          <div>followers:10</div>
          <div>following:50</div>
        </Box>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  overflow: none;
`

const Img = styled.img`
  width: 50px;
`
