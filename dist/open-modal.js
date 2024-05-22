const  showModal = document.querySelector('#showModal')
const  btnEdit = document.querySelector('#editButton')
const btnCancel = document.querySelector("#cancelButton")

function removeAnimate(className,selectors){
    //let result = false
    let items = document.getElementsByClassName(className)
    if(typeof(items.length) === "number" && items.length > 0  ) {
        for (let i = 0; i < items.length; i++) {
            selectors.forEach((el) => {
                if (items[i].classList.contains(el)) {
                    items[i].classList.remove(el)

                }
            })

        }
    }else{
        //return result
    }

    //return items
}
function addAnimate(className,selectors){
    let result = false
    let items = document.getElementsByClassName(className)
    if(typeof(items.length) === "number" && items.length > 0  ){
        for (let i = 0; i < items.length; i++) {
            selectors.forEach((el) => {
                if (!items[i].classList.contains(el)) {
                    items[i].classList.add(el)
                }
            })
        }
    }else{
        //return result
    }
    //return items
}
const bounceInLeft = ['animate__animated','animate__bounceInLeft','animate__faster']
const bounceOut = ['animate__animated', 'animate__bounceOut']
const backOutDown = ['animate__animated','animate__backOutDown','animate__faster']
const backOutLeft = ['animate__animated','animate__backOutLeft']
const backInDown = ['animate__animated','animate__backInDown']

showModal.addEventListener('click',() => {
    const openModal = document.querySelector('.open-modal')
    removeAnimate('open-modal', bounceOut)
    removeAnimate('modal-content', bounceOut)

    addAnimate('open-modal', bounceInLeft)
    addAnimate('modal-content', backInDown)
    if (openModal.classList.contains('hide')) {
        openModal.classList.toggle('hide')

    }
})
btnCancel.addEventListener('click',
    function () {
        const openModal = document.querySelector('.open-modal')
        //console.info(openModal.classList.contains('hide'))
        if (!openModal.classList.contains('hide')) {

            removeAnimate('open-modal', bounceInLeft)
            removeAnimate('modal-content', backInDown)

            addAnimate('open-modal', bounceOut)
            addAnimate('modal-content', bounceOut)
            // addAnimate('open-modal', ['animate__animated', 'animate__backOutLeft'])
            // addAnimate('modal-content', ['animate__animated', 'animate__backOutDown', 'animate__faster'])

            // setTimeout(() => {
            //     openMmodal.classList.add('hide')
            // }, "1 second");

        } else {

            removeAnimate('open-modal', bounceInLeft)
            removeAnimate('modal-content', backInDown)

            addAnimate('open-modal', bounceOut)
            addAnimate('modal-content', bounceOut)

            // setTimeout(() => {
            //     openMmodal.classList.add('hide')
            // }, "1 second");


        }

    })
