import { Pressable, PressableProps } from 'react-native'
import React from 'react'
import AppText from '../AppText'


const AppButton = ({ buttonText, className, ...props }: { buttonText: string; } & PressableProps) => {
    return (
        <Pressable className={"bg-brand rounded-3xl w-full justify-center items-center " + className} {...props}>
            <AppText variant='b' className='text-white py-4' style={{ fontSize: 22 }}>{buttonText}</AppText>
        </Pressable>
    )
}

export default AppButton