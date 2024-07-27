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
            containerBackground = false,
            containerEffects = false,
            contentEffects = false,
            timeOutHide = "0.3s",
            trigger = false,
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
        this.backOutDown = ['animate__animated','animate__backOutDown',"animate__delay-1s",'animate__faster']
        this.backOutLeft = ['animate__animated','animate__backOutLeft']
        this.backInDown = ['animate__animated','animate__backInDown']
        this.stdContainerIn = ['opmStdContainerEffectIn']
        this.stdContainerOut = ['animate__animated','animate__fadeOut', 'animate__delay-1s', this.hideClass]
        this.timeOutHide = timeOutHide
        this.trigger = trigger


        let {containerInEffects = this.stdContainerIn,containerOutEffects = this.stdContainerOut} = containerEffects
        this.containerInEffects = containerInEffects
        this.containerOutEffects = containerOutEffects

        this.containerBackground = containerBackground

        let {contentInEffects = this.backInDown,contentOutEffects = this.bounceOut } = contentEffects
        this.contentInEffects = contentInEffects
        this.contentOutEffects = contentOutEffects

         // console.info(this.contentInEffects+"--"+this.contentOutEffects)
    }

       removeAnimateByClass(className, selectors){
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
        }
    }
    removeAnimateByElements(items, selectors){
        //let result = false
            for (let i = 0; i < items.length; i++) {
                if(selectors!== undefined){
                    selectors.forEach((el) => {
                        if (items[i].classList.contains(el)) {
                            items[i].classList.remove(el)
                            items[i].addEventListener('animationend', function (e) {
                                 e.stopPropagation()
                                this.classList.add(this.hideClass)

                            })
                        }
                    })
                }
            }

    }

     addAnimateByElements(items, selectors){

            for (let i = 0; i < items.length; i++) {
                if (selectors !== undefined){
                    selectors.forEach((el) => {
                        if(el !== undefined){
                            if (!items[i].classList.contains(el)) {
                                if (el === this.hideClass) {
                                    setTimeout(function () {
                                        items[i].classList.add(el)
                                    }, this.timeOutHide)
                                } else {
                                    items[i].classList.add(el)
                                }
                            }
                        }
                    })
                    }
            }
        }


     addAnimateByClassName(className, selectors){

        let items = document.getElementsByClassName(className)
        if(typeof(items.length) === "number" && items.length > 0  ){
            for (let j = 0; j < items.length ; j++) {
                if (selectors !== undefined){
                    selectors.forEach((el) => {
                        if(el !== undefined){
                            if (!items[j].classList.contains(el)) {
                                if (el === this.hideClass){
                                setTimeout(function () {
                                    items[j].classList.add(el)
                                    },this.timeOutHide)
                                }else{
                                items[j].classList.add(el)
                                }
                            }
                        }
                    })
                }
            }
        }

    }

    init() {

                if (this.containerBackground) {
                    this.openModal.style.backgroundColor = this.containerBackground
                }
                this.showModal.addEventListener('click', () => {
                    if (this.trigger) {
                        this.trigger()
                    }
                    this.removeAnimateByClass(this.containerClass, this.containerOutEffects)
                    this.removeAnimateByClass(this.contentClass, this.contentOutEffects)

                    this.addAnimateByClassName(this.containerClass, this.containerInEffects)
                    this.addAnimateByClassName(this.contentClass, this.contentInEffects)
                    //console.log(this.openModal)
                    if (this.openModal.classList.contains(this.hideClass)) {
                        this.openModal.classList.remove(this.hideClass)

                    } else {

                    }

                })
                this.btnCancel.addEventListener('click', () => {
                    // this.removeAnimateByClass(this.containerClass, this.containerInEffects)
                    // this.removeAnimateByClass(this.contentClass, this.contentInEffects)
                    // this.animateCSS(this.containerClass,this.containerOutEffects)
                    // this.animateCSS(this.contentClass,this.contentOutEffects)
                    /* testando saida*/
                    let containerElements = document.getElementsByClassName(this.containerClass)
                    let contentElements = document.getElementsByClassName(this.contentClass)

                    this.removeAnimateByElements(contentElements, this.contentInEffects)
                    this.addAnimateByClassName(this.contentClass, this.contentOutEffects)

                    this.removeAnimateByElements(containerElements, this.containerInEffects)
                    this.addAnimateByClassName(this.containerClass, this.containerOutEffects)



                })
        }
    }




export  default OpenModal