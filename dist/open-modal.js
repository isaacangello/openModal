/**
 *
 */
class OpenModal{
    /**
     *  todos parametros serão recebitos no construtor da classe através de um objeto
     * @param params
     */
    constructor(params = {}){
        let {
            btnShowId = "showModal",
            btnEditId = 'editButton',
            btnCancelId = "cancelButton",
            containerClass = 'open-modal',
            contentClass = 'modal-content',
            hideClass = 'hide',
            containerEffects = false,
            contentEffects = false,
        } = params
        // console.log(btnShowId)
        this.containerClass = containerClass
        this.contentClass = contentClass
        this.hideClass = hideClass
        this.openModal = document.querySelector('.'+containerClass)
        this.showModal = document.querySelector("#"+btnShowId)//
        this.btnEdit = document.querySelector("#"+btnEditId)
        this.btnCancel = document.querySelector("#"+btnCancelId)
        this.bounceInLeft = ['animate__animated','animate__bounceInLeft','animate__faster']
        this.bounceOut = ['animate__animated', 'animate__bounceOut']
        this.backOutDown = ['animate__animated','animate__backOutDown','animate__faster']
        this.backOutLeft = ['animate__animated','animate__backOutLeft']
        this.backInDown = ['animate__animated','animate__backInDown']

        let {containerInEffects = this.bounceInLeft,containerOutEffects = this.bounceOut} = containerEffects
        this.containerInEffects = containerInEffects
        this.containerOutEffects = containerOutEffects

        let {contentInEffects = this.backInDown,contentOutEffects = this.bounceOut } = contentEffects
        this.contentInEffects = contentInEffects
        this.contentOutEffects = contentOutEffects

        console.info(this.containerOutEffects)
    }


       removeAnimate(className,selectors){
        //let result = false
        let items = document.getElementsByClassName(className)
        if(typeof(items.length) === "number" && items.length > 0  ) {
            for (let i = 0; i < items.length; i++) {
                if(selectors!== undefined){
                    selectors.forEach((el) => {
                        if (items[i].classList.contains(el)) {
                            items[i].classList.remove(el)

                        }
                    })
                }

            }
        }else{
            //return result
        }

        //return items
    }
     addAnimate(className,selectors){
        let result = false
        let items = document.getElementsByClassName(className)
        if(typeof(items.length) === "number" && items.length > 0  ){
            for (let i = 0; i < items.length; i++) {
                if (selectors!== undefined){
                selectors.forEach((el) => {
                    if (!items[i].classList.contains(el)) {
                        items[i].classList.add(el)
                    }
                })
                }
            }
        }else{
            //return result
        }
        //return items
    }

    init(){
    this.showModal.addEventListener('click',() => {

        this.removeAnimate(this.containerClass, this.containerOutEffects)
        console.info(this.contentOutEffects)
        this.removeAnimate(this.contentClass, this.contentOutEffects)

        this.addAnimate(this.containerClass, this.containerInEffects)
        this.addAnimate(this.contentClass, this.contentInEffects)
        if (this.openModal.classList.contains(this.hideClass)) {
            this.openModal.classList.toggle(this.hideClass)

        }
    })
    this.btnCancel.addEventListener('click',()=> {

            //console.info(openModal.classList.contains('hide'))
            if (!this.openModal.classList.contains(this.hideClass)) {
                this.openModal.classList
            }
                this.removeAnimate(this.containerClass, this.contentInEffects)
                this.removeAnimate(this.contentClass, this.contentInEffects)

                this.addAnimate(this.containerClass, this.containerOutEffects)
                this.addAnimate(this.contentClass, this.contentOutEffects)

        })
    }
}

export  default OpenModal