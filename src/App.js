import React from 'react'
import { debounce } from 'lodash'
import styled from '@emotion/styled'

// styles
import './app.css'
import * as colors from 'colors'
import {
  Wrapper,
  RootWrapper,
  SearchInput,
  UsersWrapper,
  Background,
  Box
} from './components'

// local components
import UserComponent from './UserComponent'

// constants -> if too big move them to another file
const GITHUB_URL = 'https://api.github.com'
const PAGE_ITEM_LIMIT = 10

export default class App extends React.Component {
  constructor(props) {
    super(props)

    // debounce the function so we avoid those pesky rate limits
    this.handleSearchInputChange = debounce(
      this.handleSearchInputChange.bind(this),
      1000
    )

    this.state = {
      query: '',
      userResults: [],
      paginationIndex: 0,
      totalCount: 0
    }
  }

  // keep event handler separate from the actual fetching fn's
  handleSearchInputChange(value) {
    // err handling
    if (!value) {
      console.log(`handleSearchInputChange received an invalid  value`)
      return
    }

    this.fetchUsers(value)
  }

  // main function doing the heavy work
  async fetchUsers(userQuery) {
    // err handling
    if (!userQuery) {
      console.log(`fetchUsers received an invalid userQueryh`)
      return
    }

    // transform it to the query Github Search API v3 expects
    const formattedQuery = encodeURI(userQuery.split(' ').join('+'))

    // make the actual request
    let githubUsersResponse

    try {
      githubUsersResponse = await fetch(
        `${GITHUB_URL}/search/users?q=${formattedQuery}`
      )
        .then(res => res.json())
        .catch(err => err)
    } catch (err) {
      console.error(`fetchUsers(${userQuery}) failed with err:${err}`)
      return
    }

    const { items, total_count } = githubUsersResponse

    this.setState({ userResults: items, totalCount: total_count })

    console.log(`users response length${items.length}`)
    console.log(`first user:${JSON.stringify(items[0])}`)
  }

  renderPaginationControls() {
    const { userResults, paginationIndex } = this.state
    if (userResults.length == 0) {
      return null
    }

    // max number of pages we can render
    const paginationLimit = Math.ceil(userResults.length / PAGE_ITEM_LIMIT)

    const PaginationBox = styled(Box)`
      font-size: 30px;
      font-weight: 900;
      color: black;
      cursor: pointer;
    `

    return (
      <div style={{ display: 'flex' }}>
        <PaginationBox
          onClick={() =>
            this.setState({ paginationIndex: Math.max(paginationIndex - 1, 0) })
          }
        >
          {paginationIndex > 0 ? '<' : ''}
        </PaginationBox>
        <Box>{paginationIndex + 1}</Box>
        <PaginationBox
          onClick={() =>
            this.setState({
              paginationIndex: Math.min(paginationIndex + 1, paginationLimit)
            })
          }
        >
          {'>'}
        </PaginationBox>
      </div>
    )
  }

  render() {
    const { userResults, paginationIndex, totalCount } = this.state
    return (
      <RootWrapper>
        <Wrapper>
          <Background>
            <h1
              style={{
                marginTop: '0',
                top: '40px',
                position: 'relative',
                color: colors['white']
              }}
            >
              Github Search V3 Implementation
            </h1>
            <SearchInput
              placeholder='mateo-io...'
              onChange={e => this.handleSearchInputChange(e.target.value)}
            />
            <div style={{ textAlign: 'left', margin: '60px' }}>
              {userResults.length > 0 && (
                <h2>
                  Displaying {userResults.length} results out of {totalCount}
                </h2>
              )}
            </div>
            <UsersWrapper>
              {userResults &&
                userResults
                  .slice(
                    paginationIndex * PAGE_ITEM_LIMIT,
                    (paginationIndex + 1) * PAGE_ITEM_LIMIT
                  )
                  .map((user, i) => <UserComponent key={user.id} {...user} />)}
            </UsersWrapper>
            {this.renderPaginationControls()}
          </Background>
        </Wrapper>
      </RootWrapper>
    )
  }
}
