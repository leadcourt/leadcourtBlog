import {atom} from 'recoil'
import {recoilPersist} from 'recoil-persist'

const {persistAtom} = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage

})

export const postState = atom({
    key: 'postState',
    default: {},
    effects_UNSTABLE: [persistAtom]
})