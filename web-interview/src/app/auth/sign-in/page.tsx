
import AuthLayout from '@/components/Auth/layout'
import SignIn from '@/components/Auth/signIn'
import React from 'react'

const Page = () => {
  return (
    <div>
      <AuthLayout>
         <SignIn />
      </AuthLayout>
    </div>
  )
}

export default Page
