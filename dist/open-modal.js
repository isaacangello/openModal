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
            timeOutHide = "3s",
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
        this.stdContainerIn = ['opmStdContainerEffectIn']
        this.stdContainerOut = ['opmStdContainerEffectOut']
        this.timeOutHide = timeOutHide

        let {containerInEffects = this.stdContainerIn,containerOutEffects = this.stdContainerOut} = containerEffects
        this.containerInEffects = containerInEffects
        this.containerOutEffects = containerOutEffects

        this.containerBackground = containerBackground

        let {contentInEffects = this.backInDown,contentOutEffects = this.bounceOut } = contentEffects
        this.contentInEffects = contentInEffects
        this.contentOutEffects = contentOutEffects

         // console.info(this.contentInEffects+"--"+this.contentOutEffects)
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
    static removeAnimate(className,selectors) {
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
            //console.info("pasou pelo teste")
        }else{
            //return result
            //console.warn("Não passou pelo teste")
        }

    }
     addAnimate(className,selectors){

        let items = document.getElementsByClassName(className)
        if(typeof(items.length) === "number" && items.length > 0  ){
            for (let i = 0; i < items.length; i++) {
                if (selectors!== undefined){
                selectors.forEach((el) => {
                    if (!items[i].classList.contains(el)) {
                        if (el === this.hideClass){
                            setTimeout(function () {
                                items[i].classList.add(el)
                            },this.timeOutHide)
                        }else{
                            items[i].classList.add(el)
                        }


                    }
                })
                }
            }
        }
     }

    // this method inspired on function found in animate.style
    animateCSS  (elementClass, animation) {
        // We create a Promise and return it
        return new Promise((resolve, reject) => {
            //const animationName = animation[1];
            const node = document.querySelector("."+elementClass);
            this.addAnimate(elementClass,animation)
            function handleAnimationEnd(event,elementClass,animation) {
                event.stopPropagation();
                //OpenModal.removeAnimate(elementClass,animation)
                resolve('Animation ended');
            }
            reject('Some error.')
            // When the animation ends, we clean the classes and resolve the Promise

            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });
    }

    init(){

    if (this.containerBackground){
        this.openModal.style.backgroundColor = this.containerBackground
    }
    this.showModal.addEventListener('click',() => {
        this.removeAnimate(this.containerClass, this.containerOutEffects)
        this.removeAnimate(this.contentClass, this.contentOutEffects)

        this.addAnimate(this.containerClass, this.containerInEffects)
        this.addAnimate(this.contentClass, this.contentInEffects)
        console.log(this.openModal)
        if (this.openModal.classList.contains(this.hideClass)) {
            this.openModal.classList.remove(this.hideClass)

        }else{

        }

    })
            this.btnCancel.addEventListener('click',()=> {

                this.removeAnimate(this.containerClass, this.containerInEffects)
                this.removeAnimate(this.contentClass, this.contentInEffects)

                //this.addAnimate(this.containerClass, this.containerOutEffects)
                // this.addAnimate(this.contentClass, this.contentOutEffects)
                this.animateCSS(this.contentClass,this.contentOutEffects).then(e=>{
                    this.removeAnimate(this.contentClass, this.contentOutEffects)
                    }
                )
                console.info("aQUI ->"+this.containerOutEffects)
                console.log(this.openModal)
               this.animateCSS(this.containerClass,this.containerOutEffects).then(e=>{
                    //this.removeAnimate(this.containerClass, this.containerOutEffects)
                    console.info("animate button cancel")

                })
                this.openModal.addEventListener('animationend',e=>{
                    this.addAnimate(this.contentClass,[`${this.hideClass}` ])
                    this.addAnimate(this.containerClass,[`${this.hideClass}` ])
                })

                // console.info(typeof this.contentOutEffects[1])
                //
                // console.log(this.contentOutEffects[1])
            })

    }


}

export  default OpenModal