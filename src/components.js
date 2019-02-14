import * as colors from './colors'
import styled from '@emotion/styled'

const MARGIN_TOP_LANDING_BOX = '50px'

/**
 * LAYOUT
 */
export const RootWrapper = styled.div`
  background: ${colors.primary};
  padding-top: ${MARGIN_TOP_LANDING_BOX};
`

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: -50px;
  min-height: calc(100vh - ${MARGIN_TOP_LANDING_BOX});
  height: auto;
`

export const Background = styled.div`
  background: ${colors.white};
  min-height: 85%;
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
  min-height: 720px;
  overflow: hidden;
`

/**
 * END CORE COMPONENTS
 */

//////////////////////////////////////////////////

/**
 * FLEX AND BOXES
 */

export const Box = styled.div`
  flex: 0 1 33%;
  font-size: 14px;
`
/**
 * END FELX AND BOXES
 */
