const api_endpoint: string = 'https://redub.zico.xyz'

export const createUser = async (form: object) => {
    try {
        const response = await fetch(`${api_endpoint}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        return response
    }catch(e){
        throw new Error(e)
    }
}

export const login = async (form: object) => {
    try {
        const response = await fetch(`${api_endpoint}/api/users/login?`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        return response
    }catch(e){
        throw new Error(e)
    }
}