import ModalAlert from "./../Utils/Modal"
export default function Update({ updateTitle, colorScheme, varient }) {
  return (
    <ModalAlert
      modalTitle={updateTitle}
      buttonAction="Update"
      buttonTitle="Update"
      buttonVarient="outline"
      buttonColorScheme="orange"
    />
  )
}
