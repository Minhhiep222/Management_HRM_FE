'use client'
// import { useRef } from 'react'
// import { Provider } from 'react-redux'
// import { makeStore, AppStore } from '../lib/store'
// import { initializeCount } from '@/lib/features/counter/counterSlice'

// export default function StoreProvider({
//     children
// }: {
//     children: React.ReactNode
// }) {
//     const storeRef = useRef<AppStore>()
//     if (!storeRef.current) {
//         // Create the store instance the first time this renders
//         storeRef.current = makeStore()

//     }

//     return <Provider store={storeRef.current}>{children}</Provider>
// }

import { ReactNode } from 'react'
import { store } from '@/lib/store'
import { Provider } from 'react-redux'

export const StoreProvider = ({
    children
}: { children: ReactNode }) => {
    return <Provider store={store}>
        {children}
    </Provider>;
}