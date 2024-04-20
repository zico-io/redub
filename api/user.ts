import React, { SetStateAction } from "react"

const api_endpoint: string = 'http://redub.zico.xyz/'

export const createUser = async (form: object, setIsSubmitting: React.Dispatch<SetStateAction<boolean>>) => {
    setIsSubmitting(true)
    const response = await fetch(`${api_endpoint}/api/users`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
    setIsSubmitting(false)
}