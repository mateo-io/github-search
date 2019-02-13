import * as colors from './colors'
import styled from '@emotion/styled'

/**
 * LAYOUT
 */
export const RootWrapper = styled.div`
  height: 100%;
  background: ${colors.primary};
`

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: -50px;
  height: 100%;
`

export const Background = styled.div`
  background: ${colors.white};
  min-height: 85%;
  top: 50px;
  position: relative;
  border-radius: 4px;
`
/**
 * END LAYOUT
 */

//////////////////////////////////////////////////

/**
 * CORE COMPONENTS
 */
export const SearchInput = styled.input`
  height: 35px;
  padding: 3px 12px;
  width: 280px;
  margin-top: 30px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid ${colors.grey};

  &:focus {
    outline: none !important;
    border: 2px solid ${colors.blue};
  }
`

export const UsersWrapper = styled.div`
  margin-top: 30px;
  min-height: 60%;
  max-height: 60%;
  overflow-y: scroll;
  overflow-x: none;
`

/**
 * END CORE COMPONENTS
 */

//////////////////////////////////////////////////

/**
 * FLEX AND BOXES
 */

export const Box = styled.div`
  flex: 0 1 30%;
  font-size: 18px;
`
/**
 * END FELX AND BOXES
 */
