interface IUser {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small?: string
        large?: string
    }
}

export interface IChatMessage {
    photo: string
    userName: string
    message: string
    userId: number
}

export {
    IUser, IChatMessage
}