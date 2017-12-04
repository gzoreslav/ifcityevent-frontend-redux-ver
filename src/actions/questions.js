import { CALL_API } from '../middleware/api'

export const LOADED_QUESTIONS = Symbol('LOADED_QUESTIONS');
export function loadQuestions() {
    return {
        [CALL_API]: {
            method: 'get',
            path: '/events',
            successType: LOADED_QUESTIONS
        }
    }
}
