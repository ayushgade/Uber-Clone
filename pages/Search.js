import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'


function Search() {
    return (
        <Wrapper>
            <ButtonContainer>
            <Link href="/">
                <BackButtton 
                src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
            </ButtonContainer>
            <InputContainer>
            <FormToIcons>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
            </FormToIcons>
            <InputBoxes>
                <Input placeholder="Enter Pickup Location"/>
                <Input placeholder= "Where To ?"/>
            </InputBoxes>
            <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>
            <SavedPlaces>
            <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
            Saved Places
            </SavedPlaces>
            <ConfirmLocation>
             Confrim Locations
            </ConfirmLocation>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen 
`
const ButtonContainer = tw.div`
bg-white px-4 
`

const BackButtton= tw.img`
h-12 cursor-pointer
`
const InputContainer= tw.div`
bg-white flex items-center px-4 mb-2
`
const FormToIcons= tw.div`
flex flex-col w-10  mr-2 items-center`
const Circle= tw.img`
h-2.5 
`
const Line= tw.img`
h-10
`
const Square= tw.img`
h-3
`

const InputBoxes= tw.div`
flex flex-col flex-1 `
const Input= tw.input`
h-10 bg-gray-200 my-2 rounded-5 p-2 outline-none border-none
`
const PlusIcon= tw.img`
rounded-full h-10 w-10 bg-gray-200 ml-3
`
const SavedPlaces= tw.div`
 flex items-center bg-white px-4 py-2
`
const StarIcon = tw.img`
bg-gray-400 rounded-full w-10 h-10 p-2 mr-2
`
const ConfirmLocation= tw.div`
bg-black text-white text-center text-2xl
m-3 py-1 cursor-pointer
`


// h-screen for whole screen
// px is for Both horizontal-padding