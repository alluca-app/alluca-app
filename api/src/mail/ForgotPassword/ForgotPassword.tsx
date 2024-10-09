import React from 'react'

import {
  Html,
  Text,
  Hr,
  Body,
  Head,
  Tailwind,
  Preview,
  Container,
  Heading,
} from '@react-email/components'

type ForgotPasswordProps = {
  username: string
  when?: string
  resetUrl: string
}

export function ForgotPassword({
  when = new Date().toLocaleString('nl'),
  resetUrl,
}: ForgotPasswordProps) {
  return (
    <Html lang="nl">
      <Head />
      <Preview>Fleckz: Wachtwoord resetten</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Fleckz: Wachtwoord resetten
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Heb je je wachtwoord vergeten? Je kunt het opnieuw instellen via
              deze link
            </Text>
            <Text>
              <a href={resetUrl} target="_blank" rel="noreferrer">
                Wachtwoord resetten
              </a>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Bericht werd verstuurd op {when}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
