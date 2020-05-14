import React from 'react'
import { css } from 'styled-components/macro'
import tw from 'twin.macro'
import { Button, Logo } from 'components'

const IndexPage = () => (
  <div
    css={[
      tw`flex flex-col items-center justify-center`,
      // Combine regular css and Tailwind styles within backticks
      css`
        background: linear-gradient(#db00ff, #0047ff);
        ${tw`h-screen`}
      `
    ]}
  >
    <div tw="flex flex-col justify-center h-full space-y-5">
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

export default IndexPage
