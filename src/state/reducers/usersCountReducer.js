
// Important
import { types } from "../actions/usersCountActions";

export const userCountReducer = (state = {}, action) => {
    const users = action.payload
    switch(action.type) {
        case types.COUNT_USERS:
            return ({
                all: users.length,
                week: users.filter(user => user.billingPlan.name === 'week').length,
                month: users.filter(user => user.billingPlan.name === 'month').length,
                year: users.filter(user => user.billingPlan.name === 'year').length,
            })
        default:
            return state;
    }
}