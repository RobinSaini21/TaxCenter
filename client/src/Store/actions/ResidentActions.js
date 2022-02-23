export const USER_IS_INDIAN = 'USER_IS_INDIAN';
export const USER_IS_NRI = 'USER_IS_NRI';
export const USER_IS_NOT_ORDINART = 'USER_IS_NOT_ORDINART';

export const userisindian = () =>({
    type: USER_IS_INDIAN,
})

export const userisnri = () =>({
    type: USER_IS_NRI,
})

export const userisnotordinart = () => ({
    type: USER_IS_NOT_ORDINART,
})