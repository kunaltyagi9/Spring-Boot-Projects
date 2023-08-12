import { routePath } from "./route"

export const MESSAGES = {
    invalidPhone: 'Please enter a valid mobile number',
    invalidName: 'Please enter a valid name',
    invalidEmail: 'Please enter a valid email id',
    invalidApi: 'Something went wrong, please try again later'
}

export const breadcrumbItems = [
    { id: 0, label: 'Home', link: routePath.home },
    { id: 1, label: 'Login', link: routePath.login },
    { id: 2, label: 'Quiz', link: routePath.quiz },
    { id: 3, label: 'Result', link: routePath.result },
];

export const loginDefault = {
    phone: '',
    name: '',
    email: ''
}