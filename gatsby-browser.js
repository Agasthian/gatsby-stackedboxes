import React from 'react'
import Layout from './src/components/layouts/layout'

export const wrapPageElement = ({element,props}) => {
    return <Layout {...props}>{element}</Layout>
}