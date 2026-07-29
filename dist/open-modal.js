class OpenModal {
    static _instances = []

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
            effectPrefix = 'animate__animated',
            trigger = false,
        } = params

        this.containerClass = containerClass
        this.contentClass = contentClass
        this.hideClass = hideClass
        this.openModal = document.querySelector('.'+containerClass)
        this.showModal = document.querySelector("#"+btnShowId)
        this.btnEdit = document.querySelector("#"+btnEditId)
        this.btnCancel = document.querySelector("#"+btnCancelId)
        this.bounceInLeft = 'animate__bounceInLeft'
        this.bounceOut = 'animate__bounceOut'
        this.backOutDown = 'animate__backOutDown'
        this.backOutLeft = 'animate__backOutLeft'
        this.backInDown = 'animate__backInDown'
        this.stdContainerIn = 'animate__fadeIn'
        this.stdContainerOut = 'animate__fadeOut'
        this.effectPrefix = effectPrefix
        this.trigger = trigger

        let {containerInEffects = this.stdContainerIn,containerOutEffects = this.stdContainerOut} = containerEffects
        this.containerInEffects = containerInEffects
        this.containerOutEffects = containerOutEffects
        this.containerBackground = containerBackground

        let {contentInEffects = this.backInDown,contentOutEffects = this.bounceOut } = contentEffects
        this.contentInEffects = contentInEffects
        this.contentOutEffects = contentOutEffects

        this._boundShow = this._show.bind(this)
        this._boundCancel = this._cancel.bind(this)
        this._boundKeydown = this._onKeydown.bind(this)
        this._boundBackdrop = this._onBackdropClick.bind(this)
    }

    static _closeOthers(instance) {
        OpenModal._instances.forEach(inst => {
            if (inst !== instance && !inst.openModal.classList.contains(inst.hideClass)) {
                inst._cancel()
            }
        })
    }

    _show() {
        OpenModal._closeOthers(this)
        if (this.trigger) {
            this.trigger()
        }
        this.clearAnimateClasses(this.containerClass)
        this.clearAnimateClasses(this.contentClass)
        this.addAnimateByClassName(this.containerClass, this.containerInEffects)
        this.addAnimateByClassName(this.contentClass, this.contentInEffects)

        if (this.openModal.classList.contains(this.hideClass)) {
            this.openModal.classList.remove(this.hideClass)
        }

        document.body.style.overflow = 'hidden'
    }

    _cancel() {
        this.clearAnimateClasses(this.containerClass)
        this.clearAnimateClasses(this.contentClass)
        this.addAnimateByClassName(this.containerClass, this.containerOutEffects)
        this.addAnimateByClassNameAndHide(this.contentClass, this.contentOutEffects, this.hideClass)
    }

    _onKeydown(e) {
        if (e.key === 'Escape' && !this.openModal.classList.contains(this.hideClass)) {
            this._cancel()
        }
    }

    _onBackdropClick(e) {
        if (e.target === this.openModal) {
            this._cancel()
        }
    }

    updateEffects(contentInEffects, contentOutEffects){
        this.contentInEffects = contentInEffects
        this.contentOutEffects = contentOutEffects
    }

    clearAnimateClasses(className){
        let items = this.openModal.querySelectorAll("."+className)
        items.forEach(element => {
            let classes = Array.from(element.classList)
            classes.forEach(cls => {
                if (cls.startsWith('animate__')) {
                    element.classList.remove(cls)
                }
            })
        })
    }

    addAnimateByClassName(className, selector){
        let items = this.openModal.querySelectorAll("."+className)
        items.forEach(function (element) {
            if(!element.classList.contains(this.effectPrefix)){
                element.classList.add(this.effectPrefix)
            }
            if(!element.classList.contains(selector)){
                element.classList.add(selector)
            }
        }, this)
    }

    addAnimateByClassNameAndHide(className, selector, hideClass){
        if(hideClass === undefined){hideClass = this.hideClass}
        let items = this.openModal.querySelectorAll("."+className)
        items.forEach(element => {
            element.classList.add(this.effectPrefix)
            element.classList.add(selector)
            element.addEventListener('animationend', event => {
                event.stopPropagation()
                this.openModal.classList.add(hideClass)
                document.body.style.overflow = ''
            }, { once: true })
        })
    }

    init() {
        if (this.containerBackground) {
            this.openModal.style.backgroundColor = this.containerBackground
        }

        if (!OpenModal._instances.includes(this)) {
            OpenModal._instances.push(this)
        }

        this.showModal.addEventListener('click', this._boundShow)
        this.btnCancel.addEventListener('click', this._boundCancel)
        document.addEventListener('keydown', this._boundKeydown)
        this.openModal.addEventListener('click', this._boundBackdrop)
    }

    close() {
        this._cancel()
    }

    destroy() {
        this.showModal.removeEventListener('click', this._boundShow)
        this.btnCancel.removeEventListener('click', this._boundCancel)
        document.removeEventListener('keydown', this._boundKeydown)
        this.openModal.removeEventListener('click', this._boundBackdrop)
        this.openModal = null
        this.showModal = null
        this.btnCancel = null
    }
}

export default OpenModal
